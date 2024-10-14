import Contact from '@/components/contact/contact'
import ServicesCards from '@/components/servicesCards/servicesCards'
import React from 'react'

const Services = ({
  params: {locale}
} : {
  params: {locale: string}
}) => {
  return (
    <section>
        <div className="container">
          <ServicesCards l={locale}></ServicesCards>
          <Contact></Contact>
        </div>
    </section>
  )
}

export default Services