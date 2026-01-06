import React from 'react'
import { Link } from '@/i18n/routing'
import Loader from '@/components/loader/loader'
import Image from 'next/image'
import specialPurposeDrives, { SpecialPurposeType } from './specialPurpose'

const SpecialPurposePage = () => {
  return (
    
    <div>
        <Loader></Loader>
        <div className="container">
            <h3>
            Special Purpose Ac Drive  
            </h3>
            <div>
            {
                specialPurposeDrives.map((specialPurposeDrive: SpecialPurposeType) => {
                return(
                    <div key={specialPurposeDrive.id} id='grid-cards'>
                        <Link href={`/products/inverters/special-purpose/${specialPurposeDrive.id}`}>
                        <Image src={specialPurposeDrive.src} alt={specialPurposeDrive.alt} loading='lazy'></Image>
                        </Link>
                        <div>
                        <p>
                            <Link href={`/products/inverters/special-purpose/${specialPurposeDrive.id}`}>
                            {specialPurposeDrive.name}
                            </Link>
                        </p>
                        <span>
                            <Link href={`/products/inverters/special-purpose/${specialPurposeDrive.id}`}>
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

export default SpecialPurposePage