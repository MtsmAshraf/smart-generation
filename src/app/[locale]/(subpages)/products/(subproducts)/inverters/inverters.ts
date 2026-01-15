import { StaticImageData } from "next/image"
import image1 from "../../../../../../../public/assets/imgs/all-products/inverters.png"
import cat1i1 from "../../../../../../../public/assets/imgs/Products/inverters/VTS/specs/CgAGbGY7JOyAd6rPAASDrOnfInY069.jpg"

import cat2i1 from "../../../../../../../public/assets/imgs/Products/inverters/VTS/specs/CgAGbGZIFS6AdUp0AAYRBS5MRqw725.jpg"
import cat3i1 from "../../../../../../../public/assets/imgs/Products/inverters/VTS/specs/CgAGbGZIFTqAP6BDAAeTYoLr-sw108.jpg"




import image2 from "../../../../../../../public/assets/imgs/Products/inverters/VTS30/VTS30.png"
import cat1i2 from "../../../../../../../public/assets/imgs/Products/inverters/VTS30/specs/CgAGbGZKtj2AMZmXAARl3vwcZXM358.jpg"
import cat2i2 from "../../../../../../../public/assets/imgs/Products/inverters/VTS30/specs/CgAGbGZHEqmAZcRtAAQoz9n_-cM819.jpg"

import image3 from "../../../../../../../public/assets/imgs/Products/inverters/V9/V9.png"
import cat1i3 from "../../../../../../../public/assets/imgs/Products/inverters/V9/specs/CgAGbGZKtzWAOzNGAAQJqhnSSbo830.jpg"
import cat2i3 from "../../../../../../../public/assets/imgs/Products/inverters/V9/specs/CgAGbGZKt2eAM73mAAiaXjpzBwo202.jpg"
import cat3i3 from "../../../../../../../public/assets/imgs/Products/inverters/V9/specs/CgAGbGY7I8-AEjTKAAthA7f7JJ0438.jpg"
import cat4i3 from "../../../../../../../public/assets/imgs/Products/inverters/V9/specs/CgAGbGY7I9GAG5JqAAeG1oe6tYc740.jpg"

import image4 from "../../../../../../../public/assets/imgs/Products/inverters/AE300/AE300.png"




export type Feature = {
        heading: string | null,
        paragraph: string
}

export type Inverter = {
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
    softwareFile?: string,
    userManualFile?: string
}

