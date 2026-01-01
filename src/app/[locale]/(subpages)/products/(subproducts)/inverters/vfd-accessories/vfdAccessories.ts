import { StaticImageData } from "next/image"

import image3 from "../../../../../../../../public/assets/imgs/Products/inverters/V9/V9.png"

export type Feature = {
        heading: string | null,
        paragraph: string
}

export type VfdAccessoryType = {
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
    brochureFile?: string,
    userManualFile?: string
}

const vfdAccessories : VfdAccessoryType[] = [
    {
        id: "1",
        name: "VTS 22222",
        description: "VTS 400 Series Universal Variable Speed AC Drive",
        href: "/vts",
        src: image3,
        alt: "VTS 400 Inverters Image",
        desctiptionParagraph: "As the VFD manufacturer in china, V&T has rich experience in electric drive fields. Adopting brand-new vector control technology, VTS series inverter can be compatible with the control of synchronous motor, asynchronous motor and reluctance motor, as well as the encoders with multiple specification and abundant communication interface and support English liquid crystal display, five-digit digital pipe display operation panel; and with the protection functions of usability, extendability, small volume, light weight and perfection, VTS series Mini AC drive can meet the medium-high application demands.",
        desctiptionUl: ["Multifunctional", "High performance", "Small volume", "Easy to use"],
        features: [
            {
                heading: null,
                paragraph: "V&T Micro Inverter Book Compact Design，Low cost, smaller size and weight；Rich selection of communication boards.",
            },
            {
                heading: null,
                paragraph: "low speed can be open loop control, closed loop control minimum speed of 0.25 Hz 200% torque; closed loop 60000 turn, open loop 110000 rpm.",
            },
            {
                heading: null,
                paragraph: "Support multiple encoder types;Multiple language keyboard, friendly interface, reliable and easy to use.",
            },
            {
                heading: null,
                paragraph: "Compatible with the control of synchronous motors, asynchronous motors, and reluctance motors.",
            }
        ],
        catImgs: [],
        userManualFile: "/files/User Manual VTS -EN.pdf",
        brochureFile: "/files/Brochure VTS series book style Inverter Catalog.pdf"
    },{
        id: "2",
        name: "VTS 400 Inverters Inverter",
        description: "VTS 400 Series Universal Variable Speed AC Drive",
        href: "/vts",
        src: image3,
        alt: "VTS 400 Inverters Image",
        desctiptionParagraph: "As the VFD manufacturer in china, V&T has rich experience in electric drive fields. Adopting brand-new vector control technology, VTS series inverter can be compatible with the control of synchronous motor, asynchronous motor and reluctance motor, as well as the encoders with multiple specification and abundant communication interface and support English liquid crystal display, five-digit digital pipe display operation panel; and with the protection functions of usability, extendability, small volume, light weight and perfection, VTS series Mini AC drive can meet the medium-high application demands.",
        desctiptionUl: ["Multifunctional", "High performance", "Small volume", "Easy to use"],
        features: [
            {
                heading: null,
                paragraph: "V&T Micro Inverter Book Compact Design，Low cost, smaller size and weight；Rich selection of communication boards.",
            },
            {
                heading: null,
                paragraph: "low speed can be open loop control, closed loop control minimum speed of 0.25 Hz 200% torque; closed loop 60000 turn, open loop 110000 rpm.",
            },
            {
                heading: null,
                paragraph: "Support multiple encoder types;Multiple language keyboard, friendly interface, reliable and easy to use.",
            },
            {
                heading: null,
                paragraph: "Compatible with the control of synchronous motors, asynchronous motors, and reluctance motors.",
            }
        ],
        catImgs: [],
        userManualFile: "/files/User Manual VTS -EN.pdf",
        brochureFile: "/files/Brochure VTS series book style Inverter Catalog.pdf"
    },
   
]

export default vfdAccessories;