import React, { useState } from 'react'
import styles from "./hmi-id.module.css"
import Image, { StaticImageData } from 'next/image'
import hmis, { Feature, Hmi } from '../hmi'
import Loader from '@/components/loader/loader'
type Props = {
    params: {
        hmiId: string
    }
}

const page = ({ params }: Props) => {
  
  const hmi: Hmi | any = hmis.find((ele) => ele.id === params.hmiId)
  
  return (
    <section className={styles.hmiId}>
        <Loader></Loader>
        <div className={styles.description}>
            <div className="container">
            <div className={styles.slider}>
                <Image src={hmi.src} alt={hmi.alt}></Image>
            </div>
            <div className={styles.text}>
                <h2>{hmi.description}</h2>
                <p>{hmi.desctiptionParagraph}</p>
                {
                    (hmi.userManualFile  || hmi.brochureFile) &&
                    <div className={styles.downloadBtns}>
                    <h2>Download</h2>
                    <div className={styles.btns}>
                        {
                        hmi.brochureFile &&
                        <a href={hmi.brochureFile} download>Download Brochure</a>
                        }
                        {
                        hmi.userManualFile &&
                        <a href={hmi.userManualFile} download>Download User Manual</a>
                        }
                    </div>
                    </div>
                }
                {
                    hmi.desctiptionUl &&
                    <ul>
                    {
                        hmi.desctiptionUl.map((ele: string) => {
                        return(
                            <li key={ele}>{ele}</li>
                        )
                        })
                    }
                    </ul>
                }
            </div>
            </div>
        </div>
        <div className={styles.features}>
            <div className="container">
            <h2>PRODUCT FEATURES AND ADVANTAGES</h2>
            <div className={styles.featuresDetails}>
                {
                    hmi.desctiptionUl
                    &&
                    <ul>
                    {
                        hmi.features.map((ele: Feature) => {
                        return(
                            <li key={ele.paragraph}>
                            {ele.heading && <h4>{ele.heading}</h4>}
                            <p>{ele.paragraph}</p>
                            </li>
                        )
                        })
                    }
                    </ul>
                }
                <div className={styles.featuresImg}>
                <Image src={hmi.src} alt={hmi.alt}></Image>
                </div>
            </div>
            </div>
        </div>
        <div className={styles.specs}>
        <div className="container">
            <h2>
                Specification Parameters
            </h2>
            <div className={styles.specsImgs}>
                {
                hmi.catImgs.map((img: StaticImageData, index: number) => {
                    return(
                    <div key={index} className={styles.specsImg}>
                        <Image src={img} alt={`${hmi.description} Specification Parameters Image`}></Image>
                    </div>
                    )
                })
            }
            </div>
            </div>
        </div>
    </section>
  )
}

export default page