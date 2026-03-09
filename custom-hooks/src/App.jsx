import { useState } from 'react'
import './App.css'
import CounterTwo from './components/CounterTwo'
import CounterOne from './components/CounterOne'
import CounterThree from './components/CounterThree'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CounterOne/>
     <CounterTwo/>
     <CounterThree/>
    </>
  )
}

export default App
