import React from 'react'
import styles from "./card.module.css"
const Card = ({
    children,
    inverted,
    l
}: {
    children: React.ReactNode,
    inverted: boolean,
    l: string
}) => {
  return (
    <div className={l === "en" && inverted ? styles.inverted + " " + styles.en + " " + styles.card : l === "ar" && inverted ? styles.inverted + " " + styles.card : l === "en" && !inverted ? styles.en + " " + styles.card : styles.card}>
        {children}
    </div>
  )
}

export default Card