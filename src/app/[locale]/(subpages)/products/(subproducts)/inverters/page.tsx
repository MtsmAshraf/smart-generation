import React from 'react'
import inverters from "./inverters"
import Link from 'next/link'
import Image from 'next/image'
import Loader from '@/components/loader/loader'
const Inverters = ({
  params: {locale}
} : {
  params: {locale: string}
}) => {
  return (
    <div>
      <Loader></Loader>
      <div className="container">
        <h3>
          Single Drive
        </h3>
        <div>
          {
            inverters.map((inverter) => {
              return(
                <div key={inverter.id} id='grid-cards'>
                    <Link href={`/${locale}/products/inverters/${inverter.id}`}>
                      <Image src={inverter.src} alt={inverter.alt} loading='lazy'></Image>
                    </Link>
                    <div>
                      <p>
                        <Link href={`/${locale}/products/inverters/${inverter.id}`}>
                          {inverter.description}
                        </Link>
                      </p>
                      <span>
                        <Link href={`/${locale}/products/inverters/${inverter.id}`}>
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