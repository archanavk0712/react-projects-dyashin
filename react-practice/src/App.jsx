import { useState } from 'react'
import './App.css'
import Form from './components/form'
import Form2 from './components/Form2'
import UseEffect from './components/UseEffect'
import ReRendering from './components/ReRendering'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Form/> */}
    {/* <Form2/> */}
    {/* <UseEffect/> */}
    <ReRendering/>
    
    </>
  )
}

export default App
