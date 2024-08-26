import React from 'react'
import styles from "./testimonials-card.module.css"


const TestimonialsCard = ({
    children
} : {
    children: React.ReactNode
}) => {
  return (
    <div className={styles.testimonialsCard}>
        {children}
    </div>
  )
}

export default TestimonialsCard