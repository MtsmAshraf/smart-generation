import Contact from '@/components/contact/contact'
import Fields from '@/components/fields/fields'
import Loader from '@/components/loader/loader'
import StatsCard from '@/components/statsCard/statsCard'
// import Testimonials from '@/components/testimonials/testimonials'
import Vision from '@/components/vision/vision'
import Why from '@/components/why/why'
import React from 'react'

const About = ({
  params: {locale}
} : {
  params: {locale: string}
}) => {
  return (
    <section>
        <Loader></Loader>
        <StatsCard l={locale}></StatsCard>
        <Vision l={locale}></Vision>
        <Fields lo={locale}></Fields>
        <Why lo={locale}></Why>
        <div className="container">
            {/* <Testimonials l={locale}></Testimonials> */}
            <Contact l={locale}></Contact>
        </div>
    </section>
  )
}

export default About