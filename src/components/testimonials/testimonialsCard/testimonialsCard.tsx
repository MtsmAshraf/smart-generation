import React from 'react'
import styles from "./testimonials-card.module.css"


const TestimonialsCard = ({
    children,
    l
} : {
    children: React.ReactNode,
    l: string
}) => {
  return (
    <div className={l === "en" ? styles.testimonialsCard + " " + styles.en : styles.testimonialsCard}>
        {children}
    </div>
  )
}

export default TestimonialsCard