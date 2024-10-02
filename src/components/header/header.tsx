"use client"

import React, { useEffect, useState } from 'react'
import styles from "./header.module.css"
import logo from "../../assets/imgs/logo.png"
import smallLogo from "../../assets/imgs/logo-no-text.png"
import Image from 'next/image'
import Link from 'next/link'
import Button from '../button/button'
import { usePathname } from 'next/navigation'
import { faBars, faChevronDown, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = () => {
    const pathname = usePathname()
    const [isClient, setIsClient] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        setIsClient(true)
        window.onscroll = () => {
            if(window.scrollY >= 200){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }
    },[scrolled])
    useEffect(() => {
        if(window.scrollY >= 200){
            setScrolled(true)
        }else{
            setScrolled(false)
        }
    },[scrolled])
    const [navShown, setNavShown] = useState(false)
    const showNav = () => {
        const nav: any  = document.querySelector("header nav");
        if(!navShown){
            nav.style.cssText=`
                display: flex
            `
        }else{
            nav.style.cssText=`
                display: none
            `
        }
    }
  return (
    <header className={scrolled ? styles.header + " " + styles.scrolled : styles.header}>
        <div className= "container">
            <button onClick={() => { showNav(); setNavShown(!navShown);}} className={styles.toggleNav}>
                <FontAwesomeIcon style={{ display: navShown ? "none" : "inline"  }} icon={faBars}></FontAwesomeIcon>
                <FontAwesomeIcon style={{ display: navShown ? "inline" : "none"  }} icon={faXmark}></FontAwesomeIcon>
            </button>
            <div className={styles.logo}>
                <Link href="/">
                    <Image src={logo} alt='Logo'></Image>
                    <Image src={smallLogo} alt='No Text Logo'></Image>
                </Link>
            </div>
            <nav>
                <Link className={pathname === "/" ? styles.active : ""} href={"/"}>
                    الرئيسية
                </Link>
                <Link className={pathname === "/services" ? styles.active : ""} href={"/services"}>
                    الخدمات
                </Link>
                <Link className={pathname === "/projects" ? styles.active : ""} href={"/projects"}>
                    المشاريع
                </Link>
                <Link className={pathname === "/supplies" ? styles.active : ""} href={"/supplies"}>
                    <span>
                        المنتجات
                    </span>
                    <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                    {
                        isClient ? 
                        <div className={styles.moreLinks}>
                        <ul>
                            <li>
                                <Link href={"/"}>
                                    <span>
                                        Inverter
                                    </span>
                                    <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                                    <ul>
                                        <li>
                                            <Link href={"/"}>
                                                VTS Series Universal Variable Speed AC Drive
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/"}>
                                                VTS30 Series frequency converter
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/"}>
                                                V9 Series High Performance Universal Speed AC Drive
                                            </Link>
                                        </li>
                                    </ul>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    <span>
                                        PLC
                                    </span>
                                    <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                                    <ul>
                                        <li>
                                            <Link href={"/"}>
                                                VC10V Simple and sporty small PLC
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/"}>
                                                VC20 Series high-performance general-purpose PLC
                                            </Link>
                                        </li>
                                    </ul>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    <span>
                                        HMI
                                    </span>
                                    <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                                    <ul>
                                        <li>
                                            <Link href={"/"}>
                                                VT DP-2000 series HMI
                                            </Link>
                                        </li>
                                    </ul>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    <span>
                                        Servo Drive
                                    </span>
                                    <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                                    <ul>
                                        <li>
                                            <Link href={"/"}>
                                                VS510 Series servo drive
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/"}>
                                                VS512 series servo driver
                                            </Link>
                                        </li>
                                    </ul>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"}>
                                    <span>
                                        Accessories
                                    </span>
                                    <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                                    <ul>
                                        <li>
                                            <Link href={"/"}>VTS30</Link>
                                        </li>
                                        <li>
                                            <Link href={"/"}>VTS30</Link>
                                        </li>
                                        <li>
                                            <Link href={"/"}>VTS30</Link>
                                        </li>
                                    </ul>
                                </Link>
                            </li>
                        </ul>
                    </div>
                        : null 
                    }
                </Link>
                <Link className={pathname === "/about" ? styles.active : ""} href={"/about"}>
                    عن الشركة
                </Link>
                <Link className={pathname === "/contact" ? styles.active : ""} href={"/contact"}>
                    اتصل بنا
                </Link>
            </nav>
            <Button inverted={false}>
                En
            </Button>
        </div>
    </header>
  )
}

export default Header