"use client";
import React from 'react'
import styles from "./layout.module.css"
import { Link } from '@/i18n/routing';
import { usePathname } from 'next/navigation';
import Contact from '@/components/contact/contact';
  
export default function SubProductsLayout({
    children,
    params: {locale}
}: { 
    children: React.ReactNode;
    params: {locale: string}
  }) {
    const pathname = usePathname()
  return (
    <div className={styles.subProductsLayout}>      
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
        <Contact l={locale}></Contact>
    </div>
  )
}
