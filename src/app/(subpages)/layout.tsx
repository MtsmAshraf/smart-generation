"use client"

import React, { useEffect, useState } from 'react'
import styles from "./sub-pages-layout.module.css"
import bg from "../../assets/imgs/home-bg.jpg"
import { usePathname } from 'next/navigation';



export default function SubPagesLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const pathname = usePathname()
    let [headingText, setHeadingText] = useState("")
    useEffect(() => {
      if(pathname === "/services"){
        setHeadingText("خدماتنا")
      }else if(pathname === "/projects"){
        setHeadingText("مشاريعنا")
      }else if(pathname === "/supplies"){
        setHeadingText("التوريدات")
      }else if(pathname === "/about"){
        setHeadingText("من نحن؟")
      }else if(pathname === "/contact"){
        setHeadingText("اتصل بنا")
      }
    })
    return (
     <>
        <div className={styles.hero} style={{ backgroundImage: `url(${bg.src})` }}>
            <div className={styles.overlay}></div>
            <h1>
                {headingText}
            </h1>
        </div>
        <main className={styles.main}>
            {children}
        </main>
     </>
    );
  }