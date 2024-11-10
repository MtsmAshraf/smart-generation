import React from 'react'
import styles from "./card.module.css"
const Card = ({
    children,
    inverted
    // lo
}: {
    children: React.ReactNode,
    inverted: boolean
    // lo: string
}) => {
  return (
    <div className={inverted ? styles.card + " " + styles.inverted : styles.card}>
        {children}
    </div>
  )
}

export default Card