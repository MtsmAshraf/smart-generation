import { StaticImageData } from "next/image"

import image from "../../../../../../../../public/assets/imgs/Products/inverters/V9/V9.png"

import air from "../../../../../../../../public/assets/imgs/Products/inverters/special-purpose/air.jpg"
import ceramic from "../../../../../../../../public/assets/imgs/Products/inverters/special-purpose/ceramic.jpg"
import crane from "../../../../../../../../public/assets/imgs/Products/inverters/special-purpose/crane.jpg"
import elevator from "../../../../../../../../public/assets/imgs/Products/inverters/special-purpose/elevator.jpg"
import frequency from "../../../../../../../../public/assets/imgs/Products/inverters/special-purpose/frequency.jpg"
import injection from "../../../../../../../../public/assets/imgs/Products/inverters/special-purpose/injection.jpg"
import machine from "../../../../../../../../public/assets/imgs/Products/inverters/special-purpose/machine.jpg"
import mine from "../../../../../../../../public/assets/imgs/Products/inverters/special-purpose/mine.jpg"
import municipal from "../../../../../../../../public/assets/imgs/Products/inverters/special-purpose/municipal.jpg"
import oil from "../../../../../../../../public/assets/imgs/Products/inverters/special-purpose/oil.jpg"
import printing from "../../../../../../../../public/assets/imgs/Products/inverters/special-purpose/printing.jpg"
import stone from "../../../../../../../../public/assets/imgs/Products/inverters/special-purpose/stone.jpg"
import textile from "../../../../../../../../public/assets/imgs/Products/inverters/special-purpose/textile.jpg"
import wood from "../../../../../../../../public/assets/imgs/Products/inverters/special-purpose/wood.jpg"

export type Feature = {
        heading: string | null,
        paragraph: string
}

export type SpecialPurposeType = {
    id: string,
    name: string,
    description: string,
    src: StaticImageData,
    alt: string,
    desctiptionParagraph: string,
    desctiptionUl: string[] | null,
    brochureFile?: string,
    userManualFile?: string,
    innerImgSrc: StaticImageData,
}

