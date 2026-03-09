import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

function AddStudentForm() {

    const [data, setdata] = useState({
        name: "",
        email: "",
        roll: "",
        class: ""
    })

    const [validateErrors, setvalidateErrors] = useState({})

    const validateData = () => {
        let error = {}
        if (!data.name.trim()) {
            error.name = "Name is required"
        } else if (!/^[a-zA-Z ]+$/.test(data.name)) {  //John Doe
            error.name = "Invalid name"
        }

        if (!data.email.trim()) {
            error.email = "Email is required"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {  //john@gmail.com
            error.email = "Invalid email"
        }

        if (!data.roll.trim()) {
            error.roll = "Roll number is required"
        } else if (!/^([1-9]|10)$/.test(data.roll)) {  //21
            error.roll = "Invalid roll number"
        }

        if (!data.class.trim()) {
            error.class = "class is required"
        } else if (!/^([1-9]|10)$/.test(data.class)) { //2
            error.class = "Invalid class"
        }

        return error;
    }

    const handlechange = (event) => {
        setdata({
            ...data,
            [event.target.name]: event.target.value,
        })
    }

    const savedata = (event) => {
        event.preventDefault();
        let errors = validateData();
        if (Object.keys(errors).length > 0) {
            setvalidateErrors(errors);
        } else {
           let oldData=JSON.parse(localStorage.getItem("student")) || [];
           oldData.push(data);
           localStorage.setItem("student",JSON.stringify(oldData));
           alert("Student added successfully")
            setdata({
                name: "",
                email: "",
                roll: "",
                class: ""
            })
            setvalidateErrors({});
        }
    }

    return (
        <div style={{
            padding: '40px'
        }}>
            <h1 >Add Student data</h1>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label >Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={data.name}
                        onChange={handlechange} />
                    {validateErrors.name && (<p className="text-danger fs-6">{validateErrors.name}</p>)}
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label >Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        name="email"
                        value={data.email}
                        onChange={handlechange} />
                    {validateErrors.email && (<p className="text-danger fs-6">{validateErrors.email}</p>)}
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label >Roll Number</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="1EW21CS019"
                        name="roll"
                        value={data.roll}
                        onChange={handlechange} />
                    {validateErrors.roll && (<p className="text-danger fs-6">{validateErrors.roll}</p>)}
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label >Class</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your class"
                        name="class"
                        value={data.class}
                        onChange={handlechange} />
                    {validateErrors.class && (<p className="text-danger fs-6">{validateErrors.class}</p>)}
                </Form.Group>

                <Button variant="primary" type="submit" onClick={savedata}>Submit</Button>
            </Form>
        </div>
    );
}
export default AddStudentForm
