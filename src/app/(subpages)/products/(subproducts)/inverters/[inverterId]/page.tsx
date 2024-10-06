import React, { useState } from 'react'
import styles from "./inverter-id.module.css"
import inverters, { Feature, Inverter } from "../inverters"
import Image from 'next/image'
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
        <div className={styles.slider}>
          <Image src={inverter.src} alt={inverter.alt}></Image>
        </div>
        <div className={styles.text}>
          <h2>{inverter.description}</h2>
          <p>{inverter.desctiptionParagraph}</p>
          <ul>
            {
              inverter.desctiptionUl.map((ele) => {
                return(
                  <li key={ele}>{ele}</li>
                )
              })
            }
          </ul>
        </div>
      </div>
      <div className={styles.features}>
          <h2>PRODUCT FEATURES AND ADVANTAGES</h2>
          <div>
            <ul>
              {
                inverter.features.map((ele: Feature) => {
                  return(
                    <li key={ele.paragraph}>
                      {ele.heading} && <h4>{ele.heading}</h4>
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
      <div className={styles.specs}>
        {
          inverter.catImgs.map((img) => {
            return(
              <div key={img}>
                <Image src={img} alt={`${inverter.description} Specification Parameters Image`}></Image>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default page