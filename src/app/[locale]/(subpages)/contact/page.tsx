import React from 'react'
import Contact from '@/components/contact/contact'
import ContactsInfo from '@/components/contactsInfo/contactsInfo'
import SocialLinks from '@/components/socialLinks/socialLinks'
import styles from "./contact.module.css"

const ContactUs = () => {
  return (
    <section>
        <div className="container">
            <ContactsInfo></ContactsInfo>
        </div>
        <Contact></Contact>
        <div className={styles.socialLinks}>
            <SocialLinks></SocialLinks>
        </div>
    </section>
  )
}

export default ContactUs