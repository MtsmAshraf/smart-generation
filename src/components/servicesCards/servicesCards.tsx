"use client"
import React from 'react'
import MainHeading from '../mainHeading/mainHeading'
import styles from "./services-cards.module.css"
import Image from 'next/image'
import test from "../../assets/imgs/home-bg.jpg"
import Card from './card/card'
import { useTranslations } from 'use-intl'

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
            <Card>
                <div className={styles.cardImg}>
                    <Image loading='lazy' src={test} alt='servuce image'></Image>
                </div>
                <div className={styles.cardText}>
                    <h2>
                        {t('CardHeadings.0')}
                    </h2>
                    <p>
                    {t('CardP.0')}
                    </p>
                </div>
            </Card>
            <Card>
                <div className={styles.cardImg}>
                    <Image loading='lazy' src={test} alt='servuce image'></Image>
                </div>
                <div className={styles.cardText}>
                    <h2>
                        {t('CardHeadings.1')}
                    </h2>
                    <p>
                    {t('CardP.1')}
                    </p>
                    </div>
            </Card>
            <Card>
                <div className={styles.cardImg}>
                    <Image loading='lazy' src={test} alt='servuce image'></Image>
                </div>
                <div className={styles.cardText}>
                    <h2>
                    {t('CardHeadings.2')}
                    </h2>
                    <p>
                    {t('CardP.2')}
                    </p>
                </div>
            </Card>
            <Card>
                <div className={styles.cardImg}>
                    <Image loading='lazy' src={test} alt='servuce image'></Image>
                </div>
                <div className={styles.cardText}>
                    <h2>
                    {t('CardHeadings.3')}
                    </h2>
                    <p>
                    {t('CardP.3')}
                    </p>
                </div>
            </Card>
            <Card>
                <div className={styles.cardImg}>
                    <Image loading='lazy' src={test} alt='servuce image'></Image>
                </div>
                <div className={styles.cardText}>
                    <h2>
                    {t('CardHeadings.4')}
                    </h2>
                    <p>
                    {t('CardP.4')}
                    </p>
                </div>
            </Card>
            <Card>
                <div className={styles.cardImg}>
                    <Image loading='lazy' src={test} alt='servuce image'></Image>
                </div>
                <div className={styles.cardText}>
                    <h2>
                    {t('CardHeadings.5')}
                    </h2>
                    <p>
                    {t('CardP.5')}
                    </p>
                </div>
            </Card>
        </div>
    </div>
  )
}

export default ServicesCards