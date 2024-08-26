import React from 'react'
import styles from "./testimonials.module.css"
import TestimonialsCard from './testimonialsCard/testimonialsCard'
import Image from 'next/image'
import userImg from "../../assets/imgs/user.png"

const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
        <div className="container">
            <div className={styles.cards}>
                <TestimonialsCard>
                    <div className={styles.userImg}>
                        <Image src={userImg} alt='User Image'></Image>
                    </div>
                    <h4>
                        أحمد محمد
                    </h4>
                    <span>
                        عميل
                    </span>
                    <p>
                        جديا اوصي بهذه الشركة لقد قاموا بتنفيذ عملهم بمنتهي الدقة وفي اسرع وقت حقا انها افضل شركة في المجال.
                    </p>
                </TestimonialsCard>
                <TestimonialsCard>
                    <div className={styles.userImg}>
                        <Image src={userImg} alt='User Image'></Image>
                    </div>
                    <h4>
                        ماهر عبد الله
                    </h4>
                    <span>
                        عميل
                    </span>
                    <p>
                        لم اكن اتصور ان اجد احد الشركات تستعمل احدث التقنيات في هذا المجال و تنتهي من اعمالها بسرعة حقا انا سعيد بتعامل معكم.
                    </p>
                </TestimonialsCard>
                <TestimonialsCard>
                    <div className={styles.userImg}>
                        <Image src={userImg} alt='User Image'></Image>
                    </div>
                    <h4>
                        أحمد محمد
                    </h4>
                    <span>
                        عميل
                    </span>
                    <p>
                        لقد قمت بتواصل مع هذه الشركة ولقد كنت قلق في البداية لكن لم اتوقع حقا انني سوف اري هذه النتائج الممتازة حقا اشكركم
                    </p>
                </TestimonialsCard>
                <TestimonialsCard>
                    <div className={styles.userImg}>
                        <Image src={userImg} alt='User Image'></Image>
                    </div>
                    <h4>
                        أحمد محمد
                    </h4>
                    <span>
                        عميل
                    </span>
                    <p>
                        جديا اوصي بهذه الشركة لقد قاموا بتنفيذ عملهم بمنتهي الدقة وفي اسرع وقت حقا انها افضل شركة في المجال.
                    </p>
                </TestimonialsCard>
            </div>
        </div>
    </div>
  )
}

export default Testimonials