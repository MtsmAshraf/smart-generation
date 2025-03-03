"use client"
import React from 'react'
import MainHeading from '../mainHeading/mainHeading'
import styles from "./services-cards.module.css"
import Image from 'next/image'
import Card from './card/card'
import { useTranslations } from 'use-intl'
import heroServices ,{ HeroService } from './servicesHeroData'
import { Link } from '@/i18n/routing'

const ServicesCards = ({
    l
}: {
    l: string
}) => {
    const t = useTranslations("Services");
  return (
    <div className={l === "en" ? styles.servicesCards + " " + styles.en : styles.servicesCards}>
        <MainHeading>
            <span>
                {t('SubHeading')}
            </span>
            <h1>
                {t('Heading')}
            </h1>
        </MainHeading>
        <div className={styles.cards}>
            {
                heroServices.map((service: HeroService, index: number) => {
                    let heading = t(`CardHeadings.${index}`)
                    let p = t(`CardP.${index}`)
                    if(index <= 5){
                        return(
                            <Card key={service.id}>
                                <Link href={`/services`}>
                                    <div className={styles.cardImg}>
                                        <Image loading='lazy' src={service.src} alt={heading}></Image>
                                    </div>
                                    <div className={styles.cardText}>
                                        <h2>
                                            {heading}
                                        </h2>
                                        <p>
                                            {p}
                                        </p>
                                    </div>
                                </Link>
                            </Card>
                        )
                    }
                })
            }
        </div>
    </div>
  )
}

export default ServicesCards