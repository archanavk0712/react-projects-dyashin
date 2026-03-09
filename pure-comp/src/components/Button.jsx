import React, { memo } from 'react'

function Button({text, handleClick}) {
    console.log(`Button ${text} rendered`);
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

export default memo(Button)
