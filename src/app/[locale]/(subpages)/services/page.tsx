import Contact from '@/components/contact/contact'
import Loader from '@/components/loader/loader'
import ServicesDetailsCards from '@/components/servicesDetailsCards/servicesDetailsCards'
import React from 'react'
import styles from "./services.module.css"
const Services = ({
  params: {locale}
} : {
  params: {locale: string}
}) => {
  return (
    <section className={locale === "en" ? styles.services + " " + styles.en : styles.services}>
        <Loader></Loader>
        <div className="container">
          <ServicesDetailsCards l={locale}></ServicesDetailsCards>
          {/* <ServicesCards l={locale}></ServicesCards> */}
        </div>
          <Contact l={locale}></Contact>
    </section>
  )
}

export default Services