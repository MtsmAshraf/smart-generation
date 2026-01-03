import React from 'react'
import vfdAccessories, { VfdAccessoryType } from './vfdAccessories'
import { Link } from '@/i18n/routing'
import Loader from '@/components/loader/loader'
import Image from 'next/image'

const VfdAccessories = () => {
  return (
    
    <div>
        <Loader></Loader>
        <div className="container">
            <h3>
            VFD Accessories
            </h3>
            <div>
            {
                vfdAccessories.map((vfdAccessory: VfdAccessoryType) => {
                return(
                    <div key={vfdAccessory.id} id='grid-cards'>
                        <Link href={`/products/inverters/vfd-accessories/${vfdAccessory.id}`}>
                        <Image src={vfdAccessory.src} alt={vfdAccessory.alt} loading='lazy'></Image>
                        </Link>
                        <div>
                        <p>
                            <Link href={`/products/inverters/vfd-accessories/${vfdAccessory.id}`}>
                            {vfdAccessory.description}
                            </Link>
                        </p>
                        <span>
                            <Link href={`/products/inverters/vfd-accessories/${vfdAccessory.id}`}>
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

export default VfdAccessories