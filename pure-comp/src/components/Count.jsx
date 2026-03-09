import React, { memo } from 'react'

function Count({text,value}) {
    console.log(`Count ${text} rendered`);
    
  return (
    <div>
      {text} : {value}
    </div>
  )
}

export default memo(Count)
