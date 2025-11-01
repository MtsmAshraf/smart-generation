"use client"
import React from 'react'
import styles from "./projects-sliders.module.css"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper ,SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Image from 'next/image';
import MainHeading from '../mainHeading/mainHeading';
import projectsImages, { ProjectsImage } from './projectsImages';
import { Link } from '@/i18n/routing';

const ProjectsSlider = ({
    lo
} : {
    lo: string
}) => {
  return (
    <section className={lo === "en" ? styles.projectsSilder + " " + styles.en : styles.projectsSilder}>
        <MainHeading>
            <h2>
                Our Projects
            </h2>
        </MainHeading>
        <div className="container">
            <div className={styles.swiper}>
                <Swiper
                    loop
                    autoplay={{
                        delay: 3000
                    }}
                    spaceBetween={50}
                    autoHeight={true}
                    className={styles.projectsSilderSwiper}
                    // slidesPerView={3}
                    modules={[Navigation, Pagination, Autoplay]}
                    
                    pagination={{
                        clickable: true,
                        el: `.sliderPagination`
                    }}
                    navigation={{
                        nextEl: '.projectsSilder-swiper-button-next',
                        prevEl: '.projectsSilder-swiper-button-prev'
                    }}
                        breakpoints={{
                            400: {
                            slidesPerView: 1,
                            spaceBetween: 10
                            },
                            640: {
                            slidesPerView: 1,
                            spaceBetween: 10
                            },
                            768: {
                            slidesPerView: 2,
                            },
                            1024: {
                            slidesPerView: 3,
                            },
                        }}
                    >
                        {
                            projectsImages.map((project: ProjectsImage) => {
                                return(
                                <SwiperSlide key={project.id} className={styles.slide}>
                                    <Link href={`/projects/${project.id}`}>
                                            <div className={styles.img}>
                                                <Image src={project.src} alt={project.name + ` project image`}></Image>
                                            </div>
                                            <div className={styles.text}>
                                                <h3>
                                                    {project.name}
                                                </h3>
                                                <span>
                                                    {project.place}
                                                </span>
                                            </div>
                                    </Link>
                                </SwiperSlide>
                                )
                            })
                        }
                </Swiper>
                <div className={styles.sliderPagination}>
                    <div className={`sliderPagination`}></div>
                </div>
                <button className='projectsSilder-swiper-button-prev'>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button className='projectsSilder-swiper-button-next'>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    </section>
  )
}

export default ProjectsSlider