import React from 'react'
import styles from "./testimonials.module.css"
import TestimonialsCard from './testimonialsCard/testimonialsCard'
import Image from 'next/image'
import userImg from "../../../public/assets/imgs/user.png"
import testimonialsData, { Testimonial } from "./testimonialsData"
import { useTranslations } from 'next-intl'

const Testimonials = ({
    l
} : {
    l: string
}) => {
    const t = useTranslations("Testimonials")
  return (
    <div className={l === "en" ? styles.testimonials + " " + styles.en : styles.testimonials}>
        <div className="container">
            <h1>
                {t("Heading")}
            </h1>
            <div className={styles.cards}>
                {
                    testimonialsData.map((testi: Testimonial) =>{
                        let name = t(`Clients.Names.${testi.id}`)
                        let jobTitle = t(`Clients.JobTitles.${testi.id}`)
                        let text = t(`Clients.Text.${testi.id}`)
                        return(
                            <TestimonialsCard l={l} key={testi.id}>
                                <div className={styles.userImg}>
                                    <Image loading='lazy' src={testi.src} alt='User Image'></Image>
                                </div>
                                <h4>
                                    {name}
                                </h4>
                                <span>
                                    {jobTitle}
                                </span>
                                <p>
                                    {text}
                                </p>
                            </TestimonialsCard>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Testimonials