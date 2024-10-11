import React, { MouseEventHandler } from 'react'
import style from "./button.module.css"
const Button = ({ 
    children,
    inverted,
} : {
    children: React.ReactNode,
    inverted: boolean,
}) => {
  return (
    <button className={inverted ? style.button + " " + style.inverted : style.button}>
        {children}
    </button>
  )
}

export default Button