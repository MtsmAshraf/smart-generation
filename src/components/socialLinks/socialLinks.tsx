import React from 'react'
import styles from "./social-links.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
        <a href="/">
                <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
            </a>
            <a href="/">
                <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </a>
            <a href="/">
                <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
            </a>
            <a href="/">
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </a>
    </div>
  )
}

export default SocialLinks