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
    <>
        <Contact l={locale}></Contact>
        <Loader></Loader>
    </>
  )
}

export default ContactUs