import React from 'react'
import styles from "./footer.module.css"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { faClock, faLocation, faLocationArrow, faLocationPin, faLocationPinLock, faPhone, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useTranslations } from 'next-intl'

const Footer = ({
  l
}: {
  l: string,
}) => {
  const t = useTranslations("Footer")
  return (
    <footer className={l === "en" ? styles.footer + " " + styles.en : styles.footer}>
      <div className="container">
        <div>
          <h4>{t("Sections.Heading")}</h4>
          <div>
            <Link href={`/${l}/services`}>{t("Sections.PagesLinks.1")}</Link>
            <Link href={`/${l}/projects`}>{t("Sections.PagesLinks.2")}</Link>
            <Link href={`/${l}/products`}>{t("Sections.PagesLinks.3")}</Link>
            <Link href={`/${l}/about`}>{t("Sections.PagesLinks.4")}</Link>
            <Link href={`/${l}/contact`}>{t("Sections.PagesLinks.5")}</Link>
          </div>
        </div>
        <div>
          <h4>{t("OurPlaces.Heading")}</h4>
          <div>
            <div>
              <span>
                <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon>
              </span>
              <address>
                {t("OurPlaces.Address.Place")}
                <br />
                {t("OurPlaces.Address.City")}
                <br />
                {t("OurPlaces.Address.Country")}
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
                {t("WorkHours")}
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4>
            {t("SocialMediaHeading")}
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