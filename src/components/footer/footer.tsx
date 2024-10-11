import React from 'react'
import styles from "./footer.module.css"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { faClock, faLocation, faLocationArrow, faLocationPin, faLocationPinLock, faPhone, faTimes } from '@fortawesome/free-solid-svg-icons'

const Footer = ({
  l
}: {
  l: string,
}) => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div>
          <h4>الأقسام</h4>
          <div>
            <Link href={`/${l}/services`}>الخدمات</Link>
            <Link href={`/${l}/projects`}>المشاريع</Link>
            <Link href={`/${l}/supplies`}>التوريدات</Link>
            <Link href={`/${l}/about`}>عن الشركة</Link>
            <Link href={`/${l}/contact`}>اتصل بنا</Link>
          </div>
        </div>
        <div>
          <h4>أماكننا</h4>
          <div>
            <div>
              <span>
                <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon>
              </span>
              <address>
                الأردنية, جراند مول
                <br />
                العاشر من رمضان
                <br />
                مصر
              </address>
            </div>
            <div>
              <span>
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
              </span>
              <div>
                <div>
                  <a href="tel:00201552778135">00201552778135</a>
                  <br />
                  <a href="tel:00201145668638">00201145668638</a>
                </div>
              </div>
            </div>
            <div>
              <span>
                <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
              </span>
              <div>
                8:00am - 4:00pm
                <br />
                جميع أيام الأسبوع عدا الجمعة
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4>
            صفحاتنا
          </h4>
          <div className={styles.socials}>
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
        </div>
      </div>
      <div className={styles.copyright}>
        by &copy; <a href="https://moatasim-ashraf.netlify.app/" target='_blank'>Moatasim</a> 2024
      </div>
    </footer>
  )
}

export default Footer