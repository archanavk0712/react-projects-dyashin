import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function RegisterPageComp() {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        phone: ""
    })

    const [validateErrors, setvalidateErrors] = useState({})

    const validateData = () => {
        let error = {}
        if (!userData.name.trim()) {
            error.name = "Name is required"
        } else if (!/^[A-Za-z\s]{3,30}$/.test(userData.name)) {
            error.name = "Invalid Name"
        }

        if (!userData.email.trim()) {
            error.email = "Email is required"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
            error.email = "Invalid email"
        }

        if (!userData.password.trim()) {
            error.password = "Password is required"
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/.test(userData.password)) {
            error.password = "Invalid password"
        }

        if (!userData.phone.trim()) {
            error.phone = "Phone number is required"
        } else if (!/^\d{10}$/.test(userData.phone)) {
            error.phone = "Invalid phone number"
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
            const duplicateUser = existingUsers.find((u) => u.email === userData.email);
            if (duplicateUser) {
                alert("This email is already registered");
                return;
            }

            existingUsers.push(userData);
            localStorage.setItem("users", JSON.stringify(existingUsers));

            alert("Registered Successfully");

            setUserData({
                name: "",
                email: "",
                password: "",
                phone: ""
            });
            setvalidateErrors({});
            navigate("/");
        }
    }
    return (
        <div>
            <h1>Register Page</h1>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={userData.name}
                        onChange={handlechange} />
                    {validateErrors.name && (<p className="text-danger fs-6">{validateErrors.name}</p>)}
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
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
                        placeholder="Enter the password"
                        name="password"
                        value={userData.password}
                        onChange={handlechange} />
                    {validateErrors.password && (<p className="text-danger fs-6">{validateErrors.password}</p>)}
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your Phone number"
                        name="phone"
                        value={userData.phone}
                        onChange={handlechange} />
                    {validateErrors.phone && (<p className="text-danger fs-6">{validateErrors.phone}</p>)}
                </Form.Group>

            </Form>
            <Button onClick={(event) => saveData(event)}>Register</Button>
            <h2 onClick={() => navigate("/login")} >Already registered....Login here</h2>
        </div>
    )
}

export default RegisterPageComp
