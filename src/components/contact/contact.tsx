import React from 'react'
import styles from "./contact.module.css"
const Contact = () => {
  return (
    <div className={styles.contact}>
        <h1>
            تواصل معنا
        </h1>
        <div className="container">
            <form>
                <h2>اطلب الآن</h2>
                <div>
                    <div>
                        <label htmlFor="name">
                            الاسم
                        </label>
                        <input type="text" name="name" id="name" placeholder='الاسم' />
                    </div>
                    <div>
                        <label htmlFor="email">
                            الإيميل
                        </label>
                        <input type="email" name="email" id="email" placeholder='الإيميل' />
                    </div>
                    <div>
                        <label htmlFor="subject">
                            العنوان
                        </label>
                        <input type="text" name="subject" id="subject" placeholder='العنوان' />
                    </div>
                    <div>
                        <label htmlFor="message">
                            رسالتك
                        </label>
                        <textarea name="message" id="message" placeholder='رسالتك'></textarea>
                    </div>
                    <div>
                        <input type="submit" value={"إرسال"} />
                    </div>
                </div>
            </form>
            <div className={styles.faq}>
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
            </div>
        </div>
    </div>
  )
}

export default Contact