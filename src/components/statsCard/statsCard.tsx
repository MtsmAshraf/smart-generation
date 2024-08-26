import React from 'react'
import styles from "./stats-card.module.css"
import MainHeading from '../mainHeading/mainHeading'
import Button from '../button/button'
const StatsCard = () => {
  return (
    <div className={styles.statsCard}>
        <div className="container">
            <div className={styles.text}>
                <MainHeading>
                    <span>
                        ابن مشروع أحلامك
                    </span>
                    <h2>
                        10 اعوام من النجاح والانجازات
                    </h2>
                </MainHeading>
                <p>
                حققنا الكثير من النجاحات والانجازات في المشاريع الهندسية في اقصر مدة و افضل تقييم .
                </p>
                <Button inverted={true}>
                    اطلب مشروعك
                </Button>
            </div>
            <div className={styles.stats}>
                <div>
                    <h2>
                        +1000
                    </h2>
                    <span>
                        مشروع ناجح
                    </span>
                </div>
                <div>
                    <h2>
                        +10
                    </h2>
                    <span>
                        خبرة فريق العمل
                    </span>
                </div>
                <div>
                    <h2>
                        +50
                    </h2>
                    <span>
                        مشروع نفذ في سنة 2021
                    </span>
                </div>
                <div>
                    <h2>
                        1520+
                    </h2>
                    <span>
                        عميل يثق بنا
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StatsCard