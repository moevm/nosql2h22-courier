import React from 'react'

function CenterPage(props) {
  const { style, children } = props;

  return (
    <div className='centering_on_page' style={style}>
      {children}
    </div>
  )
}

export default CenterPage