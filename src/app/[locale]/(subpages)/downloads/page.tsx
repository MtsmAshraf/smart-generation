"use client"
import React, { useState } from 'react'
import downloadFiles, { DownloadFile } from './downloads'
import styles from "./downloads.module.css"

type Props = {
    params: {
        locale: string
    }
}
const DownloadsPage = ({ params }: Props) => {
    const {locale} = params
    const [filterChoice, setFilterChoice] = useState("")
    
  return (  
    <section className={locale === "ar" ? styles.ar + " " + styles.downloads : styles.downloads }>
        <div className="container">
            <div className={styles.filter}>
                <div>
                    <label htmlFor="all">
                        <span>All</span>
                    </label>
                    <input onChange={(e) => setFilterChoice(e.target.value)} defaultChecked type="radio" id='all' name='grid-filter' value={""}/>
                </div>
                <div>
                    <label htmlFor="inverter">
                        <span>Inverter</span>
                    </label>
                    <input onChange={(e) => setFilterChoice(e.target.value)} type="radio" id='inverter' name='grid-filter' value={"inverter"}/>
                </div>
                <div>
                    <label htmlFor="plc">
                        <span>PLC</span>
                    </label>
                    <input onChange={(e) => setFilterChoice(e.target.value)} type="radio" id='plc' name='grid-filter' value={"plc"}/>
                </div>
                <div>
                    <label htmlFor="hmi">
                        <span>HMI</span>
                    </label>
                    <input onChange={(e) => setFilterChoice(e.target.value)} type="radio" id='hmi' name='grid-filter' value={"hmi"}/>
                </div>
                <div>
                    <label htmlFor="servo-drive">
                        <span>Servo Drive</span>
                    </label>
                    <input onChange={(e) => setFilterChoice(e.target.value)} type="radio" id='servo-drive' name='grid-filter' value={"servo drive"}/>
                </div>
            </div>
            <ul className={styles.filesList}>
                {   
                    filterChoice ? 
                    downloadFiles.map((file: DownloadFile, index: number) => {
                        return(
                            file.productType.toLocaleLowerCase() === filterChoice &&
                            <li key={index}>
                                <h3>
                                    {
                                        file.name
                                    }
                                    <span>
                                        {
                                            file.productType
                                        }
                                    </span>
                                </h3>
                                <div className={styles.btns}>
                                    {
                                    file.brochureFile &&
                                    <a href={file.brochureFile} download>Download Brochure</a>
                                    }
                                    {
                                    file.userManualFile &&
                                    <a href={file.userManualFile} download>Download User Manual</a>
                                    }
                                    {
                                    file.softwareFile &&
                                    <a href={file.softwareFile} download>Download Software</a>
                                    }
                                </div>
                            </li>
                        )
                    })
                    
                    :
                    downloadFiles.map((file: DownloadFile, index: number) => {
                        return(
                            <li key={index}>
                                <h3>
                                    {
                                        file.name
                                    }
                                    <span>
                                        {
                                            file.productType
                                        }
                                    </span>
                                </h3>
                                <div className={styles.btns}>
                                    {
                                    file.brochureFile &&
                                    <a href={file.brochureFile} download>Download Brochure</a>
                                    }
                                    {
                                    file.userManualFile &&
                                    <a href={file.userManualFile} download>Download User Manual</a>
                                    }
                                    {
                                    file.softwareFile &&
                                    <a href={file.softwareFile} download>Download Software</a>
                                    }
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </section>
  )
}

export default DownloadsPage