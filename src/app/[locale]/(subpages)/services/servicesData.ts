import { StaticImageData } from "next/image"
import image1 from "../../../../../public/assets/imgs/HVAC.jpg"
import image2 from "../../../../../public/assets/imgs/firefighting.jpg"
import image4 from "../../../../../public/assets/imgs/compressors.png"
import image5 from "../../../../../public/assets/imgs/plumbing-pipe.png"
import image7 from "../../../../../public/assets/imgs/metal-structure.jpg"
import image8 from "../../../../../public/assets/imgs/panel.webp"
import image9 from "../../../../../public/assets/imgs/production-lines.jpg"
import image10 from "../../../../../public/assets/imgs/supplies.jpg"
import image11 from "../../../../../public/assets/imgs/consult.jpg"
import image12 from "../../../../../public/assets/imgs/light-current.jpg"

export type Service = {
    id: string,
    src: StaticImageData,
}

const services : Service[] = [
    {
        id: "0",
        src: image1,
    },
    {
        id: "1",
        src: image2,
    },
    {
        id: "3",
        src: image4,
    },
    {
        id: "4",
        src: image5,
    },
    {
        id: "6",
        src: image7,
    },
    {
        id: "7",
        src: image8,
    },
    {
        id: "8",
        src: image9,
    },
    {
        id: "9",
        src: image10,
    },
    {
        id: "10",
        src: image11,
    },
    {
        id: "11",
        src: image12,
    }
]

export default services;