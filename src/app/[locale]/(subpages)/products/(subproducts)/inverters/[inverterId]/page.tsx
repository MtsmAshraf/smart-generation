import React, { useState } from 'react'
import styles from "./inverter-id.module.css"
import inverters, { Feature, Inverter } from "../inverters"
import Image, { StaticImageData } from 'next/image'
import Loader from '@/components/loader/loader'
type Props = {
    params: {
        inverterId: string
    }
}

const page = ({ params }: Props) => {
  
  const inverter: Inverter | any = inverters.find((ele) => ele.id === params.inverterId)
  
  return (
    <section className={styles.inverterId}>
      <Loader></Loader>
      <div className={styles.description}>
          <div className="container">
            <div className={styles.slider}>
              <Image src={inverter.src} alt={inverter.alt}></Image>
            </div>
            <div className={styles.text}>
              <h2>{inverter.description}</h2>
              <p>{inverter.desctiptionParagraph}</p>
              <div className={styles.downloadBtns}>
                <h2>Download</h2>
                <div className={styles.btns}>
                  <a>Download Brochure</a>
                  <a href='/files/AE300&AF300 VFD User Manual 20251110.pdf' download>Download User Manual</a>
                </div>
              </div>
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
      {
        inverter.catImgs.length > 0 &&
        <div className={styles.specs}>
          <div className="container">
            <h2>
              Specification Parameters
            </h2>
            <div className={styles.specsImgs}>
              {
                inverter.catImgs.map((img: StaticImageData, index: number) => {
                  return(
                    <div key={index} className={styles.specsImg}>
                      <Image src={img} alt={`${inverter.description} Specification Parameters Image`}></Image>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      }
    </section>
  )
}

export default page