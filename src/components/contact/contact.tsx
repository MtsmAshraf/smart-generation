import React from 'react'
import styles from "./contact.module.css"
import { useTranslations } from 'next-intl'
const Contact = ({
    l
} : {
    l: string
}) => {
    const t = useTranslations("Contact")
    const username = t("Form.UserName");
    const email = t("Form.Email");
    const userAddress = t("Form.Address");
    const msg = t("Form.Msg");
    const send = t("Form.Send");
  return (
    <div className={l === "en" ? styles.contact + " " + styles.en : styles.contact}>
        <h1>
            {t("Heading")}
        </h1>
        <div className="container">
            <form>
                <h2>{t("Form.FormHeading")}</h2>
                <div>
                    <div>
                        <label htmlFor="name">
                            {t("Form.UserName")}
                        </label>
                        <input type="text" name="name" id="name" placeholder={username}/>
                    </div>
                    <div>
                        <label htmlFor="email">
                            {t("Form.Email")}
                        </label>
                        <input type="email" name="email" id="email" placeholder={email} />
                    </div>
                    <div>
                        <label htmlFor="address">
                            {t("Form.Address")}
                        </label>
                        <input type="text" name="address" id="address" placeholder={userAddress} />
                    </div>
                    <div>
                        <label htmlFor="message">
                            {t("Form.Msg")}
                        </label>
                        <textarea name="message" id="message" placeholder={msg}></textarea>
                    </div>
                    <div>
                        <input type="submit" value={send} />
                    </div>
                </div>
            </form>
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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d215.30320692538552!2d31.746006819136237!3d30.298294287672768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1457fd428c93721f%3A0x61702c6afbadda59!2zVG9vbHMgTWFsbCwg2YXZiNmEINin2YTYudiv2K8!5e0!3m2!1sen!2seg!4v1724759571811!5m2!1sen!2seg" width="600" height="450" style={{ border: "0" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
  )
}

export default Contact