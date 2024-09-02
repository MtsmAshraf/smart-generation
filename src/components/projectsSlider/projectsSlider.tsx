"use client"
import React, { useEffect } from 'react'
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
    const slideLeft = (index: number) => {
        const cards: any = document.querySelectorAll("section > div:nth-child(2) > div:last-child > *")
        console.log(cards)
        cards.forEach((card: { style: { cssText: string } }) => {
            card.style.cssText = `
                transform: translateX(calc(${index * 100}% + 20px))
            `
            })
    }
    const slideRight = (index: number) => {
        const cards: any = document.querySelectorAll("section > div:nth-child(2) > div:last-child > *")
        console.log(cards)
        cards.forEach((card: { style: { cssText: string } }) => {
            card.style.cssText = `
                transform: translateX(calc(-${index * 100}% - 20px))
            `
            })
    }
    useEffect(() => {
        const toggleBtns: any = document.querySelectorAll("section ul li button")
        toggleBtns[0].setAttribute("active-button","true")
    })
    const toggleHandler = (e: any, index: number) => {
        const toggleBtns: any = document.querySelectorAll("section ul li button")
        toggleBtns.forEach((btn: any) => {
            btn.removeAttribute("active-button")
        })
        e.target.setAttribute("active-button","true")
        const cards: any = document.querySelectorAll("section > div:nth-child(2) > div:last-child > *")
        console.log(cards)
        cards.forEach((card: { style: { cssText: string } }) => {
            card.style.cssText = `
                transition-duration: ${0.3}s; 
                transform: translateX(calc(${index * 300}% + ${index * 60}px))
            `
        })
    }
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
                <ul className={styles.toggleCards}>
                    <li>
                        <button onClick={(e) => {toggleHandler(e, 0)}}></button>
                    </li>
                    <li>
                        <button onClick={(e) => {toggleHandler(e, 1)}}></button>
                    </li>
                    <li>
                        <button onClick={(e) => {toggleHandler(e, 2)}}></button>
                    </li>
                </ul>
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