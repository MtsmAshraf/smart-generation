import React from 'react'
import vfdAccessories,{ Feature, SpecMatrixTable, SpecSection, TableRow, VfdAccessoryType }  from '../vfdAccessories'
import Loader from '@/components/loader/loader'
import styles from "./vfd-accessories.module.css"
import Image, { StaticImageData } from 'next/image'



type Props = {
    params: {
        vfdAccessoryId: string
    }
}
const VfdAccessory = ({ params }: Props) => {
  const vfdAccessory: VfdAccessoryType | any = vfdAccessories.find((ele) => ele.id === params.vfdAccessoryId)

  return (
    <section className={styles.vfdAccessoryId}>
      <Loader></Loader>
      <div className={styles.description}>
          <div className="container">
            <div className={styles.slider}>
              <Image src={vfdAccessory.src} alt={vfdAccessory.alt}></Image>
            </div>
            <div className={styles.text}>
              <h2>{vfdAccessory.name}</h2>
              <p>{vfdAccessory.desctiptionParagraph}</p>
              {
                (vfdAccessory.userManualFile  || vfdAccessory.brochureFile) &&
                <div className={styles.downloadBtns}>
                  <h2>Download</h2>
                  <div className={styles.btns}>
                    {
                      vfdAccessory.brochureFile &&
                      <a href={vfdAccessory.brochureFile} download>Download Brochure</a>
                    }
                    {
                      vfdAccessory.userManualFile &&
                      <a href={vfdAccessory.userManualFile} download>Download User Manual</a>
                    }
                  </div>
                </div>
              }
              <ul>
                {
                  vfdAccessory.desctiptionUl.map((ele: string) => {
                    return(
                      <li key={ele}>{ele}</li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
      </div>
      
      {vfdAccessory.specs?.map((section: SpecSection, i: number) => (
        <div key={i} className="container">
          <div className={styles.specSection}>
            {section.title && (
              <h3 className={styles.specTitle}>{section.title}</h3>
            )}
            <table className={styles.specTable}>
              <tbody>
                {section.items.map((item, idx) => (
                  <tr key={idx} className={styles.specRow}>
                    <td className={styles.specLabel}>{item.label}</td>
                    <td className={styles.specValue}>{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
      {
        vfdAccessory.features.length > 0 &&
      <div className={styles.features}>
          <div className="container">
            <h2>PRODUCT FEATURES AND ADVANTAGES</h2>
            <div className={styles.featuresDetails}>
              <ul>
                {
                  vfdAccessory.features.map((ele: Feature) => {
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
                <Image src={vfdAccessory.src} alt={vfdAccessory.alt}></Image>
              </div>
            </div>
          </div>
      </div>
      }
      
      {vfdAccessory.specTables && (
        vfdAccessory.specTables.map((table: SpecMatrixTable, index: number) => {
          return(
            <div key={index}>
              <hr />
              <div className="container">
                <h3>{table.heading}</h3>
                <table className={styles.matrixTable}>
                  <thead>
                    <tr>
                      {table.headers.map((header: string, i: number) => (
                        <th key={i} className={styles.matrixHeader}>
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {table.rows.map((row: TableRow, rIdx: number) => (
                      <tr key={rIdx}>
                        {row.cells.map((cell, cIdx) => (
                          <td
                            key={cIdx}
                            rowSpan={cell.rowSpan}
                            colSpan={cell.colSpan}
                            className={styles.matrixCell}
                          >
                            {cell.content}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )
        })
      )}

      {
        vfdAccessory.catImgs.length > 0 &&
        <div className={styles.specs}>
          <div className="container">
            <h2>
              Specification Parameters
            </h2>
            <div className={styles.specsImgs}>
              {
                vfdAccessory.catImgs.map((img: StaticImageData, index: number) => {
                  return(
                    <div key={index} className={styles.specsImg}>
                      <Image src={img} alt={`${vfdAccessory.description} Specification Parameters Image`}></Image>
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

export default VfdAccessory