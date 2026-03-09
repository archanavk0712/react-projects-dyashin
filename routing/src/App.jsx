import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from './Components/NavBarComp';
import HomePageComp from './Components/HomePageComp';
import LoginPageComp from './Components/LoginPageComp';
import RegisterPageComp from './Components/RegisterPageComp';

function App() {

  return (
    <>
    <BrowserRouter>
      <NavBarComp/>
      <Routes>
        <Route path="/" element={<HomePageComp/>}></Route>
        <Route path="/login" element={<LoginPageComp/>}></Route>
        <Route path="/register" element={<RegisterPageComp/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
