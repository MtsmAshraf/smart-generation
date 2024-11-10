import Contact from '@/components/contact/contact'
import Loader from '@/components/loader/loader'
import ServicesDetailsCards from '@/components/servicesDetailsCards/servicesDetailsCards'
import React from 'react'

const Services = ({
  params: {locale}
} : {
  params: {locale: string}
}) => {
  return (
    <section>
        <Loader></Loader>
        <div className="container">
          <ServicesDetailsCards></ServicesDetailsCards>
          {/* <ServicesCards l={locale}></ServicesCards> */}
          <Contact l={locale}></Contact>
        </div>
    </section>
  )
}

export default Services