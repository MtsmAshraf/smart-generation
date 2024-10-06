import React, { useState } from 'react'
import styles from "./servo-drive-id.module.css"
import servoDrives, { Feature, ServoDrive } from "../servo-drives"
import Image, { StaticImageData } from 'next/image'
type Props = {
    params: {
        servoDriveId: string
    }
}

const page = ({ params }: Props) => {
  
  const servoDrive: ServoDrive | any = servoDrives.find((ele) => ele.id === params.servoDriveId)
  
  return (
        <section className={styles.servoDriveId}>
        <div className={styles.description}>
            <div className="container">
                <div className={styles.slider}>
                <Image src={servoDrive.src} alt={servoDrive.alt}></Image>
                </div>
                <div className={styles.text}>
                <h2>{servoDrive.description}</h2>
                <p>{servoDrive.desctiptionParagraph}</p>
                <ul>
                    {
                    servoDrive.desctiptionUl.map((ele: string) => {
                        return(
                        <li key={ele}>{ele}</li>
                        )
                    })
                    }
                </ul>
                </div>
            </div>
        </div>
        <div className={styles.features}>
            <div className="container">
                <h2>PRODUCT FEATURES AND ADVANTAGES</h2>
                <div className={styles.featuresDetails}>
                <ul>
                    {
                    servoDrive.features.map((ele: Feature) => {
                        return(
                        <li key={ele.paragraph}>
                            {ele.heading && <h4>{ele.heading}</h4>}
                            <p>{ele.paragraph}</p>
                        </li>
                        )
                    })
                    }
                </ul>
                <div className={styles.featuresImg}>
                    <Image src={servoDrive.src} alt={servoDrive.alt}></Image>
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
                servoDrive.catImgs.map((img: StaticImageData, index: number) => {
                    return(
                    <div key={index} className={styles.specsImg}>
                        <Image src={img} alt={`${servoDrive.description} Specification Parameters Image`}></Image>
                    </div>
                    )
                })
                }
            </div>
            </div>
        </div>
        <div className={styles.download}>
            <div className="container">
            <h2>Download</h2>
            </div>
        </div>
        </section>
  )
}

export default page