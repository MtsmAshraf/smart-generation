import Image from 'next/image'
import React from 'react'
import servoDrives from './servo-drives'
import Loader from '@/components/loader/loader'
import { Link } from '@/i18n/routing'
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: "Servo Drives",
    description: "Smart Generation EG Servo Drives and company location, contact information and work hours"
}

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