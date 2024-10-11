import ProjectsSlider from '@/components/projectsSlider/projectsSlider'
import React from 'react'

const Projects = ({
  params: {locale}
}: {
  params: {locale: string}
}) => {
  return (
    <div>
      <div className="container">
        <ProjectsSlider l={locale}></ProjectsSlider>
      </div>
    </div>
  )
}

export default Projects