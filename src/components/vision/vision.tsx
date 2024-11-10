import React from 'react'
import styles from "./vision.module.css"
import Button from '../button/button'
import visionBg from "../../assets/imgs/vision-bg.jpg"
import stepsBg from "../../assets/imgs/steps-bg.jpg"
import { useTranslations } from 'next-intl'

const Vision = ({
    l
}: {
    l: string
}) => {
    const t = useTranslations("VisionSteps")
  return (
    <div className={ l === "en" ? styles.visionSteps + " " + styles.en : styles.visionSteps}>
        <div className={styles.vision} style={{ backgroundImage: `url(${visionBg.src})` }}>
            <div className={styles.overlay}></div>
            <span>
                {t(`Vision.SubHeading`)}
            </span>
            <h2>
                {t('Vision.Heading')}
            </h2>
            <p>
                {t('Vision.VisionP')}
            </p>
            
            <Button href={`/${l}/contact`} l={l} inverted={false}>
                {t('Vision.Btn')}
            </Button>
        </div>
        <div className={styles.steps} style={{ backgroundImage: `url(${stepsBg.src})` }}>
            <div className={styles.overlay}></div>
            <h2>
                {t(`Steps.Heading`)}
            </h2>
            <p>
                {t(`Steps.StepsP`)}
            </p>
            <ul>
                <li>
                {t(`Steps.StepsUl.1`)}
                </li>
                <li>
                {t(`Steps.StepsUl.2`)}
                </li>
                <li>
                {t(`Steps.StepsUl.3`)}
                </li>
                <li>
                {t(`Steps.StepsUl.4`)}
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Vision