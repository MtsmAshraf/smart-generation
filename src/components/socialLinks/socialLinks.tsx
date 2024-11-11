import React from 'react'
import styles from "./social-links.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
        <a href="https://www.facebook.com/smart.generation.eg" title='Facebook' target='_blank'>
            <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
        </a>
        <a href="https://wa.me/00201552778135" title='Whatsapp' target='_blank'>
            <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
        </a>
        <a href="https://www.linkedin.com/company/smart-generation-eg/" title='Linlkedin' target='_blank'>
            <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
        </a>
    </div>
  )
}

export default SocialLinks