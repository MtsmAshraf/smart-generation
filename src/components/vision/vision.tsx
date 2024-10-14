import React from 'react'
import styles from "./vision.module.css"
import Button from '../button/button'
import visionBg from "../../assets/imgs/vision-bg.jpg"
import stepsBg from "../../assets/imgs/steps-bg.jpg"

const Vision = ({
    l
}: {
    l: string
}) => {
  return (
    <div className={styles.visionSteps}>
        <div className={styles.vision} style={{ backgroundImage: `url(${visionBg.src})` }}>
            <div className={styles.overlay}></div>
            <span>
                رسالتنا
            </span>
            <h2>
                توفير خدمات تقنية ذات جودة عالية تلبي طموحات عملائنا وترتقي بالعملية الانتاجية إلى أقصى معدلاتها
            </h2>
            <p>
                نسعى دائما إلى إرضاء عملائنا بالجمع بين سرعة التنفيذ وتحقيق جودة الأداء وتقديم الخدمات بأسعار تنافسية
            </p>
            
            <Button l={l} inverted={false}>
                تواصل معنا
            </Button>
        </div>
        <div className={styles.steps} style={{ backgroundImage: `url(${stepsBg.src})` }}>
            <div className={styles.overlay}></div>
            <h2>
            نحن نتبع أفضل الطرق الحديثة
            </h2>
            <p>
                نهدف إلى تطوير كوادرنا الفنية بصورة مستمرة لنكون على أتم الاستعداد لمواجهة كافة متطلبات سوق العمل.
            </p>
            <ul>
                <li>الاستدامة</li>
                <li>المشروع في الوقت المحدد</li>
                <li>التقنية الحديثة</li>
                <li>أحدث التصاميم</li>
            </ul>
        </div>
    </div>
  )
}

export default Vision