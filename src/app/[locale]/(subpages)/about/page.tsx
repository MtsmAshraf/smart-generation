import Contact from '@/components/contact/contact'
import Fields from '@/components/fields/fields'
import Loader from '@/components/loader/loader'
import StatsCard from '@/components/statsCard/statsCard'
// import Testimonials from '@/components/testimonials/testimonials'
import Vision from '@/components/vision/vision'
import Why from '@/components/why/why'
import { Metadata } from 'next'
import React from 'react'



export const metadata: Metadata = {
    title: "About Us",
    description: "About Smart Generation EG, company statistics, vistion & mission, fields of word ,location, contact information, work hours and social media links"
}

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
        </div>
        <Contact l={locale}></Contact>
    </section>
  )
}

export default About