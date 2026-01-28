"use client"
import React, { useEffect, useState } from 'react'
import styles from "./header.module.css"
import logo from "../../../public/assets/imgs/logo.png"
import smallLogo from "../../../public/assets/imgs/logo-no-text.png"
import Image from 'next/image'
// import Link from 'next/link'
// import Button from '../button/button'
import { usePathname } from 'next/navigation'
import { faBars, faChevronDown, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import inverters, { Inverter } from "../../app/[locale]/(subpages)/products/(subproducts)/inverters/inverters"
import plcs, { Plc } from "../../app/[locale]/(subpages)/products/(subproducts)/plcs/plcs"
import hmis, { Hmi } from "../../app/[locale]/(subpages)/products/(subproducts)/hmis/hmi"
import servoDrives, { ServoDrive } from '@/app/[locale]/(subpages)/products/(subproducts)/servo-drives/servo-drives'
import LanguageSwitch from '../languageSwitch/languageSwitch'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import VfdAccessories from '@/app/[locale]/(subpages)/products/(subproducts)/inverters/vfd-accessories/page'
import vfdAccessories, { VfdAccessoryType } from '@/app/[locale]/(subpages)/products/(subproducts)/inverters/vfd-accessories/vfdAccessories'
const Header = ({
    l
  }: {
    l: string,
  })  => {
    const [showMoreLinks] = useState(false)
    const pathname = usePathname()
    const [isClient, setIsClient] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        setIsClient(true)
        window.onscroll = () => {
            if(window.scrollY >= 50){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }
    },[scrolled])
    useEffect(() => {
        if(window.scrollY >= 50){
            setScrolled(true)
        }else{
            setScrolled(false)
        }
    },[scrolled])
    const [navShown, setNavShown] = useState(false)
    // const showNav = () => {
    //     const nav: any  = document.querySelector("header nav");
    //     if(!navShown){
    //         nav.style.cssText=`
    //             display: flex
    //         `
    //     }else{
    //         nav.style.cssText=`
    //             display: none
    //         `
    //     }
    // }
  const t = useTranslations('Header');
    let classNameList = [styles.header, scrolled ? styles.scrolled : "", l === "en" ? styles.en : ""].join(" ")
  return (
    <header id={l === "en" ? "en" : "ar"} className={classNameList}>
        <div className= "container">
            <button onClick={() => {setNavShown(!navShown);}} className={styles.toggleNav}>
                <FontAwesomeIcon style={{ display: navShown ? "none" : "inline"  }} icon={faBars}></FontAwesomeIcon>
                <FontAwesomeIcon style={{ display: navShown ? "inline" : "none"  }} icon={faXmark}></FontAwesomeIcon>
            </button>
            <div className={styles.logo}>
                <Link href="/">
                    <Image src={logo} alt='Logo'></Image>
                    <Image src={smallLogo} alt='No Text Logo'></Image>
                </Link>
            </div>
            <nav className={navShown ? styles.shown : styles.hidden}>
                <Link onClick={() => {setNavShown(false)}} className={pathname === `/${l}` ? styles.active : ""} href={`/`}>
                    {t("Home")}
                </Link>
                <Link onClick={() => {setNavShown(false)}} className={pathname === `/${l}/services` ? styles.active : ""} href={`/services`}>
                    {t("Services")}
                </Link>
                {/* <Link onClick={() => {setNavShown(false)}} className={pathname === `/${l}/projects` ? styles.active : ""} href={`/projects`}>
                    {t("Projects")}
                </Link> */}
                <div>
                <Link className={pathname.split("/")[2] === "products" ? styles.active : ""} href={``}>
                    <span>
                    {t("Products")}
                    </span>
                    <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                </Link>
                {
                    isClient ? 
                    <div className={showMoreLinks ? styles.moreLinks + " " + styles.shown : styles.moreLinks}>
                        <ul>
                            <li>
                                <Link onClick={() => {setNavShown(false)}} href={`/products`}>
                                    All products
                                </Link>
                            </li>
                            <li>
                                <div>
                                    <span>
                                        Inverters
                                    </span>
                                    <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                                    <ul>
                                        <li>
                                            <Link onClick={() => {setNavShown(false)}} href={`/products/inverters`}>
                                                All Inverters
                                            </Link>
                                        </li>
                                        {
                                            inverters.map((inverter: Inverter) => {
                                                return(
                                                    <li key={inverter.id}>
                                                        <Link onClick={() => {setNavShown(false)}} href={`/products/inverters/${inverter.id}`} replace>
                                                            {inverter.description}
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                        <li>
                                            <Link onClick={() => {setNavShown(false)}} href={`/products/inverters/special-purpose`} replace>
                                                <b>Special Purposed AC Drive</b>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>
                                        VFD Accessories
                                    </span>
                                    <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                                    <ul>
                                        <li>
                                            <Link href={`/products/inverters/vfd-accessories`}>
                                                VFD Accessories
                                            </Link>
                                        </li>
                                        {
                                            vfdAccessories.map((vfdAccessory: VfdAccessoryType) => {
                                                return(
                                                    <li key={vfdAccessory.id}>
                                                        <Link href={`/products/inverters/vfd-accessories/${vfdAccessory.id}`}>
                                                            {vfdAccessory.name}
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>
                                        PLC
                                    </span>
                                    <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                                    <ul>
                                        <li>
                                            <Link href={`/products/plcs`}>
                                                All PLCs
                                            </Link>
                                        </li>
                                        {
                                            plcs.map((plc: Plc) => {
                                                return(
                                                    <li key={plc.id}>
                                                        <Link href={`/products/plcs/${plc.id}`}>
                                                            {plc.description}
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>
                                        HMI
                                    </span>
                                    <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                                    <ul>
                                        <li>
                                            <Link href={`/products/hmis`}>
                                                All HMIs
                                            </Link>
                                        </li>
                                        {
                                            hmis.map((hmi: Hmi) => {
                                                return(
                                                    <li key={hmi.id}>
                                                        <Link href={`/products/hmis/${hmi.id}`}>
                                                            {hmi.description}
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>
                                        Servo Drives
                                    </span>
                                    <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                                    <ul>
                                        <li>
                                            <Link href={`/products/servo-drives`}>
                                                All Servo Drives
                                            </Link>
                                        </li>
                                        {
                                            servoDrives.map((servoDrive: ServoDrive) => {
                                                return(
                                                    <li key={servoDrive.id}>
                                                        <Link href={`/products/servo-drives/${servoDrive.id}`}>
                                                            {servoDrive.description}
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </li>
                            {/* <li>
                                <div>
                                    <span>
                                        Accessories
                                    </span>
                                    <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                                    <ul>
                                        <li>
                                            <Link href={""}>
                                                All
                                            </Link>
                                        </li>
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
                                </div>
                            </li> */}
                        </ul>
                    </div>
                    : null 
                }
                </div>
                <Link onClick={() => {setNavShown(false)}} className={pathname === `/${l}/downloads` ? styles.active : ""} href={`/downloads`}>
                    {t("Downloads")}
                </Link>
                <Link onClick={() => {setNavShown(false)}} className={pathname === `/${l}/about` ? styles.active : ""} href={`/about`}>
                    {t("About Us")}
                </Link>
                <Link onClick={() => {setNavShown(false)}} className={pathname === `/${l}/contact` ? styles.active : ""} href={`/contact`}>
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