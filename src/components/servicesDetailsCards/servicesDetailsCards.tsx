import React from 'react'
import Card from './card/card'
import Image from 'next/image'
import test from "../../assets/imgs/home-bg.jpg"
import services, { Service } from '@/app/[locale]/(subpages)/services/servicesData'
const ServicesDetailsCards = () => {
  return (
    <section>
        {
            services.map((service: Service, index: nunber) => {
                return(
                    <Card key={service.id} inverted={index % 2 === 0 ? false : true}>
                        <div>
                            <h2>
                                التبريد والتكييف المركزي
                            </h2>
                            <p>
                                من وحدات التبريد بالماء المثلج والمضخات وأبراج التبريد ، ووحدات الفريون للتبريد المباشر ، ووحدات التدفئة
                            </p>
                        </div>
                        <div>
                            <Image loading='lazy' src={service.src} alt='Service Img'></Image>
                        </div>
                    </Card>
                )
            })
        }
    </section>
  )
}

export default ServicesDetailsCards