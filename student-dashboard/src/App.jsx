import { useState } from 'react'
import './App.css'
import AddStudentForm from './components/AddStudentForm'
import StudentList from './components/StudentList'
import StudentDashboard from './components/StudentDashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <StudentDashboard />
        <Routes>
          <Route path="/add" element={<AddStudentForm />}></Route>
          <Route path="/list" element={<StudentList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
