import { StaticImageData } from "next/image"

import image1 from "../../../../../../../public/assets/imgs/Products/PLC/VC10V/V10V.png"
import sliderImage1i1 from "../../../../../../../public/assets/imgs/Products/inverters/VTS/slider/2.png"
import sliderImage2i1 from "../../../../../../../public/assets/imgs/Products/inverters/VTS/slider/CgAGbGWLpR-AGNuVAAL1OwoQCZM855.png"
import sliderImage3i1 from "../../../../../../../public/assets/imgs/Products/inverters/VTS/slider/CgAGbGWLpR2AEyz0AAI1eKMa73g854.png"
import sliderImage4i1 from "../../../../../../../public/assets/imgs/Products/inverters/VTS/slider/CgAGbGWLpR6APdlIAAMJcpTBFLM917.png"
import sliderImage5i1 from "../../../../../../../public/assets/imgs/Products/inverters/VTS/slider/CgAGbGWLpR6AQRLFAAKtvbnxX_0680.png"
import sliderImage6i1 from "../../../../../../../public/assets/imgs/Products/inverters/VTS/slider/CgAGbGWvRNaAG2YPAAKEqJ1OmX8381.png"
import cat1i1 from "../../../../../../../public/assets/imgs/Products/PLC/VC10V/specs/CgAGbGY7HheAIE_1AAOYVwFFQCM980.jpg"
import cat2i1 from "../../../../../../../public/assets/imgs/Products/PLC/VC10V/specs/CgAGbGY7HiOAIzDeAAr0A9eWHFw939.jpg"
import cat3i1 from "../../../../../../../public/assets/imgs/Products/PLC/VC10V/specs/CgAGbGY7Hi6AUIXXAApGAW7ERZA904.jpg"




import image2 from "../../../../../../../public/assets/imgs/Products/PLC/VC20/VC20.png"
import sliderImage1i2 from "../../../../../../../public/assets/imgs/Products/inverters/VTS30/slider/CgAGbGWD9dKAe41oAAJZAcWcHyM878.png"
import sliderImage2i2 from "../../../../../../../public/assets/imgs/Products/inverters/VTS30/slider/CgAGbGWD9diAIAHLAAEL4An4gIk638.png"
import sliderImage3i2 from "../../../../../../../public/assets/imgs/Products/inverters/VTS30/slider/CgAGbGWD9dmAQMF2AAFBw6446dU969.png"
import sliderImage4i2 from "../../../../../../../public/assets/imgs/Products/inverters/VTS30/slider/CgAGbGWD9dmAcBRsAAF-J-HtcVI460.png"
import sliderImage5i2 from "../../../../../../../public/assets/imgs/Products/inverters/VTS30/slider/CgAGbGWD9dmAdvsZAAFoMwjdn68594.png"
import sliderImage6i2 from "../../../../../../../public/assets/imgs/Products/inverters/VTS30/slider/CgAGbGWD9dqAZW-OAAIUHppfZ6o746.png"
import sliderImage7i2 from "../../../../../../../public/assets/imgs/Products/inverters/VTS30/slider/CgAGbGWD9dqAdpIsAAFQuzoKiY0959.png"
import sliderImage8i2 from "../../../../../../../public/assets/imgs/Products/inverters/VTS30/slider/CgAGbGWD9eOAI_FDAAJZAcWcHyM223.png"
import sliderImage9i2 from "../../../../../../../public/assets/imgs/Products/inverters/VTS30/slider/CgAGbGWvReCAQkvcAAJLgA_FCQE575.png"
import cat1i2 from "../../../../../../../public/assets/imgs/Products/PLC/VC20/specs/CgAGbGY7HuWAGkR4AAJtZxWVcOA078.jpg"
import cat2i2 from "../../../../../../../public/assets/imgs/Products/PLC/VC20/specs/CgAGbGY7HvGARz9xAAetwe_2e64168.jpg"
import cat3i2 from "../../../../../../../public/assets/imgs/Products/PLC/VC20/specs/CgAGbGY7HvuAdM7ZAAjB-wYiOU8154.jpg"




export type Feature = {
        heading: string | null,
        paragraph: string
}

