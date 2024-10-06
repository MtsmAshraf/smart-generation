import React from 'react'
import inverters from "./inverters"
import Link from 'next/link'
import Image from 'next/image'
const Inverters = () => {
  return (
    <div>
      <div className="container">
        <h3>
          Single Drive
        </h3>
        <div>
          {
            inverters.map((inverter) => {
              return(
                <div key={inverter.id} id='grid-cards'>
                    <Link href={`/products/inverters/${inverter.id}`}>
                      <Image src={inverter.src} alt={inverter.alt} loading='lazy'></Image>
                    </Link>
                    <div>
                      <p>
                        <Link href={`/products/inverters/${inverter.id}`}>
                          {inverter.description}
                        </Link>
                      </p>
                      <span>
                        <Link href={`/products/inverters/${inverter.id}`}>
                          More
                        </Link>
                      </span>
                    </div>
                </div>

              )
            })
          }      
        </div>
      </div>
    </div>
  )
}

export default Inverters