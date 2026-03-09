import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBarComponent from '../components/NavbarComponent'
import TableComponent from '../components/TableComponent';
import FormComponent from '../components/FormCOmponent';


function App() {
  const [allUsers, setallUsers] = useState(
    JSON.parse(localStorage.getItem("userData"))
    ? JSON.parse(localStorage.getItem("userData"))
    :[]
  )

   const [searchTerm, setSearchTerm] = useState("");

  const getUserData=(data)=>{
    console.log(data);
    
    let allUsersData=[...allUsers];
    allUsersData.push(data)
    localStorage.setItem("userData",JSON.stringify(allUsersData))
    setallUsers(allUsersData)
  }

   const filteredUsers = allUsers.filter((user) =>
    Object.values(user)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <NavBarComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <FormComponent getUserData={getUserData}/>
      <TableComponent allUsers={filteredUsers}/>
    </>
  )
}

export default App
