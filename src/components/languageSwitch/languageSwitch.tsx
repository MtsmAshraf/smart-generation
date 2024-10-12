import React, { ChangeEvent } from 'react'
import styles from "./languageSwitch.module.css"
import { usePathname, useRouter } from 'next/navigation'
const LanguageSwitch = ({
    lo
}: {
    lo: string
}) => {
    const pathname = usePathname()
    const router = useRouter()
    const changeLanguage = (e) => {
        let nextLocale = lo === "en" ? "ar" : "en";
        const splitPathname = pathname.split("/")
        splitPathname[1] = nextLocale;
        const jointPathname = splitPathname.join("/")
        router.replace(`${jointPathname}`)
    }
  return (
    <button onClick={changeLanguage} className={styles.languageSwitch}>
        {
            lo === "en" ? "ع" : "En"
        }
    </button>
  )
}

export default LanguageSwitch