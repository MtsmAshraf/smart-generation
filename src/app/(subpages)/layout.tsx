import React from 'react'
import styles from "./sub-pages-layout.module.css"
import bg from "../../assets/imgs/home-bg.jpg"



export default function SubPagesLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
     <>
        <div className={styles.hero} style={{ backgroundImage: `url(${bg.src})` }}>
            <div className={styles.overlay}></div>
            <h1>
                خدماتنا
            </h1>
        </div>
        <main className={styles.main}>
            {children}
        </main>
     </>
    );
  }