const inverters : Inverter[] = [
    {
        id: "ae300-series-universal-variable-speed-ac-drive",
        name: "AE300 Inverters Inverter",
        description: "AE300 Series Universal Variable Speed AC Drive",
        keywords: [
            "AE300-0R75G-2S",
            "AE300-1R5G-2S",
            "AE300-2R2G-2S",
            "AED300-3R7G-2S",
            "AED300-5R5G-2S",
            "AED300-7R5G-2S",
            "AED300-11G-2S",
            "AE300-0R75G/1R5L-4",
            "AE300-1R5G/2R2L-4",
            "AE300-2R2G/3R7L-4",
            "AE300-3R7G/5R5L-4",
            "AE300-5R5G/7R5L-4",
            "AE300-7R5G/11L-4",
            "AE300-11G/15L-4",
            "AE300-15G/18L-4",
            "AE300-18G/22L-4",
            "AE300-22G/37L-4",
            "AE300-30G/37L-4",
            "AE300-37G/45L-4",
        ],
        href: "/ae300",
        src: image4,
        alt: "AE300 Inverters Image",
        desctiptionParagraph: `The AE300 series Variable Frequency Drive adopts high
            performance vector control technology, which has excellent control
            performance such as large torque at low frequency, high stable
            speed accuracy, and strong overload capacity; and it has the
            advantages of compact structure, easy installation, high reliability,
            etc., suitable for driving AC induction and PM motors in different
            applications, especially suitable for applications with high economic,
            limited installation space, such as assembly lines, textile printing
            and dyeing machinery, packaging machinery, woodworking
            machinery, etc`,
        desctiptionUl: [],
        features: [
            {
                heading: null,
                paragraph: "TO BE DETERMINED",
            },
            {
                heading: null,
                paragraph: "TO BE DETERMINED",
            },
            {
                heading: null,
                paragraph: "TO BE DETERMINED",
            },
            {
                heading: null,
                paragraph: "TO BE DETERMINED",
            }
        ],
        catImgs: [],
        userManualFile: "/files/AE300&AF300 VFD User Manual 20251110.pdf",
    },
    {
        id: "vts-400-series-universal-variable-speed-ac-drive",
        name: "VTS 400 Inverters Inverter",
        description: "VTS 400 Series Universal Variable Speed AC Drive",
        keywords: [],
        href: "/vts",
        src: image1,
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
        catImgs: [cat1i1, cat2i1, cat3i1],
        userManualFile: "/files/User Manual VTS -EN.pdf",
        brochureFile: "/files/Brochure VTS series book style Inverter Catalog.pdf"
    },
    {
        id: "vts30-series-frequency-converter",
        name: "VTS30 Inverters",
        description: "VTS30 Series frequency converter",
        keywords: [],
        href: "/vts30",
        src: image2,
        alt: "VTS30 Inverters Image",
        desctiptionParagraph: "The VTS30 series is a book style frequency converter launched by Blue Ocean Huateng, compatible with synchronous and asynchronous motor control; Rich communication interfaces can be selected, supporting Chinese/English LCD operation panels, Chinese/English LCD operation panels with potentiometers, LED operation panels. It has the characteristics of ease of use, scalability, small size, light weight, and complete protection functions, better meeting the application needs of various industries.",
        desctiptionUl: ["Compact structure", "Multiple operation panels available", "Support multiple control methods", "Customizable"],
        features: [
            {
                heading: "Compact structure",
                paragraph: "Super strong load capacity, the frequency converter can operate stably without tripping under any acceleration and deceleration time and any impact load conditions.",
            },
            {
                heading: "Support multiple control methods",
                paragraph: "Supports V/F control, asynchronous current type vector control, asynchronous voltage type vector control, and synchronous open-loop control.",
            },
            {
                heading: "Customizable",
                paragraph: "355kW~500kW is a cabinet type frequency converter, which can customize the incoming and outgoing methods according to customer and on-site needs."
            }
        ],
        catImgs: [cat1i2, cat2i2],
        userManualFile: "/files/User Manual VTS -EN.pdf",
        brochureFile: "/files/Brochure VTS series book style Inverter Catalog.pdf"
    },
    {
        id: "v9-series-high-performance-universal-variable-speed-ac-drive",
        name: "V9 Inverters",
        description: "V9 Series High Performance Universal Speed AC Drive",
        keywords: [
            "V9-H-2T0.75G-14",
            "V9-H-2T1.5G-14",
            "V9-H-2T2.2G-14",
            "V9-H-2T3.7G-14",
            "V9-H-2T5.5G-14",
            "V9-H-2T7.5G-14",
            "V9-H-4T0.75G/1.5L-14",
            "V9-H-4T1.5G/2.2L-14",
            "V9-H-4T2.2G/3.7L-14",
            "V9-H-4T3.7G/5.5L-14",
            "V9-H-4T5.5G/7.5L-14",
            "V9-H-4T7.5G/11L-14",
            "V9-H-4T11G/15L",
            "V9-H-4T15G/18.5L",
            "V9-H-4T18.5G/22L",
            "V9-H-4T22G/30L-06-64",
            "V9-H-4T30G/37L-06-64",
            "V9-H-4T37G/45L-06-64",
            "V9-H-4T45G/55L-06-64",
            "V9-H-4T55G/75L-06-64",
            "V9-H-4T75G/90L-06-64",
            "V9-H-4T90G/110L-06-64",
            "V9-H-4T110G/132L-06-64",
            "V9-H-4T132G/160L",
            "V9-H-4T160G/185L",
            "V9-H-4T185G/200L",
            "V9-H-4T250G/280L",
            "V9-H-4T315G/355L",
            "V9-H-4T450G/500L",
        ],
        href: "/v9",
        src: image3,
        alt: "VTS Inverters Image",
        desctiptionParagraph: "As the AC Drive manufacturer in china, V&T has rich experience in electric drive fields. V&T V9−H Series General Purpose Inverter is a high-performance vector control and torque controlled frequency drive. Vector control technology and torque control technology are employed. It can better meet the needs of various transmission applications.Voltage range covers 200V, 400V, 690V, and 1140V. The product power range covers 0.4kW to 3MW.",
        desctiptionUl: ["Advanced high-performance motor control algorithms", "Supporting multiple types of motors", "A complete product range", "Can provide various encoder interface cards", "Multiple communication cards available"],
        features: [
            {
                heading: null,
                paragraph: "Fast and accurate motor parameter self-learning, suitable for a variety of motors: synchronous/asynchronous/reluctance/high-speed/torque motor, V/F vector encoder closed loop integrated.",
            },
            {
                heading: null,
                paragraph: "Asynchronous and non-inductive V/F control, 200% torque output at 0.25Hz in electric state, 200% torque output at 1Hz in power generation state.",
            },
            {
                heading: null,
                paragraph: "Good voltage and current control, high speed, high frequency, deep field weakening, wave-by-wave current limiting, multiple protections.",
            },
            {
                heading: null,
                paragraph: "Modular compact structure design, high power density；Support multiple encoders and multiple high-speed communication protocols.",
            },
            {
                heading: null,
                paragraph: "Integrated drive and control, expandable PLC and motion control card；Multiple language keyboard, friendly interface, reliable and easy to use."
            }
        ],
        catImgs: [cat1i3, cat2i3, cat3i3, cat4i3],
        userManualFile: "/files/V9-user-manual.pdf",
        softwareFile: "/files/VTS_V9_Monitor20230531_EN_setup.rar",
        brochureFile: "/files/Brochure V&T V9 Product Catalog High performance Inverter 220V 380V 690V.pdf",
    }
]

export default inverters;