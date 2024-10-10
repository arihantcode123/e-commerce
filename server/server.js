require('dotenv').config()
const express=require('express');
const app=express();
const userRoute=require('./router/user-router')
const contactRoute=require('./router/contact-router')
const productRoute=require('./router/product-router')
const connectDB=require('./utils/db');
const errorMiddleware = require('./middlewares/error-middleware');
const cors = require('cors');

const corsOption={
    origin:"http://localhost:5173",
    method:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
}

app.use(cors(corsOption));

app.use(express.json())
app.use('/api/auth',userRoute)
app.use('/api/form',contactRoute)
app.use('/api/data',productRoute)

app.use(errorMiddleware)

const PORT=5000;
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("server is running at port ",PORT);
    })
})