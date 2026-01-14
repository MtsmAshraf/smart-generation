import { StaticImageData } from "next/image"
import image1 from "../../../../../../../public/assets/imgs/all-products/HMIs.png"
import cat1i1 from "../../../../../../../public/assets/imgs/Products/HMI/CgAGbGY7H8aAaZNeAAHpPG-50es182.jpg"
import cat2i1 from "../../../../../../../public/assets/imgs/Products/HMI/CgAGbGY7H9OADvHhAApyUDu5J4E692.jpg"



export type Feature = {
        heading: string | null,
        paragraph: string
}

export type Hmi = {
    id: string,
    name: string,
    description: string,
    keywords?: string[],
    href: string,
    src: StaticImageData,
    alt: string,
    desctiptionParagraph: string,
    desctiptionUl: string[] | null,
    features: Feature[],
    catImgs: StaticImageData[],
    brochureFile?: string,
    userManualFile?: string
}

const hmis : Hmi[] = [
    {
        id: "vt-dp-2000-series-hmi",
        name: "VT DP-2000 series HMI",
        description: "VT DP-2000 series HMI",
        keywords: [
            "DP-2043AA",
            "DP-2070AA",
            "DP-2070EA",
            "DP-2101AA",
        ],
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
        catImgs: [cat1i1, cat2i1],
        userManualFile: "/files/DP STUDIO USER MANUAL V1.0.pdf",
        brochureFile: "/files/Brochure V&T PLC&HMI&Multi-channel Intelligent Thermostat1121.pdf"
    }
]

export default hmis;