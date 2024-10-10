const { TokenExpiredError } = require('jsonwebtoken');
const User = require('../models/user-model')

const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;
        // console.log(data);
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(400).json({ message: "email already exists" })
        }


        const userCreated = await User.create({ username, email, phone, password })

        return res.status(200).send({
            message: "registration successfull",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString()
        })
    } catch (error) {
        console.log(error);
    }
}
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email: email })

        if (!userExist) {
            return res.status(400).send("No such user exist")
        }

        const user = await userExist.comparePassword(password);
        if (user) {
            return res.status(200).send({
                message: "login successfull",
                token: await userExist.generateToken(),
                userId: userExist._id.toString()
            })
        }
        else {
            res.status(401).json({ message: "Invalid email or password" })
        }
    } catch (error) {
        console.log(error);
    }
}

const user = async (req, res) => {
    try {
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({userData});
    } catch (error) {
        console.log(error);

    }

}

module.exports = { register, login, user };