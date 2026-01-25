import React from 'react'
import Contact from '@/components/contact/contact'
import Loader from '@/components/loader/loader'
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: "Contact Us",
    description: "Smart Generation EG location, contact information, work hours and social media links"
}

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