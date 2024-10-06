import { StaticImageData } from "next/image"
import image1 from "../../../../../assets/imgs/Products/inverters/VTS/VTS.png"
import sliderImage1i1 from "../../../../../assets/imgs/Products/inverters/VTS/slider/2.png"
import sliderImage2i1 from "../../../../../assets/imgs/Products/inverters/VTS/slider/CgAGbGWLpR-AGNuVAAL1OwoQCZM855.png"
import sliderImage3i1 from "../../../../../assets/imgs/Products/inverters/VTS/slider/CgAGbGWLpR2AEyz0AAI1eKMa73g854.png"
import sliderImage4i1 from "../../../../../assets/imgs/Products/inverters/VTS/slider/CgAGbGWLpR6APdlIAAMJcpTBFLM917.png"
import sliderImage5i1 from "../../../../../assets/imgs/Products/inverters/VTS/slider/CgAGbGWLpR6AQRLFAAKtvbnxX_0680.png"
import sliderImage6i1 from "../../../../../assets/imgs/Products/inverters/VTS/slider/CgAGbGWvRNaAG2YPAAKEqJ1OmX8381.png"
import cat1i1 from "../../../../../assets/imgs/Products/inverters/VTS/specs/CgAGbGY7JOyAd6rPAASDrOnfInY069.jpg"
import cat2i1 from "../../../../../assets/imgs/Products/inverters/VTS/specs/CgAGbGZIFS6AdUp0AAYRBS5MRqw725.jpg"
import cat3i1 from "../../../../../assets/imgs/Products/inverters/VTS/specs/CgAGbGZIFTqAP6BDAAeTYoLr-sw108.jpg"




import image2 from "../../../../../assets/imgs/Products/inverters/VTS30/VTS30.png"
import sliderImage1i2 from "../../../../../assets/imgs/Products/inverters/VTS30/slider/CgAGbGWD9dKAe41oAAJZAcWcHyM878.png"
import sliderImage2i2 from "../../../../../assets/imgs/Products/inverters/VTS30/slider/CgAGbGWD9diAIAHLAAEL4An4gIk638.png"
import sliderImage3i2 from "../../../../../assets/imgs/Products/inverters/VTS30/slider/CgAGbGWD9dmAQMF2AAFBw6446dU969.png"
import sliderImage4i2 from "../../../../../assets/imgs/Products/inverters/VTS30/slider/CgAGbGWD9dmAcBRsAAF-J-HtcVI460.png"
import sliderImage5i2 from "../../../../../assets/imgs/Products/inverters/VTS30/slider/CgAGbGWD9dmAdvsZAAFoMwjdn68594.png"
import sliderImage6i2 from "../../../../../assets/imgs/Products/inverters/VTS30/slider/CgAGbGWD9dqAZW-OAAIUHppfZ6o746.png"
import sliderImage7i2 from "../../../../../assets/imgs/Products/inverters/VTS30/slider/CgAGbGWD9dqAdpIsAAFQuzoKiY0959.png"
import sliderImage8i2 from "../../../../../assets/imgs/Products/inverters/VTS30/slider/CgAGbGWD9eOAI_FDAAJZAcWcHyM223.png"
import sliderImage9i2 from "../../../../../assets/imgs/Products/inverters/VTS30/slider/CgAGbGWvReCAQkvcAAJLgA_FCQE575.png"
import cat1i2 from "../../../../../assets/imgs/Products/inverters/VTS30/specs/CgAGbGZKtj2AMZmXAARl3vwcZXM358.jpg"
import cat2i2 from "../../../../../assets/imgs/Products/inverters/VTS30/specs/CgAGbGZHEqmAZcRtAAQoz9n_-cM819.jpg"

import image3 from "../../../../../assets/imgs/Products/inverters/V9/V9.png"
import sliderImage1i3 from "../../../../../assets/imgs/Products/inverters/V9/slider/CgAGbGWD9T6ACKBCAARk9weSDpM419.png"
import sliderImage2i3 from "../../../../../assets/imgs/Products/inverters/V9/slider/CgAGbGWD9UiATjIgAAIc2C4R_Rk897.png"
import sliderImage3i3 from "../../../../../assets/imgs/Products/inverters/V9/slider/CgAGbGWD9UmAMkOQAAILap6NjAs618.png"
import sliderImage4i3 from "../../../../../assets/imgs/Products/inverters/V9/slider/CgAGbGWD9UqABNElAAIwytR5TKo187.png"
import sliderImage5i3 from "../../../../../assets/imgs/Products/inverters/V9/slider/CgAGbGWS4I-AZLI2AANkoAzzBqg537.png"
import sliderImage6i3 from "../../../../../assets/imgs/Products/inverters/V9/slider/CgAGbGWS4IaADMxzAARU0xNc9Zc199.png"
import sliderImage7i3 from "../../../../../assets/imgs/Products/inverters/V9/slider/CgAGbGWS4IuAZpwwAARBgSUSezg516.png"
import cat1i3 from "../../../../../assets/imgs/Products/inverters/V9/specs/CgAGbGZKtzWAOzNGAAQJqhnSSbo830.jpg"
import cat2i3 from "../../../../../assets/imgs/Products/inverters/V9/specs/CgAGbGZKt2eAM73mAAiaXjpzBwo202.jpg"
import cat3i3 from "../../../../../assets/imgs/Products/inverters/V9/specs/CgAGbGY7I8-AEjTKAAthA7f7JJ0438.jpg"
import cat4i3 from "../../../../../assets/imgs/Products/inverters/V9/specs/CgAGbGY7I9GAG5JqAAeG1oe6tYc740.jpg"




export type Feature = {
        heading: string | null,
        paragraph: string
}

export type Inverter = {
    id: string,
    name: string,
    description: string,
    href: string,
    src: StaticImageData,
    alt: string,
    desctiptionParagraph: string,
    desctiptionUl: string[],
    features: Feature[],
    catImgs: StaticImageData[],
}

const inverters : Inverter[] = [
    {
        id: "1",
        name: "VTS Inverters Inverter",
        description: "VTS Series Universal Variable Speed AC Drive",
        href: "/vts",
        src: image1,
        alt: "VTS Inverters Image",
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
        catImgs: [cat1i1, cat2i1, cat3i1]
    },
    {
        id: "2",
        name: "VTS30 Inverters",
        description: "VTS30 Series frequency converter",
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
        catImgs: [cat1i2, cat2i2]
    },
    {
        id: "3",
        name: "V9 Inverters",
        description: "V9 Series High Performance Universal Speed AC Drive",
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
        catImgs: [cat1i3, cat2i3, cat3i3, cat4i3]
    }
]

export default inverters;