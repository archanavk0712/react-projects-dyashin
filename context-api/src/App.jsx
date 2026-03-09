import { useState } from 'react'
import './App.css'
import CompA from './components/CompA'
import { Provider } from './context/context-api'

function App() {
const [data, setdata] = useState("Gucci bag")
  return (
    <>
      <Provider value={data}>
        <CompA/>
      </Provider>
    </>
  )
}

export default App
