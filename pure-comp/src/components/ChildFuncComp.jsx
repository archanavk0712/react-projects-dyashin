import React, { memo } from 'react'

function ChildFuncComp({data}) {
  console.log("Child function",data);
    return (
    <div>
      <h1>Name is {data}</h1>
    </div>
  )
}

export default memo(ChildFuncComp)

