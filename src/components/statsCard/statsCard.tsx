import React from 'react'
import styles from "./stats-card.module.css"
import MainHeading from '../mainHeading/mainHeading'
import Button from '../button/button'
import { useTranslations } from 'next-intl'
const   StatsCard = ({
    l
} : {
    l: string
}) => {
  const t = useTranslations('HomePage');

  return (
    <div className={l === "en" ? styles.statsCard + " " + styles.en : styles.statsCard}>
        <div className="container">
            <div className={styles.text}>
                <MainHeading>
                    <span>
                        {t('statsCard.text.subTitle')}
                    </span>
                    <h2>
                        {t('statsCard.text.title')}
                    </h2>
                </MainHeading>
                <p>
                        {t('statsCard.text.statsP')}
                </p>
                <Button l={l} inverted={true}>
                        {t('statsCard.text.statsBtn')}
                </Button>
            </div>
            <div className={styles.stats}>
                <div>
                    <h2>
                        +100
                    </h2>
                    <span>
                        {t('statsCard.stats.one')}
                    </span>
                </div>
                <div>
                    <h2>
                        +15
                    </h2>
                    <span>
                        {t('statsCard.stats.two')}
                    </span>
                </div>
                <div>
                    <h2>
                        +30
                    </h2>
                    <span>
                        {t('statsCard.stats.three')}
                    </span>
                </div>
                <div>
                    <h2>
                        +500
                    </h2>
                    <span>
                        {t('statsCard.stats.four')}
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StatsCard