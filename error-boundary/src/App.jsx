import { useState } from 'react'
import './App.css'
import ErrorBoundary from './error/ErrorBoundary'
import MyComp from './components/MyComp'

function App() {
  const [isShow, setisShow] = useState(false)

  return (
    <>
     <button onClick={()=>setisShow(true)}>Load the Comp</button>
     {isShow &&(
      <ErrorBoundary>
        <MyComp/>
      </ErrorBoundary>
     )}
    </>
  )
}

export default App
