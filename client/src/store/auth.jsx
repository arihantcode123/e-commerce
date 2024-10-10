import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("")
    const [products, setProducts] = useState(
        [{
            "id": 4,
            "name": "monitor",
            "price": 49.99,
            "image": "https://cdn.pixabay.com/photo/2017/03/24/07/01/computer-2170392_1280.jpg"
        }])

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("token", serverToken)
    }

    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    }

    let isLoggedIn = !!token;

    const userAuthentication = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/user", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            // console.log(response);

            if (response.ok) {
                const data = await response.json();
                setUser(data.userData);

            }
            else {
                console.log("error fetching user data");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getProductList = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/data/products", {
                method: "GET"
            })

            if (response.ok) {

                const data = await response.json();
                setProducts(data);
                console.log(data);

            }

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        userAuthentication();
        getProductList();
    }, [])

    return <AuthContext.Provider value={{ storeTokenInLS, isLoggedIn, LogoutUser, user, products }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the provider")
    }
    return authContextValue;
}