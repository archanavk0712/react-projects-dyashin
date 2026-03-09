import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';

function StudentList() {

    const [student, setstudent] = useState([])

    useEffect(()=>{
        let storedData=JSON.parse(localStorage.getItem("student")) || []
        setstudent(storedData);
    },[])
    return (
        <Table striped bordered style={{
            padding: '40px'
        }}>
            <thead>
                <tr>
                    <th>Roll number</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Class</th>
                </tr>
            </thead>
            <tbody>
                {student.map((val, ind) => {
                    return (
                        <tr key={ind}>
                            <td>{val.roll}</td>
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                            <td>{val.class}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    );
}

export default StudentList
