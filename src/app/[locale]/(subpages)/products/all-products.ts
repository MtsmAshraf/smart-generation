import { StaticImageData } from "next/image"
import image1 from "../../../../assets/imgs/all-products/inverters.png"
import image2 from "../../../../assets/imgs/all-products/PLCs.png"
import image3 from "../../../../assets/imgs/all-products/HMIs.png"
import image4 from "../../../../assets/imgs/all-products/Servoes.png"

export type Product = {
    id: string,
    name: string,
    description: string,
    href: string,
    src: StaticImageData,
    alt: string
}

const products : Product[] = [
    {
        id: "1",
        name: "Inverter",
        description: "Industrial automation product integrator - comprehensively meeting production needs",
        href: "/inverters",
        src: image1,
        alt: "Inverters Image"
    },
    {
        id: "2",
        name: "PLC",
        description: "Safty, stability and reliability",
        href: "/plcs",
        src: image2,
        alt: "PLCs Image"
    },
    {
        id: "3",
        name: "HMI",
        description: "High definition, high brightness, and full view display",
        href: "/hmis",
        src: image3,
        alt: "HMIs Image"
    },
    {
        id: "4",
        name: "Servo Drive",
        description: "Efficiency, stability and intelligence",
        href: "/servo-drives",
        src: image4,
        alt: "Servoes Image"
    }
]

export default products;