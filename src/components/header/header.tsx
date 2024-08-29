"use client"

import React, { useEffect, useState } from 'react'
import styles from "./header.module.css"
import logo from "../../assets/imgs/logo.png"
import Image from 'next/image'
import Link from 'next/link'
import Button from '../button/button'
import { usePathname } from 'next/navigation'


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
  return (
    <header className={scrolled ? styles.header + " " + styles.scrolled : styles.header}>
        <div className= "container">
            <div>
                <Link href="/">
                    <Image src={logo} alt='Logo'></Image>
                </Link>
            </div>
            <button className={styles.toggleNav}>
                X
            </button>
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
                English
            </Button>
        </div>
    </header>
  )
}

export default Header