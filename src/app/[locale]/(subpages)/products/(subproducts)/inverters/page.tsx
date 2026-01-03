import React from 'react'
import inverters from "./inverters"
import Image from 'next/image'
import Loader from '@/components/loader/loader'
import { Link } from '@/i18n/routing'
import vfdAccessoriesImg from "../../../../../../../public/assets/imgs/Products/inverters/vfd-accessories/EX-CA13/imgi_19_bd4149e3f3d7bef2ebf2c0adc70ed944_thumb-removebg-preview.png"


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
        <br />
        <hr />
        <br />
        <ul>
          <li>
            <Link href={"/products/inverters/vfd-accessories"}>
              <Image src={vfdAccessoriesImg} alt="VFD Accessories"></Image>
              <h2>
                VFD Accessories           
              </h2>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Inverters