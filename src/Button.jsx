import './Button.css'
import * as React from 'react' //damit react.createElement funktionieren kann!!

export default ({ children, isActive }) => {
  //-->{text} = destructuring assignement!!
  return (
    <button className={isActive ? 'Button active' : 'Button'}>
      {children}
    </button>
  )
}
