import React from 'react'
import MainHeading from '../mainHeading/mainHeading'
import ContactsInfoCard from './contactsInfoCard/contactsInfoCard'
import styles from "./contacts-info.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons'
import { useTranslations } from 'next-intl'
const ContactsInfo = ({
    l
} : {
    l: string
}) => {

    const t = useTranslations("Contact.ContactInfo")

  return (
    <section className={l === "ar" ? styles.contactInfo + " " + styles.ar : styles.contactInfo}>
        <MainHeading>
            <h1 style={{ textAlign: "center" }}>
                {
                    t("Heading")
                }
            </h1>
        </MainHeading>
        <div className={styles.cards}>
            <ContactsInfoCard>
                <span>
                    <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                </span>
                <div> 
                    <a href="tel:00201552778135">00201552778135</a>
                    {/* <br /> */}
                    <a href="tel:00201145668638">00201145668638</a>
                </div>
            </ContactsInfoCard>
            <ContactsInfoCard>
                <span>
                    <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon>
                </span>
                <address>
                    {
                        t("Address1")
                    }
                    <br />
                    {
                        t("Address2")
                    }
                    <br />
                    {
                        t("Address3")
                    }
                    <br />
                    {
                        t("Address4")
                    }
                </address>
            </ContactsInfoCard>
            <ContactsInfoCard>
                <span>
                    <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                </span>
                <div>
                    9:00am - 5:00pm
                    <br />
                    {t("WorkingDays")}
                </div>
            </ContactsInfoCard>
        </div>
    </section>
  )
}

export default ContactsInfo