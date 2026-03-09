import React from 'react'

function MyComp(props) {
  return (
    <div>
        <h1>Hello, welcome to React JS</h1>
        {props.data.slice()}
    </div>
  )
}

export default MyComp
