import React from 'react'
import MainHeading from '../mainHeading/mainHeading'
import ContactsInfoCard from './contactsInfoCard/contactsInfoCard'
import styles from "./contacts-info.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faLocation, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons'
const ContactsInfo = () => {
  return (
    <section>
        <MainHeading>
            <h1 style={{ textAlign: "center" }}>
                معلومات التواصل
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
                    الأردنية, جراند مول
                    <br />
                    العاشر من رمضان
                    <br />
                    الشرقية
                    <br />
                    مصر
                </address>
            </ContactsInfoCard>
            <ContactsInfoCard>
                <span>
                    <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                </span>
                <div>
                    9:00am - 5:00pm
                    <br />
                    جميع أيام الأسبوع عدا الجمعة
                </div>
            </ContactsInfoCard>
        </div>
    </section>
  )
}

export default ContactsInfo