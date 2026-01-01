import React from 'react'
import vfdAccessories, { VfdAccessoryType } from './vfdAccessories'
import { Link } from '@/i18n/routing'

const VfdAccessories = () => {
  return (
    <div>
        <h1>
            VfdAccessories
        </h1>
        <ul>
            {
                vfdAccessories.map((vfdAccessory: VfdAccessoryType, index: number) => {
                    return(
                        <li key={index}>
                            <Link href={`/products/inverters/vfd-accessories/${vfdAccessory.id}`}>
                                {vfdAccessory.name}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default VfdAccessories