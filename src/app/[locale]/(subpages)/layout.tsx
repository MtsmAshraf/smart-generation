"use client"

import React, { useEffect, useState } from 'react'
import styles from "./sub-pages-layout.module.css"
import bg from "../../../../public/assets/imgs/home-bg.jpg"
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
        let text = locale !== "en" ? "خدماتنا" : "Services"; 
        setHeadingText(text)
      }else if(pathname === `/${locale}/projects`){
        let text = locale !== "en" ? "مشاريعنا" : "Projects"; 
        setHeadingText(text)
      }else if(pathname.split("/")[2] === "products"){
        let text = locale !== "en" ? "المنتجات" : "Products"; 
        setHeadingText(text)
      }else if(pathname === `/${locale}/about`){
        let text = locale !== "en" ? "عن الشركة" : "About Us"; 
        setHeadingText(text)
      }else if(pathname === `/${locale}/contact`){
        let text = locale !== "en" ? "اتصل بنا" : "Contact Us"; 
        setHeadingText(text)
      }
    },[headingText, pathname, locale])
    return (
     <>
        <div className={locale === "en" ? styles.hero + " " + styles.en : styles.hero} style={{ backgroundImage: `url(${bg.src})` }}>
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