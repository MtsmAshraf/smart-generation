import Image from 'next/image'
import React from 'react'
import servoDrives from './servo-drives'
import Loader from '@/components/loader/loader'
import { Link } from '@/i18n/routing'
const ServoDrives = ({
    params: {locale}
} : {
    params: {locale: string}
}) => {
  return (
    <div>
        <Loader></Loader>
        <div className="container">
            <h3>
                Servo Drives
            </h3>
            <div>
            {
                servoDrives.map((servoDrive) => {
                return(
                    <div key={servoDrive.id} id='grid-cards'>
                        <Link href={`/products/servo-drives/${servoDrive.id}`}>
                        <Image src={servoDrive.src} alt={servoDrive.alt} loading='lazy'></Image>
                        </Link>
                        <div>
                        <p>
                            <Link href={`/products/servo-drives/${servoDrive.id}`}>
                            {servoDrive.description}
                            </Link>
                        </p>
                        <span>
                            <Link href={`/products/servo-drives/${servoDrive.id}`}>
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

export default ServoDrives