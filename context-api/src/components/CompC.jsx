import React from 'react'
import { Consumer } from '../context/context-api'

function CompC() {
  return (
    <div>
      <h1>Comp C</h1>
      <Consumer>
        {(data)=>{
            return <h2>Data from parent(using context-api):{data}</h2>
        }}
      </Consumer>
    </div>
  )
}

export default CompC
