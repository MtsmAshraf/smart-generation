import React from 'react'
import inverters from "./inverters"
import Image from 'next/image'
import Loader from '@/components/loader/loader'
import { Link } from '@/i18n/routing'
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
          Inverters
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