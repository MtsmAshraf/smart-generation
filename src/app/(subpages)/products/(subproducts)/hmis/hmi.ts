import { StaticImageData } from "next/image"
import image1 from "../../../../../assets/imgs/Products/HMI/CgAGbGWS3BuAGRChAAIrwXYkcas203.png"
import sliderImage1i1 from "../../../../../assets/imgs/Products/inverters/VTS/slider/2.png"
import sliderImage2i1 from "../../../../../assets/imgs/Products/inverters/VTS/slider/CgAGbGWLpR-AGNuVAAL1OwoQCZM855.png"
import sliderImage3i1 from "../../../../../assets/imgs/Products/inverters/VTS/slider/CgAGbGWLpR2AEyz0AAI1eKMa73g854.png"
import sliderImage4i1 from "../../../../../assets/imgs/Products/inverters/VTS/slider/CgAGbGWLpR6APdlIAAMJcpTBFLM917.png"
import sliderImage5i1 from "../../../../../assets/imgs/Products/inverters/VTS/slider/CgAGbGWLpR6AQRLFAAKtvbnxX_0680.png"
import sliderImage6i1 from "../../../../../assets/imgs/Products/inverters/VTS/slider/CgAGbGWvRNaAG2YPAAKEqJ1OmX8381.png"
import cat1i1 from "../../../../../assets/imgs/Products/HMI/CgAGbGY7H8aAaZNeAAHpPG-50es182.jpg"
import cat2i1 from "../../../../../assets/imgs/Products/HMI/CgAGbGY7H9OADvHhAApyUDu5J4E692.jpg"



export type Feature = {
        heading: string | null,
        paragraph: string
}

export type Hmi = {
    id: string,
    name: string,
    description: string,
    href: string,
    src: StaticImageData,
    alt: string,
    desctiptionParagraph: string,
    desctiptionUl: string[] | null,
    features: Feature[],
    catImgs: StaticImageData[],
}

const hmis : Hmi[] = [
    {
        id: "1",
        name: "VT DP-2000 series HMI",
        description: "VT DP-2000 series HMI",
        href: "/vts",
        src: image1,
        alt: "VT DP-2000 series HMI Image",
        desctiptionParagraph: "VT DP-2000 series HMI has advantages of high-definition, high-brightness, full-viewpoint display, the max. viewpoint is 170 °, with powerful computing performance, complex engineering page switching fast, but also hasmore good UI controls, human-computer interaction experience is excellent. Support U disk to update HMI firmware,screen program, recipe data, etc., when used with VC series PLC, it can penetrate to update PLC program, which isconvenient for the maintenance of field equipment.",
        desctiptionUl: null,
        features: [
            {
                heading: null,
                paragraph: "Supports multiple image formats and animation formats",
            },
            {
                heading: null,
                paragraph: "High resolution, high brightness, full viewing angle, LED back-lighting",
            },
            {
                heading: null,
                paragraph: "Plastic shell, low cost, high reliability, cost-effective.",
            },
            {
                heading: null,
                paragraph: "Isolated power supply, motherboard three-proof paint treatment",
            },
            {
                heading: null,
                paragraph: "LCD life time greater than 40,000 hours",
            }
        ],
        catImgs: [cat1i1, cat2i1]
    }
]

export default hmis;