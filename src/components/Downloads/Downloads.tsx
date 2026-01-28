"use client"
import React, { useState } from 'react'
import styles from "./downloads.module.css"
import downloadFiles, { DownloadFile } from '@/app/[locale]/(subpages)/downloads/downloads'


const Downloads = ({
    l
} : {
    l: string
}) => {
    const [filterChoice, setFilterChoice] = useState("")
    
  return (  
    <section className={l === "ar" ? styles.ar + " " + styles.downloads : styles.downloads }>
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
                                    <a href={file.brochureFile} aria-description={`Download ${file.name} Brochure`} title={`Download ${file.name} Brochure`} download>Download Brochure</a>
                                    }
                                    {
                                    file.userManualFile &&
                                    <a href={file.userManualFile} aria-description={`Download ${file.name} User Manual`} title={`Download ${file.name} User Manual`} download>Download User Manual</a>
                                    }
                                    {
                                    file.softwareFile &&
                                    <a href={file.softwareFile} aria-description={`Download ${file.name} Software`} title={`Download ${file.name} Software`} download>Download Software</a>
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

export default Downloads