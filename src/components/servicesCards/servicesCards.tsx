import React from 'react'
import MainHeading from '../mainHeading/mainHeading'
import styles from "./services-cards.module.css"
import Image from 'next/image'
import test from "../../assets/imgs/home-bg.jpg"
import Card from './card/card'

const ServicesCards = () => {
  return (
    <div className={styles.servicesCards}>
        <MainHeading>
            <span>
                ابن حلمك
            </span>
            <h1>
                الخدمات التي نقدمها لكم
            </h1>
        </MainHeading>
        <div className={styles.cards}>
            <Card>
                <div className={styles.cardImg}>
                    <Image src={test} alt='servuce image'></Image>
                </div>
                <div className={styles.cardText}>
                    <h2>
                        التبريد والتكييف المركزي
                    </h2>
                    <p>
                    من وحدات التبريد بالماء المثلج والمضخات وأبراج التبريد ، ووحدات الفريون للتبريد المباشر ، ووحدات التدفئة                    </p>
                </div>
            </Card>
            <Card>
                <div className={styles.cardImg}>
                    <Image src={test} alt='servuce image'></Image>
                </div>
                <div className={styles.cardText}>
                    <h2>
                    لوحات التحكم والتوزيع
                    </h2>
                    <p>
                    لوحات التحكم باستخدام (PLC-HMI-SCADA)
                    لوحات توزيع الجهد المنخفض الرئيسية والفرعية- لوحات تنظيم تشغيل المحركات الكهربائية - لوحات الكلاسيك كنترول بأنواعها.                    </p>
                </div>
            </Card>
            <Card>
                <div className={styles.cardImg}>
                    <Image src={test} alt='servuce image'></Image>
                </div>
                <div className={styles.cardText}>
                    <h2>
                    صيانة خطوط الإنتاج
                    </h2>
                    <p>
                    نعمل على تحديث وصيانة الماكينات وخطوط الإنتاج لكافة المصانع بأنواعها باستخدام وحات ال PLC وشاشات اللمس للصناعات كافة.</p>
                </div>
            </Card>
            <Card>
                <div className={styles.cardImg}>
                    <Image src={test} alt='servuce image'></Image>
                </div>
                <div className={styles.cardText}>
                    <h2>
                    التوريدات
                    </h2>
                    <p>
                    توريد قطع الغيار ومستلزمات التشغيل المختلفة.
                    نعمل على توريد جميع وكافة مكونات لوحات التحكم الالي ولوحات التوزيع
                    </p>
                </div>
            </Card>
            <Card>
                <div className={styles.cardImg}>
                    <Image src={test} alt='servuce image'></Image>
                </div>
                <div className={styles.cardText}>
                    <h2>
                    الاستشارات الهندسية
                    </h2>
                    <p>
                    انظمة المراقبة - السنترالات الداخلية- انظمه انذار الحريق
                    انظمة الحضور والانصراف- الاستدعاء والانظمة الصوتية
                    </p>
                </div>
            </Card>
            <Card>
                <div className={styles.cardImg}>
                    <Image src={test} alt='servuce image'></Image>
                </div>
                <div className={styles.cardText}>
                    <h2>
                    تصميم وتنفيذ وتوريد كافة أنظمة التيار الخفيف
                    </h2>
                    <p>
                        نعمل على تحديث وصيانة الماكينات وخطوط الإنتاج لكافة المصانع بأنواعها باستخدام وحات ال PLC وشاشات اللمس للصناعات كافة.
                    </p>
                </div>
            </Card>
        </div>
    </div>
  )
}

export default ServicesCards