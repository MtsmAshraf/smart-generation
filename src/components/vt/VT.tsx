import React from 'react'
import styles from "./vt.module.css"
import Image from 'next/image'
import vtChLogo from "../../../public/assets/imgs/vt-logo-ch.png"
import { useTranslations } from 'next-intl'




const VT = ({
    l
} : {
    l: string
}) => {
    const t = useTranslations("HomePage.VT")
    const classNames = [
        styles.vt,
        l === "ar" ? styles.ar : null
    ]
    return (
        <div className={classNames.join(" ")}>
            <div className="container">
                <div className={styles.text}>
                    <span>
                        {
                            t("span")
                        }
                    </span>
                    <h1>
                        {
                            t("h1")
                        }
                    </h1>
                </div>
                <div className={styles.img}>
                    <Image src={vtChLogo} alt='V&T logo'></Image>
                </div>
            </div>
        </div>
    )
}

export default VT