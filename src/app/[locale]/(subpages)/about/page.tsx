import Contact from '@/components/contact/contact'
import StatsCard from '@/components/statsCard/statsCard'
import Testimonials from '@/components/testimonials/testimonials'
import Vision from '@/components/vision/vision'
import React from 'react'

const About = ({
  params: {locale}
} : {
  params: {locale: string}
}) => {
  return (
    <section>
        <StatsCard l={locale}></StatsCard>
        <Vision l={locale}></Vision>
        <div className="container">
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    </section>
  )
}

export default About