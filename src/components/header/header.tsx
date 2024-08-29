"use client"

import React, { useEffect, useState } from 'react'
import styles from "./header.module.css"
import logo from "../../assets/imgs/logo.png"
import Image from 'next/image'
import Link from 'next/link'
import Button from '../button/button'


const Header = () => {
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
                <Link href={"/"}>
                    الرئيسية
                </Link>
                <Link href={"/services"}>
                    الخدمات
                </Link>
                <Link href={"/projects"}>
                    المشاريع
                </Link>
                <Link href={"/supplies"}>
                    التوريدات
                </Link>
                <Link href={"/about"}>
                    عن الشركة
                </Link>
                <Link href={"/contact"}>
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