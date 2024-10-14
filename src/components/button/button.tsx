import React, { MouseEventHandler } from 'react'
import styles from "./button.module.css"
const Button = ({ 
    children,
    inverted,
    l
} : {
    children: React.ReactNode,
    inverted: boolean,
    l: string
}) => {
  let classNameList = [styles.button, inverted ? styles.inverted : "", l === "en" ? styles.en : ""].join(" ")
  return (
    <button className={classNameList}>
        {children}
    </button>
  )
}

export default Button