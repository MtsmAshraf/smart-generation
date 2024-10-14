import { StaticImageData } from "next/image"
import image1 from "../../../../assets/imgs/home-bg.jpg"

export type Service = {
    id: string,
    src: StaticImageData,
}

const services : Service[] = [
    {
        id: "1",
        src: image1,
    },
    {
        id: "2",
        src: image1,
    },
    {
        id: "3",
        src: image1,
    },
    {
        id: "4",
        src: image1,
    },
    {
        id: "5",
        src: image1,
    },
    {
        id: "6",
        src: image1,
    }
]

export default services;