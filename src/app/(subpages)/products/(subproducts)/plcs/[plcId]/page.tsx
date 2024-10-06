import React, { useState } from 'react'
import styles from "./plc-id.module.css"
import plcs, { Feature, Plc } from "../plcs"
import Image, { StaticImageData } from 'next/image'
type Props = {
    params: {
        plcId: string
    }
}

const page = ({ params }: Props) => {
  
  const plc: Plc | any = plcs.find((ele) => ele.id === params.plcId)
  
  return (
    <section className={styles.plcId}>
      <div className={styles.description}>
            <div className="container">
            <div className={styles.slider}>
                <Image src={plc.src} alt={plc.alt}></Image>
            </div>
            <div className={styles.text}>
                <h2>{plc.description}</h2>
                <p>{plc.desctiptionParagraph}</p>
                {/* <ul>
                {
                    plc.desctiptionUl.map((ele: string) => {
                        return(
                        <li key={ele}>{ele}</li>
                    )
                    })
                }
                </ul> */}
            </div>
            </div>
        </div>
        <div className={styles.features}>
            <div className="container">
            <h2>PRODUCT FEATURES AND ADVANTAGES</h2>
            <div className={styles.featuresDetails}>
                <ul>
                {
                    plc.features.map((ele: Feature) => {
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
                <Image src={plc.src} alt={plc.alt}></Image>
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
                plc.catImgs.map((img: StaticImageData, index: number) => {
                return(
                    <div key={index} className={styles.specsImg}>
                        <Image src={img} alt={`${plc.description} Specification Parameters Image`}></Image>
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