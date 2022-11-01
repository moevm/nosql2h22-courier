import React from 'react'


function Container(props) {
  const {
    className = Container.style.default,
    style = {},
    children
  } = props;



  return (
    <div className="container">
      <div className={className} style={style}>
        {children}
      </div>
    </div>

  )
}

Container.style = {
  profile: "container__profile",
  login: "container__log_in",
  logout: "container__log_out",
  order: "container__order",
  default: "container__default"
}

export default Container