import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import userContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [apiData, setApiData] = useState([])

    // const { setUser } = useContext(userContext);
    
    useEffect(() => {
        axios
            .get("https://670e4b65073307b4ee464347.mockapi.io/userapi")
            .then((response) => {
                setApiData(response.data);
            });
    }, [])
    const link = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();


        const userFilteredData = apiData.filter(item => item.email == email)
        if (userFilteredData.length != 0) {
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            // setUser({ email, password });
            link('/')
        } else {
            link('/signup')
        }


    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>

                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {message && <p>{message}</p>}
                <a href="/forget">Forgot your password?</a>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;