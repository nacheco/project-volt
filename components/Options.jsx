import React from 'react'

//by Adding the children keyboard, any component passed as a children will be rendered.


const Options = ({ children }) => {
  return (
    <div>
    Options
      {children}
    </div>

  )
}

export default Options