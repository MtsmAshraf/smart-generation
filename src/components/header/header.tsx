"use client"

import React, { useEffect, useState } from 'react'
import styles from "./header.module.css"
import logo from "../../assets/imgs/logo.png"
import smallLogo from "../../assets/imgs/logo-no-text.png"
import Image from 'next/image'
import Link from 'next/link'
import Button from '../button/button'
import { usePathname } from 'next/navigation'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = () => {
    const pathname = usePathname()
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
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
                    التوريدات
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