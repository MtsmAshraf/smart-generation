"use client"

import React, { useEffect, useState } from 'react'
import styles from "./sub-pages-layout.module.css"
import bg from "../../../../public/assets/imgs/home-bg.jpg"
import { usePathname } from 'next/navigation';
import { Link } from '@/i18n/routing';


export default function SubPagesLayout({
    children,
    params: {locale}
}: { 
    children: React.ReactNode;
    params: {locale: string}
  }) {
    const pathname = usePathname()
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
              <ul className={styles.subLayoutNav}>
                  <li>
                      <Link className={pathname === `/${locale}/products` ? styles.active : ""} href={`/products`}>
                          All products
                      </Link>
                  </li>
                  <li>
                      <Link className={pathname.includes("/products/inverters") ? styles.active : ""} href={`/products/inverters`}>
                          Inverters
                      </Link>
                  </li>
                  <li>
                      <Link className={pathname.includes("/products/plcs") ? styles.active : ""} href={`/products/plcs`}>
                          PLC
                      </Link>
                  </li>
                  <li>
                      <Link className={pathname.includes("/products/hmis") ? styles.active : ""} href={`/products/hmis`}>
                          HMI
                      </Link>
                  </li>
                  <li>
                      <Link className={pathname.includes("/products/servo-drives") ? styles.active : ""} href={`/products/servo-drives`}>
                          Servo Drives
                      </Link>
                  </li>
                  
              </ul>
              {children}
          </main>
      </>
    );
  }