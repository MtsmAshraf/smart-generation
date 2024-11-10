import React from 'react'
import Card from './card/card'
import Image from 'next/image'
import services, { Service } from '@/app/[locale]/(subpages)/services/servicesData'
import { useTranslations } from 'next-intl'
const ServicesDetailsCards = () => {
    const t = useTranslations("Services.Detailed");
  return (
    <section>
        {
            services.map((service: Service, index: number) => {
                let heading = t(`Headings.${index}`)
                let p = t(`Ul.${index}.${index}.${index}`)
                return(
                    <Card key={service.id} inverted={index % 2 === 0 ? false : true}>
                        <div>
                            <h2>
                                {heading}
                            </h2>
                            <ul>
                                <li>
                                    {t(`Ul.${index}.${0}.${0}`)}
                                </li>
                                {
                                    !(t(`Ul.${index}.${1}.${0}`)).startsWith("S") && 
                                    <li>
                                        {t(`Ul.${index}.${1}.${0}`)}
                                    </li>
                                } {
                                    !(t(`Ul.${index}.${2}.${0}`)).startsWith("S") && 
                                    <li>
                                        {t(`Ul.${index}.${2}.${0}`)}
                                    </li>
                                }
                                {
                                    !(t(`Ul.${index}.${3}.${0}`)).startsWith("S") && 
                                    <li>
                                        {t(`Ul.${index}.${3}.${0}`)}
                                    </li>
                                }
                                {
                                    !(t(`Ul.${index}.${4}.${0}`)).startsWith("S") && 
                                    <li>
                                        {t(`Ul.${index}.${4}.${0}`)}
                                    </li>
                                }
                                {
                                    !(t(`Ul.${index}.${5}.${0}`)).startsWith("S") && 
                                    <li>
                                        {t(`Ul.${index}.${5}.${0}`)}
                                    </li>
                                }
                                {
                                    !(t(`Ul.${index}.${6}.${0}`)).startsWith("S") && 
                                    <li>
                                        {t(`Ul.${index}.${6}.${0}`)}
                                    </li>
                                }
                                {
                                    !(t(`Ul.${index}.${7}.${0}`)).startsWith("S") && 
                                    <li>
                                        {t(`Ul.${index}.${7}.${0}`)}
                                    </li>
                                }
                                {
                                    !(t(`Ul.${index}.${8}.${0}`)).startsWith("S") && 
                                    <li>
                                        {t(`Ul.${index}.${8}.${0}`)}
                                    </li>
                                }
                                {
                                    !(t(`Ul.${index}.${9}.${0}`)).startsWith("S") && 
                                    <li>
                                        {t(`Ul.${index}.${9}.${0}`)}
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