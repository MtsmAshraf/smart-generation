import React from 'react'
import styles from "./social-links.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
        <a href="/">
            <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
        </a>
        <a href="/">
            <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
        </a>
        <a href="/">
            <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
        </a>
    </div>
  )
}

export default SocialLinks