import React from 'react'

function CenterPage(props) {
  return (
    <div className='centering_on_page' style={props.style}>
        {props.children}
    </div>
  )
}

export default CenterPage