import Image from 'next/image'
import React from 'react'
import plcs from "./plcs"
import Loader from '@/components/loader/loader'
import Link from 'next/link'
const Plcs = ({
    params: {locale}
} : {
    params: {locale: string}
}) => {
  return (
    <div>
        <Loader></Loader>
        <div className="container">
        <h3>
            Small PLC
        </h3>
        <div>
            {
            plcs.map((plc) => {
                return(
                <div key={plc.id} id='grid-cards'>
                        <Link href={`/products/plcs/${plc.id}`}>
                        <Image src={plc.src} alt={plc.alt} loading='lazy'></Image>
                    </Link>
                    <div>
                        <p>
                        <Link href={`/products/plcs/${plc.id}`}>
                            {plc.description}
                        </Link>
                        </p>
                        <span>
                        <Link href={`/products/plcs/${plc.id}`}>
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

export default Plcs