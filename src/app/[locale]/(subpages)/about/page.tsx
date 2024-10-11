import Contact from '@/components/contact/contact'
import StatsCard from '@/components/statsCard/statsCard'
import Testimonials from '@/components/testimonials/testimonials'
import Vision from '@/components/vision/vision'
import React from 'react'

const About = () => {
  return (
    <section>
        <StatsCard></StatsCard>
        <Vision></Vision>
        <div className="container">
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    </section>
  )
}

export default About