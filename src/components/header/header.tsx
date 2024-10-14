"use client"

import React, { useEffect, useState } from 'react'
import styles from "./header.module.css"
import logo from "../../assets/imgs/logo.png"
import smallLogo from "../../assets/imgs/logo-no-text.png"
import Image from 'next/image'
import Link from 'next/link'
import Button from '../button/button'
import { usePathname } from 'next/navigation'
import { faBars, faChevronDown, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import inverters, { Inverter } from "../../app/[locale]/(subpages)/products/(subproducts)/inverters/inverters"
import plcs, { Plc } from "../../app/[locale]/(subpages)/products/(subproducts)/plcs/plcs"
import hmis, { Hmi } from "../../app/[locale]/(subpages)/products/(subproducts)/hmis/hmi"
import servoDrives, { ServoDrive } from '@/app/[locale]/(subpages)/products/(subproducts)/servo-drives/servo-drives'
import LanguageSwitch from '../languageSwitch/languageSwitch'
import { useTranslations } from 'next-intl'
const Header = ({
    l
  }: {
    l: string,
  })  => {
    
    const pathname = usePathname()
    const [isClient, setIsClient] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        setIsClient(true)
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
  const t = useTranslations('Header');
    let classNameList = [styles.header, scrolled ? styles.scrolled : "", l === "en" ? styles.en : ""].join(" ")
  return (
    <header className={classNameList}>
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
                <Link className={pathname === `/${l}/` ? styles.active : ""} href={`/${l}/`}>
                    {t("Home")}
                </Link>
                <Link className={pathname === `/${l}/services` ? styles.active : ""} href={`/${l}/services`}>
                    {t("Services")}
                </Link>
                <Link className={pathname === `/${l}/projects` ? styles.active : ""} href={`/${l}/projects`}>
                    {t("Projects")}
                </Link>
                <Link className={pathname === `/${l}/products` ? styles.active : ""} href={`/${l}/products`}>
                    <span>
                    {t("Products")}
                    </span>
                    <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                    {
                        isClient ? 
                        <div className={styles.moreLinks}>
                        <ul>
                            <li>
                                <Link href={`/${l}/products/inverters`}>
                                    <span>
                                        Inverter
                                    </span>
                                    <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                                    <ul>
                                        {
                                            inverters.map((inverter: Inverter) => {
                                                return(
                                                    <li key={inverter.id}>
                                                        <Link href={`/${l}/products/inverters/${inverter.id}`} replace>
                                                            {inverter.description}
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${l}/products/plcs`}>
                                    <span>
                                        PLC
                                    </span>
                                    <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                                    <ul>
                                        {
                                            plcs.map((plc: Plc) => {
                                                return(
                                                    <li key={plc.id}>
                                                        <Link href={`/${l}/products/plcs/${plc.id}`}>
                                                            {plc.description}
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${l}/products/hmis`}>
                                    <span>
                                        HMI
                                    </span>
                                    <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                                    <ul>
                                        {
                                            hmis.map((hmi: Hmi) => {
                                                return(
                                                    <li key={hmi.id}>
                                                        <Link href={`/${l}/products/hmis/${hmi.id}`}>
                                                            {hmi.description}
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${l}/products/servo-drives`}>
                                    <span>
                                        Servo Drive
                                    </span>
                                    <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                                    <ul>
                                        {
                                            servoDrives.map((servoDrive: ServoDrive) => {
                                                return(
                                                    <li key={servoDrive.id}>
                                                        <Link href={`/${l}/products/servo-drives/${servoDrive.id}`}>
                                                            {servoDrive.description}
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </Link>
                            </li>
                            <li>
                                <Link href={""}>
                                    <span>
                                        Accessories
                                    </span>
                                    <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                                    <ul>
                                        <li>
                                            <Link href={"/"}>VTS30</Link>
                                        </li>
                                        <li>
                                            <Link href={"/"}>VTS30</Link>
                                        </li>
                                        <li>
                                            <Link href={"/"}>VTS30</Link>
                                        </li>
                                    </ul>
                                </Link>
                            </li>
                        </ul>
                    </div>
                        : null 
                    }
                </Link>
                <Link className={pathname === `/${l}/about` ? styles.active : ""} href={`/${l}/about`}>
                    {t("About Us")}
                </Link>
                <Link className={pathname === `/${l}/contact` ? styles.active : ""} href={`/${l}/contact`}>
                    {t("Contact")}
                </Link>
            </nav>
            {/* <Button inverted={false}>
                En
            </Button> */}
            <LanguageSwitch lo={l} />
        </div>
    </header>
  )
}

export default Header