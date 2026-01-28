import React, { useState } from 'react'
import styles from "./plc-id.module.css"
import plcs, { Feature, Plc } from "../plcs"
import Image, { StaticImageData } from 'next/image'
import Loader from '@/components/loader/loader'
import { Metadata } from 'next'
type Props = {
    params: {
        plcId: string
    }
}

export const generateMetadata = async ({
    params,
  }: Readonly<{
    params:  Promise<{plcId: string}>
  }>) : Promise<Metadata> => {
    const { plcId } = await params;
    const plc = plcs.find((plc) => plc.id === plcId)
    return{
          title: `${plc?.description}` ,
          description: plc?.description,
          keywords: (plc?.keywords?.join(",") + `,${plc?.description}`+ `,${plc?.name}`).split(",")
      }
  }
const page = ({ params }: Props) => {
  
  const plc: Plc | any = plcs.find((ele) => ele.id === params.plcId)
  
  return (
    <section className={styles.plcId}>
      <Loader></Loader>
      <div className={styles.description}>
            <div className="container">
            <div className={styles.slider}>
                <Image src={plc.src} alt={plc.alt}></Image>
            </div>
            <div className={styles.text}>
                <h2>{plc.description}</h2>
                <p>{plc.desctiptionParagraph}</p>
                {
                    (plc.userManualFile  || plc.brochureFile || plc.softwareFile) &&
                    <div className={styles.downloadBtns}>
                    <h2>Download</h2>
                    <div className={styles.btns}>
                        {
                        plc.brochureFile &&
                        <a href={plc.brochureFile} aria-description={`Download ${plc.description} Brochure`} title={`Download ${plc.description} Brochure`} download>Download Brochure</a>
                        }
                        {
                        plc.userManualFile &&
                        <a href={plc.userManualFile} aria-description={`Download ${plc.description} User Manual`} title={`Download ${plc.description} User Manual`} download>Download User Manual</a>
                        }
                        {
                        plc.softwareFile &&
                        <a href={plc.softwareFile} aria-description={`Download ${plc.description} Software`} title={`Download ${plc.description} Software`} download>Download Software</a>
                        }
                    </div>
                    </div>
                }
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
    </section>
    )
}

export default page