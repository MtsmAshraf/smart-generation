"use client"
import React from 'react'
import MainHeading from '../mainHeading/mainHeading'
import styles from "./services-cards.module.css"
import Image from 'next/image'
import test from "../../assets/imgs/home-bg.jpg"
import Card from './card/card'
import { useTranslations } from 'use-intl'
import services, { Service } from '@/app/[locale]/(subpages)/services/servicesData'

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
                services.map((service: Service, index: number) => {
                    let heading = t(`CardHeadings.${index}`)
                    let p = t(`CardP.${index}`)
                    return(
                        <Card key={service.id}>
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
                        </Card>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ServicesCards