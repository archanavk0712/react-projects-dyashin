import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LoginPageComp() {

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [validateErrors, setvalidateErrors] = useState({})

    const validateData = () => {
        let error = {}
        if (!userData.email.trim()) {
            error.email = "Email is required"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
            error.email = "Invalid Email"
        }

        if (!userData.password.trim()) {
            error.password = "Password is required"
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/.test(userData.password)) {
            error.password = "Invalid User Password"
        }
        return error;
    }

    const handlechange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        })
    }

    const saveData = (event) => {
        event.preventDefault();
        let errors = validateData();
        if (Object.keys(errors).length > 0) {
            setvalidateErrors(errors);
        } else {
            let existingUsers = JSON.parse(localStorage.getItem("users")) || [];

            const loggedUser = existingUsers.find((u) =>
                u.email === userData.email && u.password === userData.password
            );

            if (loggedUser) {
                alert("Login Successful");
                setUserData({ email: "", password: "" });
                navigate("/");
            } else {
                alert("User not registered or invalid credentials");
            }
        }
    }

        return (
            <div>
                <h1>Login Page</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            name="email"
                            value={userData.email}
                            onChange={handlechange} />
                        {validateErrors.email && (<p className="text-danger fs-6">{validateErrors.email}</p>)}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={userData.password}
                            onChange={handlechange} />
                        {validateErrors.password && (<p className="text-danger fs-6">{validateErrors.password}</p>)}
                    </Form.Group>
                </Form>
                <Button onClick={(event) => saveData(event)}>Login</Button>
                <h2 onClick={() => navigate("/register")} >Account not present....Register here</h2>
            </div>
        )
    }

    export default LoginPageComp
