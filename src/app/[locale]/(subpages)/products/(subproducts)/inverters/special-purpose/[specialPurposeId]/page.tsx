import React from 'react'
import Loader from '@/components/loader/loader'
import styles from "./special-purpose.module.css"
import Image, { StaticImageData } from 'next/image'
import specialPurposeDrives, { Feature, SpecialPurposeType } from '../specialPurpose'



type Props = {
    params: {
        specialPurposeId: string
    }
}
const SpecialPurposeDrive = ({ params }: Props) => {
  const specialPurposeDrive: SpecialPurposeType | any = specialPurposeDrives.find((ele) => ele.id === params.specialPurposeId)

  return (
    <section className={styles.specialPurposeId}>
      <Loader></Loader>
      <div className={styles.description}>
          <div className="container">
            <div className={styles.slider}>
              <Image src={specialPurposeDrive.innerImgSrc} alt={specialPurposeDrive.alt}></Image>
            </div>
            <div className={styles.text}>
              <h2>{specialPurposeDrive.name}</h2>
              <p>{specialPurposeDrive.desctiptionParagraph}</p>
              <ul>
                {
                  specialPurposeDrive.desctiptionUl.map((ele: string) => {
                    return(
                      <li key={ele}>{ele}</li>
                    )
                  })
                }
              </ul>
              {
                (specialPurposeDrive.userManualFile  || specialPurposeDrive.brochureFile) &&
                <div className={styles.downloadBtns}>
                  <h2>Download</h2>
                  <div className={styles.btns}>
                    {
                      specialPurposeDrive.brochureFile &&
                      <a href={specialPurposeDrive.brochureFile} download>Download Brochure</a>
                    }
                    {
                      specialPurposeDrive.userManualFile &&
                      <a href={specialPurposeDrive.userManualFile} download>Download User Manual</a>
                    }
                  </div>
                </div>
              }
            </div>
          </div>
      </div>
    </section>
  )
}

export default SpecialPurposeDrive