import { useState } from 'react'
import './App.css'
import ParentComp from './components/ParentComp'
import Parent1 from './components/Parent1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ParentComp/> */}
      <Parent1/>
    </>
  )
}

export default App
