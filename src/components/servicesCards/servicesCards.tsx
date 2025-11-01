"use client"
import React from 'react'
import MainHeading from '../mainHeading/mainHeading'
import styles from "./services-cards.module.css"
import Image from 'next/image'
import Card from './card/card'
import { useTranslations } from 'use-intl'
// import heroServices ,{ HeroService } from './servicesHeroData'
import { Link } from '@/i18n/routing'
import services, { Service } from '@/app/[locale]/(subpages)/services/servicesData'
const ServicesCards = ({
    l
}: {
    l: string
}) => {
    const t = useTranslations("Services.Detailed");
    const t2 = useTranslations("Services");

    
  return (
    <div className={l === "en" ? styles.servicesCards + " " + styles.en : styles.servicesCards}>
        <MainHeading>
            <span>
                {t2('SubHeading')}
            </span>
            <h1>
                {t2('Heading')}
            </h1>
        </MainHeading>
        <div className={styles.cards}>
            {
                services.map((service: Service, index: number) => {
                    let heading = t(`Headings.${service.id}`)
                    // let p = t(`Ul.${service.id}.${service.id}.${service.id}`)
                    return(
                        <Card key={service.id}>
                            <Link href={`/services`}>
                                <div className={styles.cardImg}>
                                    <Image loading='lazy' src={service.src} alt={heading}></Image>
                                </div>
                                <div>
                                    <h2>
                                        {heading}
                                    </h2>
                                    {/* <ul>
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
                                    </ul> */}
                                </div>
                            </Link>
                        </Card>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ServicesCards