const specialPurposeDrives : SpecialPurposeType[] = [
    {
        id: "ceramics-machinery",
        name: "Ceramics Machinery",
        src: image,
        alt: "Ceramics Machinery",
        description: "",
        desctiptionParagraph: "",
        desctiptionUl: [
        "Strong adaptability of environment temperature",
        "Professional solutions for anti-interference and lightning protection",
        "Reliable and stable operation, and corrosion prevention",
        "Trip-less, reliable control and protection for power modules"
        ],
        userManualFile: "/files/V9-user-manual.pdf",
        brochureFile: "/files/Brochure V&T V9 Product Catalog High performance Inverter 220V 380V 690V.pdf",
        innerImgSrc: ceramic
    },
    {
        id: "oil-field",
        name: "Oil Field",
        src: image,
        alt: "Oil Field",
        description: "",
        desctiptionParagraph: "",
        desctiptionUl: [
        "Special inverter for pumping unit, stable control even without RBU(s) or DBU(s).",
        "Higher power saving effect, less harmonic and reactive current.",
        "High quality Outdoor Control Cabinet is available,with constant temperature control, it can work reliably in low temperature environment for a long time.",
        "It is applicable to control synchronous motor and asynchronous motor.",
        "AFE(s) and RBU(s) are available for higher energy saving effect and higher power factor requirements"
        ],
        userManualFile: "/files/V9-user-manual.pdf",
        brochureFile: "/files/Brochure V&T V9 Product Catalog High performance Inverter 220V 380V 690V.pdf",
        innerImgSrc: oil
    },
    {
        id: "elevator-industry",
        name: "Elevator Industry",
        src: image,
        alt: "Elevator Industry",
        description: "",
        desctiptionParagraph: "",
        desctiptionUl: [
        "Elevator integrated controller and electrical package are available, it can be selected according to customers’ requirements",
        "With cptimized CAN and Modbus communication technology, it has quicklycommunication speed and strong anti-interference ability.",
        "With a variety of safety protection functions, it can meet the latest standards",
        "Application of Internet of Things technology to achieve remote monitoring, commissioning and upgrade firmware "
        ],
        userManualFile: "/files/V9-user-manual.pdf",
        brochureFile: "/files/Brochure V&T V9 Product Catalog High performance Inverter 220V 380V 690V.pdf",
        innerImgSrc: elevator
    },
    {
        id: "mine-winch",
        name: "Mine Winch",
        src: image,
        alt: "Mine Winch",
        description: "",
        desctiptionParagraph: "",
        desctiptionUl: [
        "With abundant experience in the renovation of winch, we can provide different types of winch renovation solutions.",
        "Vector technology platform provides excellent control performance for the winch",
        "A variety of protection functions to ensure more secure and reliable system",
        "Intelligent fault diagnosis to reduce the cost of maintenance and workloads"
        ],
        userManualFile: "/files/V9-user-manual.pdf",
        brochureFile: "/files/Brochure V&T V9 Product Catalog High performance Inverter 220V 380V 690V.pdf",
        innerImgSrc: mine
    },
    {
        id: "variable-frequency-power",
        name: "Variable Frequency Power",
        src: image,
        alt: "Variable Frequency Power",
        description: "",
        desctiptionParagraph: "",
        desctiptionUl: [
        "Voltage and frequency can be controlled separately, so do current and frequency",
        "Special function for electromagnetic stirring, with multiple operation modes",
        "Acceleration and deceleration function of voltage and frequency",
        "SPWM and SVPWM modulation mode",
        "Over-modulation function"
        ],
        userManualFile: "/files/V9-user-manual.pdf",
        brochureFile: "/files/Brochure V&T V9 Product Catalog High performance Inverter 220V 380V 690V.pdf",
        innerImgSrc: frequency
    },
    {
        id: "injection-molding-industry",
        name: "Injection Molding Industry",
        src: image,
        alt: "Injection Molding Industry",
        description: "",
        desctiptionParagraph: "",
        desctiptionUl: [
        "Both products are available: Integrated Energy-Saving Control Cabinet and dedicated drive for Injection Molding Machine",
        "Unified asynchronous servo motor and synchronous servo motor control with pressure and flow control.",
        "Without high-pressure throttle and loss of overflowed energy, energy-saving rate can reach to 25%~70%.",
        "Design of independent duct makes rear parts and top fan convenient to disassemble and easy to maintain; it also has strong environmental adaptability and high protection level "
        ],
        userManualFile: "/files/V9-user-manual.pdf",
        brochureFile: "/files/Brochure V&T V9 Product Catalog High performance Inverter 220V 380V 690V.pdf",
        innerImgSrc: injection
    },
    {
        id: "air-compressor-industry",
        name: "Air Compressor Industry",
        src: image,
        alt: "Air Compressor Industry",
        description: "",
        desctiptionParagraph: "",
        desctiptionUl: [
        "Large torque, stable running speed and stable pressure control",
        "High reliability and long service life.",
        "Synchronous motor drive, asynchronous motor drive, magnetic suspension motor drive, air suspension motor drive, etc.",
        "With  intelligent sleep and low pressure wakeup function, energy saving rate can reach to 20%~50%;.",
        "Standard Modbus-RTU communication can be compatible with various air compressor controllers."
        ],
        userManualFile: "/files/V9-user-manual.pdf",
        brochureFile: "/files/Brochure V&T V9 Product Catalog High performance Inverter 220V 380V 690V.pdf",
        innerImgSrc: air
    },
    {
        id: "machine-tool-industry",
        name: "Machine Tool Industry",
        src: image,
        alt: "Machine Tool Industry",
        description: "",
        desctiptionParagraph: "",
        desctiptionUl: [
        "Excellent vector control and field weakening algorithm ensure large torque at low speed and strong high-speed cutting force.",
        "Support multiple encoder types: sine /cos encoder, incremental encoder and resolver, with functions of encoder frequency division output and second encoder input.",
        "Special function for machine tool spindles: EtherCAT communication, second encoder input, position reference, etc.",
        "Successfully in the 250000 RPM drilling machine"
        ],
        userManualFile: "/files/V9-user-manual.pdf",
        brochureFile: "/files/Brochure V&T V9 Product Catalog High performance Inverter 220V 380V 690V.pdf",
        innerImgSrc: machine
    },
    {
        id: "printing-and-packaging-industry",
        name: "Printing and Packaging Industry",
        src: image,
        alt: "Printing and Packaging Industry",
        description: "",
        desctiptionParagraph: "",
        desctiptionUl: [
        "High-performance vector control and torque control technology can achieve constant linear speed and constant tension control",
        "Applicable for devices of cutting machine, coating machine, paper machine",
        "With torque control without encoder speed feedback, it can replace torque motor widely"
        ],
        userManualFile: "/files/V9-user-manual.pdf",
        brochureFile: "/files/Brochure V&T V9 Product Catalog High performance Inverter 220V 380V 690V.pdf",
        innerImgSrc: printing
    },
    {
        id: "municipal-engineering",
        name: "Municipal Engineering",
        src: image,
        alt: "Municipal Engineering",
        description: "",
        desctiptionParagraph: "",
        desctiptionUl: [
        "Central air conditioning refrigeration host: constant temperature control, high efficiency of energy-saving and low noise",
        "Centralized water supply in constant pressure: Built-in one-for-all expansion card for water supply, multi-period water supply in constant pressure with timing loop, solving the phenomena of overflowing and water hammer in the switching process.",
        "Sewage treatment: Built-in adaptive torque control in the main andauxiliary drive of centrifugal equipment for quick acceleration and deceleration, suitable for harsh environment. ",
        "Various fan drives: Designed for the fan, high efficiency of energy-saving, noise optimization, built-in automatic speed tracking function and maximum power up to 800kW."
        ],
        userManualFile: "/files/V9-user-manual.pdf",
        brochureFile: "/files/Brochure V&T V9 Product Catalog High performance Inverter 220V 380V 690V.pdf",
        innerImgSrc: municipal
    },
    {
        id: "crane",
        name: "Crane",
        src: image,
        alt: "Crane",
        description: "",
        desctiptionParagraph: "",
        desctiptionUl: [
        "Excellent torque control and reliable brake control sequence.",
        "Professional crane control functions: speed monitoring, torque monitoring, torque verification, power optimization, position counting, anti-swing function for gantry, trolley and slew , etc.",
        "Extensively applied to: port, shipping, ocean engineering, mine,architecture, metallurgy, factory and various kinds of industries' lifting machines.",
        ],
        userManualFile: "/files/V9-user-manual.pdf",
        brochureFile: "/files/Brochure V&T V9 Product Catalog High performance Inverter 220V 380V 690V.pdf",
        innerImgSrc: crane
    },
    {
        id: "stone-processing",
        name: "Stone Processing",
        src: image,
        alt: "Stone Processing",
        description: "",
        desctiptionParagraph: "",
        desctiptionUl: [
        "Simple and convenient operation, and less connection cable",
        "Smooth running curve to reduce the stone damage rate, and smooth starting to reduce mechanical damage and maintenance costs",
        "Providing the constant tension control with anti-breakage rope, main and auxiliary functions for frequency reference safe stopping function, and alarm prompt function."
        ],
        userManualFile: "/files/V9-user-manual.pdf",
        brochureFile: "/files/Brochure V&T V9 Product Catalog High performance Inverter 220V 380V 690V.pdf",
        innerImgSrc: stone
    },
    {
        id: "textile-industry",
        name: "Textile Industry",
        src: image,
        alt: "Textile Industry",
        description: "",
        desctiptionParagraph: "",
        desctiptionUl: [
        "Reduce the rate of breakage and improve the efficiency of production",
        "Specially external heat sink and easy to clean the cotton in the heat sink.",
        "Unique voltage control function ensures normal deceleration in case of instantaneous power failure.",
        "With multi-step PLC function, users can set it according to actual application."
        ],
        userManualFile: "/files/V9-user-manual.pdf",
        brochureFile: "/files/Brochure V&T V9 Product Catalog High performance Inverter 220V 380V 690V.pdf",
        innerImgSrc: textile
    },
    {
        id: "wood-processing",
        name: "Wood Processing",
        src: image,
        alt: "Wood Processing",
        description: "",
        desctiptionParagraph: "",
        desctiptionUl: [
        "Built-in technology algorithm of rotary cutting machine, rolling machine, and peeling machine.",
        "Wide voltage range, particularly suitable for harsh conditions in the rural power grid.",
        "High precision and fast rotary cutting to increase the yield under the premise of keeping the uniformity of thickness for the wood veneer.",
        "Stable and reliable work makes customers enjoy high-quality green power."
        ],
        userManualFile: "/files/V9-user-manual.pdf",
        brochureFile: "/files/Brochure V&T V9 Product Catalog High performance Inverter 220V 380V 690V.pdf",
        innerImgSrc: wood
    }
]


export default specialPurposeDrives;