import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from "./styles/not-found.module.css"
import { faFaceFrown } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'
const NotFound = () => {
  return (
    <section className={styles.NotFound}>
        <div className={styles.icon}>
            {/* <FontAwesomeIcon icon={faBan}></FontAwesomeIcon> */}
            <FontAwesomeIcon icon={faFaceFrown} />
        </div>
        <h1>
            Not Found
        </h1>
        <Link href={"/"} replace>
            الرئيسية
        </Link>
    </section>
  )
}

export default NotFound