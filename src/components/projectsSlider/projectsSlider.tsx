"use client"
import React, { useEffect, useState } from 'react'
import styles from "./projects-sliders.module.css"
import ProjectCard from './projectCard/projectCard'
import test from "../../../public/assets/imgs/1.jpg"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import MainHeading from '../mainHeading/mainHeading'
import projectsImages from './projectsImages'
import { Link } from '@/i18n/routing'
const ProjectsSlider = ({
    l
}: {
    l: string
}) => {
    let [activeIndex, setActiveIndex] = useState(0);
    let [final, setFinal] = useState(false)
    const slideLeft = () => {
        const toggleBtns: any = document.querySelectorAll("section ul li button")
        toggleBtns.forEach((btn: any) => {
            btn.removeAttribute("active-button")
        })
        toggleBtns[activeIndex + 1].click();
    }
    const slideRight = () => {
        const toggleBtns: any = document.querySelectorAll("section ul li button")
        toggleBtns[activeIndex - 1].click();
    }
    useEffect(() => {
        const toggleBtns: any = document.querySelectorAll("section ul li button")
        toggleBtns[0].setAttribute("active-button","true")
    },[])
    const toggleHandler = (e: any, index: number) => {
        const toggleBtns: any = document.querySelectorAll("section ul li button")
        const toggleLis: any = document.querySelectorAll("section ul li")
        let noOfBtns = 0;
        toggleLis.forEach((li: any) => {
            const compStyles = window.getComputedStyle(li);
            compStyles.getPropertyValue("background-color")
            if(compStyles.getPropertyValue("background-color") === "rgba(0, 0, 0, 0)"){
                noOfBtns++
            }
        })
        toggleBtns.forEach((btn: any) => {
            btn.removeAttribute("active-button")
        })
        e.target.setAttribute("active-button","true")
        if(parseInt(e.target.innerText) === noOfBtns){
            setFinal(true)
        }else{
            setFinal(false)
        }
        setActiveIndex(index);
        const cards: any = document.querySelectorAll("section > div:nth-child(2) > div:last-child > *")
        let parameter = noOfBtns === 9 ? 100 : noOfBtns === 5 ? 200 : noOfBtns === 3 ? 300 : 1 ;  
        let secParameter = noOfBtns === 9 ? 20 : noOfBtns === 5 ? 40 : noOfBtns === 3 ? 60 : 1 ;  
        cards.forEach((card: { style: { cssText: string } }) => {
            card.style.cssText = `
                transition-duration: ${0.3}s; 
                transform: translateX(calc(${index * (parameter)}% + ${index * secParameter}px))
            `
        })
    }
    return (
        <section className={styles.section}>
            <MainHeading>
                <h2>جميع أعمالنا</h2>
            </MainHeading>
            <div className={styles.projectsSlider}>
                <button style={{ display: activeIndex === 0 ? "none" : "flex" }} onClick={() => {slideRight()}} className={styles.arrow + " " + styles.right}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
                <button style={{ display: final ? "none" : "flex" }} onClick={() => {slideLeft()}} className={styles.arrow + " " + styles.left}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <ul className={styles.toggleCards}>
                    <li>
                        <button onClick={(e) => {toggleHandler(e, 0)}}>1</button>
                    </li>
                    <li>
                        <button onClick={(e) => {toggleHandler(e, 1)}}>2</button>
                    </li>
                    <li>
                        <button onClick={(e) => {toggleHandler(e, 2)}}>3</button>
                    </li>
                    <li>
                        <button onClick={(e) => {toggleHandler(e, 3)}}>4</button>
                    </li>
                    <li>
                        <button onClick={(e) => {toggleHandler(e, 4)}}>5</button>
                    </li>
                    <li>
                        <button onClick={(e) => {toggleHandler(e, 5)}}>6</button>
                    </li>
                    <li>
                        <button onClick={(e) => {toggleHandler(e, 6)}}>7</button>
                    </li>
                    <li>
                        <button onClick={(e) => {toggleHandler(e, 7)}}>8</button>
                    </li>
                    <li>
                        <button onClick={(e) => {toggleHandler(e, 8)}}>9</button>
                    </li>
                </ul>
                <div>
                    {projectsImages.map((img) => {
                        return(
                            <Link key={img.id} href={`/projects/${img.id}`}>
                                <ProjectCard>
                                    <div className={styles.cardImg}>
                                        <Image loading='lazy' src={img.src} alt='Project Card'></Image>
                                    </div>
                                    <div className={styles.cardText}>
                                        <h2>
                                            {img.name}
                                        </h2>
                                        <span>
                                            {img.place}
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