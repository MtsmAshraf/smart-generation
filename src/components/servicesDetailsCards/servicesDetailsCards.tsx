import React from 'react'
import Card from './card/card'
import Image from 'next/image'
import services, { Service } from '@/app/[locale]/(subpages)/services/servicesData'
import { useTranslations } from 'next-intl'
const ServicesDetailsCards = ({
    l
}: {
    l: string
}) => {
    const t = useTranslations("Services.Detailed");
  return (
    <section>
        {
            services.map((service: Service, index: number) => {
                let heading = t(`Headings.${service.id}`)
                let p = t(`Ul.${service.id}.${service.id}.${service.id}`)
                return(
                    <Card l={l} key={service.id} inverted={index % 2 === 0 ? false : true}>
                        <div>
                            <h2>
                                {heading}
                            </h2>
                            <ul>
                                <li>
                                    {t(`Ul.${service.id}.${0}.${0}`)}
                                </li>
                                {
                                    !(t(`Ul.${service.id}.${1}.${0}`)).startsWith("S") && 
                                    <li>
                                        {t(`Ul.${service.id}.${1}.${0}`)}
                                    </li>
                                } 
                                {
                                    !(t(`Ul.${service.id}.${3}.${0}`)).startsWith("S") && 
                                    <li>
                                        {t(`Ul.${service.id}.${3}.${0}`)}
                                    </li>
                                }
                                {
                                    !(t(`Ul.${service.id}.${4}.${0}`)).startsWith("S") && 
                                    <li>
                                        {t(`Ul.${service.id}.${4}.${0}`)}
                                    </li>
                                }
                                {
                                    !(t(`Ul.${service.id}.${5}.${0}`)).startsWith("S") && 
                                    <li>
                                        {t(`Ul.${service.id}.${5}.${0}`)}
                                    </li>
                                }
                                {
                                    !(t(`Ul.${service.id}.${6}.${0}`)).startsWith("S") && 
                                    <li>
                                        {t(`Ul.${service.id}.${6}.${0}`)}
                                    </li>
                                }
                                {
                                    !(t(`Ul.${service.id}.${7}.${0}`)).startsWith("S") && 
                                    <li>
                                        {t(`Ul.${service.id}.${7}.${0}`)}
                                    </li>
                                }
                                {
                                    !(t(`Ul.${service.id}.${8}.${0}`)).startsWith("S") && 
                                    <li>
                                        {t(`Ul.${service.id}.${8}.${0}`)}
                                    </li>
                                }
                                {
                                    !(t(`Ul.${service.id}.${9}.${0}`)).startsWith("S") && 
                                    <li>
                                        {t(`Ul.${service.id}.${9}.${0}`)}
                                    </li>
                                }
                            </ul>
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