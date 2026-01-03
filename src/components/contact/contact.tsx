import React from 'react'
import styles from "./contact.module.css"
import { useTranslations } from 'next-intl'
import SocialLinks from '../socialLinks/socialLinks'
const Contact = ({
    l
} : {
    l: string
}) => {
    const t = useTranslations("Contact")
  return (
    <div className={l === "ar" ? styles.contact + " " + styles.ar : styles.contact}>
        <h1>
            {t("Heading")}
        </h1>
        <div className="container">
            {/* <div className={styles.faq}>
                <h2>
                    الأسئلة المتكررة
                </h2>
                <ul className={styles.questions}>
                    <li>
                        <h4>أسباب التعامل معنا</h4>
                        <p>
                            نعمل على مستوى عالي من الجودة لتتناسب مع متطلبات العميل في ايصال الفكرة والهدف من المشروع
                        </p>
                    </li>
                    <li>
                        <h4>ما هو الضمان من الشركة؟</h4>
                        <p>
                            يحصل جميع عملائنا على الضمان الكامل على الاعمال كافة سواء صيانة او تنفيذ الخدمات وتكون الاستجابة لطلبات العملاء بسرعة فائقة
                        </p>
                    </li>
                    <li>
                        <h4>الإطار الزمني للانتهاء من المشاريع</h4>
                        <p>
                            نضمن وصول المشاريع في الإطار الزمني المحدد للعملاء، نحن مستعدين للعمل24/7 حتى في أضيق الجداول الزمنية. لقد أثبتنا ذلك في المشاريع السابقة.
                        </p>
                    </li>
                </ul>
            </div> */}
            <div className={styles.map}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1122.844451203488!2d31.744994149440977!3d30.29827522600128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1457fd89e331d53d%3A0xa72932929fbae255!2zU21hcnQgR2VuZXJhdGlvbiBDby4g2LTYsdmD2Kkg2LPZhdin2LHYqiDYrNmK2YbZitix2YrYtNmG!5e0!3m2!1sen!2seg!4v1731150380019!5m2!1sen!2seg" width="600" height="450" style={{ border: "0" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <div style={{ width: "fit-content", margin: "30px auto" }}>
            <SocialLinks></SocialLinks>
        </div>
    </div>
  )
}

export default Contact