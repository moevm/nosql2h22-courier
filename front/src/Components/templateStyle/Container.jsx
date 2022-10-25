import React from 'react'


export const containerStyleTEmplate = {
  profile: "container__profile",
  login: "container__log_in",
  logout: "container__log_out",
  order: "container__order",
  default: "container__default"

}


function Container(props) {
  let customStyle = props.style;
  let classN = props.className? props.className: containerStyleTEmplate.default;
  let style = {};
  if (customStyle) {
      style = customStyle;
  }

  return (
    <div className="container">
      <div className={classN} style={style}>
        {props.children}
      </div>
    </div>

  )
}

export default Container