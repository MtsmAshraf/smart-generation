import { StaticImageData } from "next/image"

import image1 from "../../../../../../../../public/assets/imgs/Products/inverters/vfd-accessories/EX-CA13/imgi_19_bd4149e3f3d7bef2ebf2c0adc70ed944_thumb-removebg-preview.png"
import image2 from "../../../../../../../../public/assets/imgs/Products/inverters/vfd-accessories/EX-CA06/imgi_20_110fbbbf58b7d6def23b860fd58da2ba_thumb-removebg-preview.png"
import image3 from "../../../../../../../../public/assets/imgs/Products/inverters/vfd-accessories/EX-CA04/imgi_21_95797f2281d8a1715fd39be22add9d23_thumb-removebg-preview.png"
import image4 from "../../../../../../../../public/assets/imgs/Products/inverters/vfd-accessories/V9-DP01/imgi_23_5660480906b866f6e39aa18173e76d35_thumb-removebg-preview.png"
import image5 from "../../../../../../../../public/assets/imgs/Products/inverters/vfd-accessories/V9-DP02/imgi_22_a9ca7f92010936ddbfe3604587a5d82e_thumb-removebg-preview.png"
import image6 from "../../../../../../../../public/assets/imgs/Products/inverters/vfd-accessories/EX-PG01/imgi_27_c0cee34f57f4719f07364ec844d117bb_thumb-removebg-preview.png"
import image7 from "../../../../../../../../public/assets/imgs/Products/inverters/vfd-accessories/EX-PG02/imgi_28_ec3fee208ede0bbb386c5aac4c61d219_thumb-removebg-preview.png"
import image8 from "../../../../../../../../public/assets/imgs/Products/inverters/vfd-accessories/EX-PG03/imgi_29_25f16fb63396e28cf2130f28560a80a8_thumb-removebg-preview.png"
import image9 from "../../../../../../../../public/assets/imgs/Products/inverters/vfd-accessories/EX-PG04/imgi_30_5172c8e8efdb1713fcf67769fee27242_thumb-removebg-preview.png"

export type Feature = {
        heading: string | null,
        paragraph: string
}

export type VfdAccessoryType = {
    id: string,
    name: string,
    description: string,
    src: StaticImageData,
    alt: string,
    desctiptionParagraph: string,
    desctiptionUl: string[] | null,
    features: Feature[],
    catImgs: StaticImageData[],
    brochureFile?: string,
    userManualFile?: string
}

const vfdAccessories : VfdAccessoryType[] = [
    {
        id: "1",
        name: "EX-CA13 Profinet Communication Adapter Card",
        src: image1,
        alt: "EX-CA13 Profinet Communication Adapter Card",
        description: "EX-CA13 Profinet Communication Adapter Card",
        desctiptionParagraph: "The EX-CA13 Profinet Communication Adapter Card is designed to facilitate seamless integration of VFDs into Profinet networks, enabling efficient communication and control for industrial automation applications.",
        desctiptionUl: [],
        features: [
            ],
        catImgs: [],
        
        
    },
    {
        id: "2",
        name: "EX-CA06 Profibus-DP Communication Adapter Card",
        src: image2,
        alt: "EX-CA06 Profibus-DP Communication Adapter Card",
        description: "EX-CA13 Profinet Communication Adapter Card",
        desctiptionParagraph: "The EX-CA13 Profinet Communication Adapter Card is designed to facilitate seamless integration of VFDs into Profinet networks, enabling efficient communication and control for industrial automation applications.",
        desctiptionUl: [],
        features: [
            ],
        catImgs: [],
        
        
    },
    {
        id: "3",
        name: "EX-CA04 CANopen Communication Adapter Card",
        src: image3,
        alt: "EX-CA04 CANopen Communication Adapter Card",
        description: "EX-CA13 Profinet Communication Adapter Card",
        desctiptionParagraph: "The EX-CA13 Profinet Communication Adapter Card is designed to facilitate seamless integration of VFDs into Profinet networks, enabling efficient communication and control for industrial automation applications.",
        desctiptionUl: [],
        features: [
            ],
        catImgs: [],
        
        
    },
    {
        id: "4",
        name: "V9-DP02 LCD Operation Panel",
        src: image4,
        alt: "V9-DP02 LCD Operation Panel",
        description: "EX-CA13 Profinet Communication Adapter Card",
        desctiptionParagraph: "The EX-CA13 Profinet Communication Adapter Card is designed to facilitate seamless integration of VFDs into Profinet networks, enabling efficient communication and control for industrial automation applications.",
        desctiptionUl: [],
        features: [
            ],
        catImgs: [],
        
        
    },
    {
        id: "5",
        name: "V9-DP01 LED Operation Panel",
        src: image5,
        alt: "V9-DP01 LED Operation Panel",
        description: "EX-CA13 Profinet Communication Adapter Card",
        desctiptionParagraph: "The EX-CA13 Profinet Communication Adapter Card is designed to facilitate seamless integration of VFDs into Profinet networks, enabling efficient communication and control for industrial automation applications.",
        desctiptionUl: [],
        features: [
            ],
        catImgs: [],
        
        
    },
    {
        id: "6",
        name: "EX-PG01 Feedback Card",
        src: image6,
        alt: "EX-PG01 Feedback Card",
        description: "EX-CA13 Profinet Communication Adapter Card",
        desctiptionParagraph: "The EX-CA13 Profinet Communication Adapter Card is designed to facilitate seamless integration of VFDs into Profinet networks, enabling efficient communication and control for industrial automation applications.",
        desctiptionUl: [],
        features: [
            ],
        catImgs: [],
        
        
    },
    {
        id: "7",
        name: "EX-PG02 Feedback Card",
        src: image7,
        alt: "EX-PG02 Feedback Card",
        description: "EX-CA13 Profinet Communication Adapter Card",
        desctiptionParagraph: "The EX-CA13 Profinet Communication Adapter Card is designed to facilitate seamless integration of VFDs into Profinet networks, enabling efficient communication and control for industrial automation applications.",
        desctiptionUl: [],
        features: [
            ],
        catImgs: [],
        
        
    },
    {
        id: "8",
        name: "EX-PG03 Feedback Card",
        src: image8,
        alt: "EX-PG03 Feedback Card",
        description: "EX-CA13 Profinet Communication Adapter Card",
        desctiptionParagraph: "The EX-CA13 Profinet Communication Adapter Card is designed to facilitate seamless integration of VFDs into Profinet networks, enabling efficient communication and control for industrial automation applications.",
        desctiptionUl: [],
        features: [
            ],
        catImgs: [],
        
        
    },
    {
        id: "9",
        name: "EX-PG04 Feedback Card",
        src: image9,
        alt: "EX-PG04 Feedback Card",
        description: "EX-CA13 Profinet Communication Adapter Card",
        desctiptionParagraph: "The EX-CA13 Profinet Communication Adapter Card is designed to facilitate seamless integration of VFDs into Profinet networks, enabling efficient communication and control for industrial automation applications.",
        desctiptionUl: [],
        features: [
            ],
        catImgs: [],
        
        
    }
    ]

export default vfdAccessories;