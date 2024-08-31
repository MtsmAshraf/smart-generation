import React from 'react'
import styles from "./projects-sliders.module.css"
import ProjectCard from './projectCard/projectCard'
import test from "../../assets/imgs/1.jpg"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import MainHeading from '../mainHeading/mainHeading'
import Link from 'next/link'
const ProjectsSlider = () => {
    const projectsIds = ["1","2","3","4","5","6","7","8","9"]
    return (
        <section className={styles.section}>
            <MainHeading>
                <h2>جميع أعمالنا</h2>
            </MainHeading>
            <div className={styles.projectsSlider}>
                <button className={styles.arrow + " " + styles.right}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
                <button className={styles.arrow + " " + styles.left}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <div>
                    {projectsIds.map((id) => {
                        return(
                            <Link key={id} href={`projects/${id}`}>
                                <ProjectCard>
                                    <div className={styles.cardImg}>
                                        <Image src={test} alt='Project Card'></Image>
                                    </div>
                                    <div className={styles.cardText}>
                                        <h2>
                                            مشروع {id}
                                        </h2>
                                        <span>
                                            مصر
                                        </span>
                                    </div>
                                </ProjectCard>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    
  )
}

export default ProjectsSlider