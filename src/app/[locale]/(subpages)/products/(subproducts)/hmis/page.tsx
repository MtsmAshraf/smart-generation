import React from 'react'
import hmis from "./hmi" 
import Link from 'next/link'
import Image from 'next/image'
import Loader from '@/components/loader/loader'
const Hmi = ({
    params: {locale}
} : {
    params: {locale: string}
}) => {
  return (
    <div>
        <Loader></Loader>
        <div className="container">
            <h3>
                HMI
            </h3>
            <div>
            {
                hmis.map((hmi) => {
                return(
                    <div key={hmi.id} id='grid-cards'>
                        <Link href={`/${locale}/products/hmis/${hmi.id}`}>
                        <Image src={hmi.src} alt={hmi.alt} loading='lazy'></Image>
                        </Link>
                        <div>
                        <p>
                            <Link href={`/${locale}/products/hmis/${hmi.id}`}>
                            {hmi.description}
                            </Link>
                        </p>
                        <span>
                            <Link href={`/${locale}/products/hmis/${hmi.id}`}>
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

export default Hmi