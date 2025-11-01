import Contact from '@/components/contact/contact'
import Loader from '@/components/loader/loader'
import ProjectsSlider from '@/components/projectsSlider/projectsSlider'
import React from 'react'

const Projects = ({
  params: {locale}
}: {
  params: {locale: string}
}) => {

  return (
    <div>
      <Loader></Loader>
        <ProjectsSlider lo={locale}></ProjectsSlider>
        <Contact l={locale}></Contact>
    </div>
  )
}

export default Projects