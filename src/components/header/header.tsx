import React from 'react'
import styles from "./header.module.css"
import logo from "../../assets/imgs/logo.png"
import Image from 'next/image'
import Link from 'next/link'
import Button from '../button/button'


const Header = () => {
  return (
    <header className={styles.header}>
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
                <Link href={"/"}>
                    الخدمات
                </Link>
                <Link href={"/"}>
                    المشاريع
                </Link>
                <Link href={"/"}>
                    التوريدات
                </Link>
                <Link href={"/"}>
                    عن الشركة
                </Link>
                <Link href={"/"}>
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