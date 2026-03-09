import { useState } from 'react'
import './App.css'
import MyComp from './Components/MyComp'
import Counter from './Components/Counter';
import DetailsComp from './Components/DetailsComp';
import BirdsComp from './Components/BirdsComp';

function App() {
    const [isShow, setisShow] = useState(true);
  return (
    <>
    <button onClick={()=>setisShow(false)}>Unmount</button>
    {isShow && <MyComp/>} 
    <Counter/>
    <DetailsComp/>
    <BirdsComp/>
    </>
  )
}

export default App
