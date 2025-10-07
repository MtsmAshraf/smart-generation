import { StaticImageData } from "next/image"
import image1 from "../../../../../public/assets/imgs/cooling.svg"
import image2 from "../../../../../public/assets/imgs/hose-hosepipe.svg"
import image3 from "../../../../../public/assets/imgs/fire-fighting.svg"
import image4 from "../../../../../public/assets/imgs/air-compressor.svg"
import image5 from "../../../../../public/assets/imgs/air-pump-pump.svg"
import image6 from "../../../../../public/assets/imgs/plumbing-pipe.svg"
import image7 from "../../../../../public/assets/imgs/cranes-cargo.svg"
import image8 from "../../../../../public/assets/imgs/electrical-panel-danger.svg"
import image9 from "../../../../../public/assets/imgs/production-industrial.svg"
import image10 from "../../../../../public/assets/imgs/supplies.svg"
import image11   from "../../../../../public/assets/imgs/consultion.svg"
import image12   from "../../../../../public/assets/imgs/elec-current.svg"

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
        src: image2,
    },
    {
        id: "3",
        src: image3,
    },
    {
        id: "4",
        src: image4,
    },
    {
        id: "5",
        src: image5,
    },
    {
        id: "6",
        src: image6,
    },
    {
        id: "7",
        src: image7,
    },
    {
        id: "8",
        src: image8,
    },
    {
        id: "9",
        src: image9,
    },
    {
        id: "10",
        src: image10,
    },
    {
        id: "11",
        src: image11,
    },
    {
        id: "12",
        src: image12,
    }
]

export default services;