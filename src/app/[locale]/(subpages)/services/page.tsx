import Contact from '@/components/contact/contact'
import ServicesCards from '@/components/servicesCards/servicesCards'
import React from 'react'

const Services = () => {
  return (
    <section>
        <div className="container">
            <ServicesCards></ServicesCards>
            <Contact></Contact>
        </div>
    </section>
  )
}

export default Services