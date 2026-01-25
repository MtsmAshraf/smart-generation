import { StaticImageData } from "next/image"
import image1 from "../../../../../public/assets/imgs/all-products/inverters.png"
import image2 from "../../../../../public/assets/imgs/all-products/PLCs.png"
import image3 from "../../../../../public/assets/imgs/all-products/HMIs.png"
import image4 from "../../../../../public/assets/imgs/all-products/Servoes.png"
import image5 from "../../../../../public/assets/imgs/all-products/special-purpose.png"
import image6 from "../../../../../public/assets/imgs/all-products/vdf-accessories.png"

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
        name: "Inverters",
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
    },
    {
        id: "5",
        name: "Special Purpose AC Drive",
        description: "",
        href: "/inverters/special-purpose",
        src: image5,
        alt: "V9 AC Drive Image"
    },
    {
        id: "6",
        name: "VFD Accessories",
        description: "",
        href: "/inverters/vfd-accessories",
        src: image6,
        alt: "VFD Accessories Image"
    }
]

export default products;