export type Plc = {
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

const plcs : Plc[] = [
    {
        id: "1",
        name: "VC10V Simple Motion Small PLC",
        description: "VC10V Simple and sporty small PLC",
        href: "/vts",
        src: image1,
        alt: "Is a simple sport programmable controller with 4 pulse outputs based on the VC10 series, built-in 2-way l00KHz + 2-way 60KHz high-speed pulse outputs, 2-way 50KHz high-speed counting. It has all the functions of the VC10, and optimizes and improves the performance of the product, making it extremely cost-effective.",
        desctiptionParagraph: "As the VFD manufacturer in china, V&T has rich experience in electric drive fields. Adopting brand-new vector control technology, VTS series inverter can be compatible with the control of synchronous motor, asynchronous motor and reluctance motor, as well as the encoders with multiple specification and abundant communication interface and support English liquid crystal display, five-digit digital pipe display operation panel; and with the protection functions of usability, extendability, small volume, light weight and perfection, VTS series Mini AC drive can meet the medium-high application demands.",
        desctiptionUl: null,
        features: [
            {
                heading: null,
                paragraph: "Built-in 2-way 100KHZ+2-way 60KHz pulse output",
            },
            {
                heading: null,
                paragraph: "Excellent expandability, expansion unit see VC10 expansion section.",
            },
            {
                heading: null,
                paragraph: "Comes with 3 communication ports (1 way RS232 programming port, 2-way RS485)",
            },
            {
                heading: null,
                paragraph: "has all the features of the VC10 and optimizes the performance of the product",
            },
            {
                heading: null,
                paragraph: "Control scale(1/0):16-172 points (basic unit 16/24/30/40/60)",
            },
            {
                heading: null,
                paragraph: "Built-in 2-way 50KHZ+4-way l0KHz high-speed counting",
            }
        ],
        catImgs: [cat1i1, cat2i1, cat3i1],
        userManualFile: "/files/VC10V Series PLC Quick Start User Manual.pdf",
        brochureFile: "/files/Brochure V&T PLC&HMI&Multi-channel Intelligent Thermostat1121.pdf"
    },
    {
        id: "2",
        name: "VC20 Series High Performance General Purpose PLC",
        description: "VC20 Series high-performance general-purpose PLC",
        href: "/vts30",
        src: image2,
        alt: "VC20 Series high-performance general-purpose PLC Image",
        desctiptionParagraph: "VC20 series is a high-performance general-purpose small PLC, with powerful I/O expansion capabilities and communication networking capabilities, can be used for high-speed data processing and analogue processing, with high stability, high reliability, large capacity, high-speed computing capabilities. It has powerful functions and  high cost performance.",
        desctiptionUl: null,
        features: [
            {
                heading: "Reliable programme security",
                paragraph: "8-digit multi-level password protection, unique password compression and encryption technology and stored in the PLC to effectively protect the user's intellectual property rights. Real-time clock The main module has a built-in real-time clock (RTC) and provides a perpetual calendar function.",
            },
            {
                heading: "Ladder diagrams, instruction tables, sequential function charts",
                paragraph: "Online modification, Online editing, online downloading, online debugging Online modification has no step limit and can be modified at will.",
            },
            {
                heading: "High speed and large capacity",
                paragraph: "High computing speed — basic instruction: 0.09μs. Large program capacity — up to 12k steps without expansion."
            },
            {
                heading: "Convenient and fast programming function",
                paragraph: "Three programming languages."
            },
            {
                heading: "High stability and reliability",
                paragraph: "Ultra-wide operating voltage: AC85~280V. Strict three-proof treatment of the board, adapt to the harsh field environment.User programme EEPROM permanent storage. Ultra-strong environmental adaptability .Excellent anti-interference"
            },
            {
                heading: "Super strong I/0 expansion",
                paragraph: "/O points can be expanded up to 512 points.Expandable up to 8 special function modules. Abundant programming instructions.Number of instructions.Basic instructions —32pcs.Application instructions — 221pcs"
            }
        ],
        catImgs: [cat1i2, cat2i2, cat3i2],
        userManualFile: "/files/VC10V Series PLC Quick Start User Manual.pdf",
        brochureFile: "/files/Brochure V&T PLC&HMI&Multi-channel Intelligent Thermostat1121.pdf"
    }
]

export default plcs;