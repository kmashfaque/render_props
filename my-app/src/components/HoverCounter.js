import React from 'react'

const HoverCounter = (props) => {
    const {increamentCount,counter}=props
  return (
    <div>
        <h2 onMouseOver={increamentCount}>Hovered {counter} times...</h2>
    </div>
  )
}

export default HoverCounter