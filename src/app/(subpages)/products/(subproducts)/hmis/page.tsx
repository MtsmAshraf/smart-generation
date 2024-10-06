import React from 'react'
import hmis from "./hmi" 
import Link from 'next/link'
import Image from 'next/image'
const Hmi = () => {
  return (
    <div>
        <div className="container">
            <h3>
                HMI
            </h3>
            <div>
            {
                hmis.map((hmi) => {
                return(
                    <div key={hmi.id} id='grid-cards'>
                        <Link href={`/products/hmis/${hmi.id}`}>
                        <Image src={hmi.src} alt={hmi.alt} loading='lazy'></Image>
                        </Link>
                        <div>
                        <p>
                            <Link href={`/products/hmis/${hmi.id}`}>
                            {hmi.description}
                            </Link>
                        </p>
                        <span>
                            <Link href={`/products/hmis/${hmi.id}`}>
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