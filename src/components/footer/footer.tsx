import React from 'react'
import styles from "./footer.module.css"
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div>
          <h4>الأقسام</h4>
          <div>
            <Link href="/">الخدمات</Link>
            <Link href="/">المشاريع</Link>
            <Link href="/">التوريدات</Link>
            <Link href="/">عن الشركة</Link>
            <Link href="/">اتصل بنا</Link>
          </div>
        </div>
        <div>
          <h4>أماكننا</h4>
          <div>
            <address>
              الأردنية, جراند مول
              <br />
              العاشر من رمضان
              <br />
              مصر
            </address>
            <div>
              <a href="tel:00201552778135">01552778135</a>
              <br />
              <a href="tel:00201145668638">01145668638</a>
            </div>
            <div>
              8:00am - 4:00pm
              <br />
              جميع أيام الأسبوع عدا الجمعة
            </div>
          </div>
        </div>
        <div>
          <h4>
            صفحاتنا
          </h4>
          <div>
            <a href="/">facebook</a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        by &copy; <a href="https://moatasim-ashraf.netlify.app/">Moatasim</a> 2024
      </div>
    </footer>
  )
}

export default Footer