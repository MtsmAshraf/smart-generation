import React from 'react'
import Contact from '@/components/contact/contact'
import ContactsInfo from '@/components/contactsInfo/contactsInfo'
import SocialLinks from '@/components/socialLinks/socialLinks'
import styles from "./contact.module.css"
import Loader from '@/components/loader/loader'

const ContactUs = ({
  params: {locale}
}: {
  params: {locale: string}
}) => {
  
  return (
    <section>
        <Loader></Loader>
          <div className="container">
            <ContactsInfo></ContactsInfo>
        </div>
        <Contact l={locale}></Contact>
        <div className={styles.socialLinks}>
            <SocialLinks></SocialLinks>
        </div>
    </section>
  )
}

export default ContactUs