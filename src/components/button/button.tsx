import React, { MouseEventHandler } from 'react'
import styles from "./button.module.css"
import { Link } from '@/i18n/routing'
const Button = ({ 
    children,
    inverted,
    l,
    href
} : {
    children: React.ReactNode,
    inverted: boolean,
    l: string,
    href: string
}) => {
  let classNameList = [styles.button, inverted ? styles.inverted : "", l === "en" ? styles.en : ""].join(" ")
  return (
    <Link href={href || "/"} className={classNameList}>
        {children}
    </Link>
  )
}

export default Button