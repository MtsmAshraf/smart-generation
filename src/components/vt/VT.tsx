import React from 'react'
import styles from "./vt.module.css"
import Image from 'next/image'
import vtChLogo from "../../../public/assets/imgs/vt-logo-ch.png"




const VT = ({
    l
} : {
    l: string
}) => {
    const classNames = [
        styles.vt,
        l === "en" ? styles.en : null
    ]
    return (
        <div className={classNames.join(" ")}>
            <div className="container">
                <div className={styles.text}>
                    <span>
                        We are proud to be
                    </span>
                    <h1>
                        The Exclusive Agent of V&T in Egypt
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