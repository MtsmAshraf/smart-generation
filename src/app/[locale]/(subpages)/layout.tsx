"use client"

import React, { useEffect, useState } from 'react'
import styles from "./sub-pages-layout.module.css"
import bg from "../../../assets/imgs/home-bg.jpg"
import { usePathname } from 'next/navigation';



export default function SubPagesLayout({
    children,
    params: {locale}
}: { 
    children: React.ReactNode;
    params: {locale: string}
  }) {
    const pathname = usePathname()
    console.log(pathname.split("/")[1])
    let [headingText, setHeadingText] = useState("")
    useEffect(() => {
      if(pathname === `/${locale}/services`){
        setHeadingText("خدماتنا")
      }else if(pathname === `/${locale}/projects`){
        setHeadingText("مشاريعنا")
      }else if(pathname.split("/")[2] === "products"){
        setHeadingText("المنتجات")
      }else if(pathname === `/${locale}/about`){
        setHeadingText("من نحن؟")
      }else if(pathname === `/${locale}/contact`){
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