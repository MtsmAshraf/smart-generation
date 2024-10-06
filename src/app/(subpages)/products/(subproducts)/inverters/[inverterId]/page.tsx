import React, { useState } from 'react'
import styles from "./inverter-id.module.css"
import inverters, { Feature, Inverter } from "../inverters"
import Image, { StaticImageData } from 'next/image'
type Props = {
    params: {
        inverterId: string
    }
}

const page = ({ params }: Props) => {
  
  const inverter: Inverter | any = inverters.find((ele) => ele.id === params.inverterId)
  
  return (
    <section className={styles.inverterId}>
      <div className={styles.description}>
          <div className="container">
            <div className={styles.slider}>
              <Image src={inverter.src} alt={inverter.alt}></Image>
            </div>
            <div className={styles.text}>
              <h2>{inverter.description}</h2>
              <p>{inverter.desctiptionParagraph}</p>
              <ul>
                {
                  inverter.desctiptionUl.map((ele: string) => {
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
                  inverter.features.map((ele: Feature) => {
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
                <Image src={inverter.src} alt={inverter.alt}></Image>
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
              inverter.catImgs.map((img: StaticImageData, index: number) => {
                return(
                  <div className={styles.specsImg}>
                    <Image key={index} src={img} alt={`${inverter.description} Specification Parameters Image`}></Image>
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