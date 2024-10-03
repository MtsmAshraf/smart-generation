import { StaticImageData } from "next/image"
import image1 from "../../../../../assets/imgs/Products/inverters/VTS/VTS.png"
import image2 from "../../../../../assets/imgs/Products/inverters/VTS30/VTS30.png"
import image3 from "../../../../../assets/imgs/Products/inverters/V9/V9.png"

export type WonderImage = {
    id: string,
    name: string,
    description: string,
    href: string,
    src: StaticImageData,
    alt: string
}

const wonders : WonderImage[] = [
    {
        id: "1",
        name: "VTS Inverters Inverter",
        description: "VTS Series Universal Variable Speed AC Drive",
        href: "/vts",
        src: image1,
        alt: "VTS Inverters Image"
    },
    {
        id: "2",
        name: "VTS30 Inverters",
        description: "VTS30 Series frequency converter",
        href: "/vts30",
        src: image2,
        alt: "VTS30 Inverters Image"
    },
    {
        id: "3",
        name: "V9 Inverters",
        description: "V9 Series High Performance Universal Speed AC Drive",
        href: "/v9",
        src: image3,
        alt: "VTS Inverters Image"
    }
]

export default wonders;