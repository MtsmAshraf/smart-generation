import React from 'react'
import styles from "./projects-sliders.module.css"
import ProjectCard from './projectCard/projectCard'
import test from "../../assets/imgs/1.jpg"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
const ProjectsSlider = () => {
    const projectsIds = ["1","2","3","4","5","6","7","8","9"]
    return (
    <div className={styles.projectsSlider}>
        <div className={styles.arrow + " " + styles.right}>
            <FontAwesomeIcon icon={faChevronRight} />
            </div>
        <div className={styles.arrow + " " + styles.left}>
            <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div>
            {projectsIds.map((id) => {
                return(
                    <ProjectCard>
                        <div className={styles.cardImg}>
                            <Image src={test} alt='Project Card'></Image>
                        </div>
                        <h2>
                            مشروع {id}
                        </h2>
                        <span>
                            مصر
                        </span>
                    </ProjectCard>
                )
            })}
        </div>
    </div>
  )
}

export default ProjectsSlider