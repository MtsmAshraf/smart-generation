import Image from 'next/image'
import React from 'react'
import png1 from "../../../assets/imgs/1.jpg" 
import styles from "./project-card.module.css"

const ProjectCard = ({ 
    children,
 } : {
    children: React.ReactNode
 }) => {
  return (
    <div className={styles.projectCard}>
        {children}
    </div>
  )
}

export default ProjectCard