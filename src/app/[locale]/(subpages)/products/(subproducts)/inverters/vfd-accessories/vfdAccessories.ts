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
export type SpecItem = {
  label: string
  value: string
}

export type SpecSection = {
  title?: string
  items: SpecItem[]
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
    specs?: SpecSection[],
    brochureFile?: string,
    userManualFile?: string
}

const vfdAccessories : VfdAccessoryType[] = [
    {
        id: "ex-ca13-profinet-communication-adapter-card",
        name: "EX-CA13 Profinet Communication Adapter Card",
        src: image1,
        alt: "EX-CA13 Profinet Communication Adapter Card",
        description: "",
        desctiptionParagraph: "To meet the needs of the development of Industry 4.0, V&T as a global member of the PI Association, Its product meets the industrial Ethernet inverter. EX-CA13 communication expansion card is a PROFINET industrial Ethernet communication product developed by Shenzhen V&T Technologies Co.,Ltd. and It has the PG card function, which fully meets the stability and real-time requirements of modern industrial equipment interconnection. It is the first new version of the inverter certified by the PI Association.",
        desctiptionUl: [],
        features: [
            {
                heading: "PROFINET Industrial Ethernet Communication",
                paragraph: "It is a PROFINET Industrial Ethernet communication adapter card with full duplex and adaptive 10 / 100M baud rate;"
            },
            {
                heading: "Dual Port Ethernet Interface",
                paragraph: "Integrated dual port and fast Ethernet interface with switch function;"
            },
            {
                heading: "LED Status Indicators",
                paragraph: "Product status and fault are indicated by LED light, which is convenient for commissioning and maintenance;"
            },
            {
                heading: "5V Incremental Encoder Compatibility",
                paragraph: "It can be connected with 5V incremental encoder and has feedback output. For the wiring and description of encoder part."
            }
            ],
        catImgs: [],
        specs: [
        {
            title: "General Specifications",
            items: [
            { label: "Communication Protocol", value: "PROFINET" },
            { label: "Baud Rate", value: "10/100 Mbps" },
            { label: "Ports", value: "Dual Ethernet" },
            { label: "Power Supply", value: "5V" }
            ]
        },
        {
            title: "Functions",
            items: [
            { label: "Encoder Support", value: "5V Incremental Encoder" },
            { label: "LED Indicators", value: "Yes" }
            ]
        }
        ]
    },
    {
        id: "ex-ca06-profibus-dp-communication-adapter-card",
        name: "EX-CA06 Profibus-DP Communication Adapter Card",
        src: image2,
        alt: "EX-CA06 Profibus-DP Communication Adapter Card",
        description: "",
        desctiptionParagraph: "EX-CA06 is a Profibus-DP to Modbus-RTU communication adapter card. This adapter card provides Profibus-DP interface. The interface and protocol fully comply with Siemens Profibus-DP bus standard. It is suitable for the networking of V&T frequency converter and Profibus-DP network.",
        desctiptionUl: [],
        features: [
            ],
        catImgs: [],
        
        
    },
    {
        id: "ex-ca04-canopen-communication-adapter-card",
        name: "EX-CA04 CANopen Communication Adapter Card",
        src: image3,
        alt: "EX-CA04 CANopen Communication Adapter Card",
        description: "",
        desctiptionParagraph: "EX−CA04 is defined as the communication module of CANopen slave station, it is used for the connection of CANopen configuration network, programmable controller and human-machine interface; EX−CA04 provides user-define function, which is used to connect CANopen configuration network and custom devices that comply with Modbus-RTU of V&T frequency converter.",
        desctiptionUl: [],
        features: [
            {
                heading: "Supported Protocols",
                paragraph: "Support CAN2.0A protocol, CANopen DS301 V4.02, DS303, DS305"
            },
            {
                heading: "Supported Services:",
                paragraph: "PDO (Process Data Object),PDO1-PDO12: RxPDO maps writable device parameters; TxPDO maps readable device parameters. PDO information adopts Synchronous mode to transmit real-time data."
            },
            {
                heading: "Supported Services: SDO (Service Data Object)",
                paragraph: "SDO connection adopts the 'client / server' mode, which is used to configure the slave nodes and access the object dictionary of each node. SDO has two types: request SDO and response SDO."
            },
            {
                heading: "Supported Services: ISOP (Special Object Protocol)",
                paragraph: "Support the default COB-ID in the pre-defined master / slave connection. Support broadcast service (when the address is 0). Support SYNC. Support EMCY. Network configuration object (LSS slave)"
            },
            {
                heading: "Supported Services: INMT (Network Management Object)",
                paragraph: "Support NMT module control. Support NMT error control. Support Boot-up. Time Stamp service."
            }
            ],
        catImgs: [],
        
        
    },
    {
        id: "v9-dp01-led-operation-panel",
        name: "V9-DP01 LED Operation Panel",
        src: image4,
        alt: "V9-DP01 LED Operation Panel",
        description: "",
        desctiptionParagraph: "",
        desctiptionUl: [
            "Chinese/English liquid crystal display keyboard and LED keyboard, abundant information and convenient operation.",
            "With multi-functional combination key. for example, realize remote/local switching, emergency shutdown and other humanized functions",
            "nclude parameter storage chip, convenient to storage, upload and download the parameters",
            "It is suitable for batch supporting customers. the commissioning time is saved well and the installation efficiency is improved",
            "Support the scheme of extension wire"
        ],
        features: [
            ],
        catImgs: [],
        
        
    },
    {
        id: "v9-dp02-lcd-operation-panel",
        name: "V9-DP02 LCD Operation Panel",
        src: image5,
        alt: "V9-DP02 LCD Operation Panel",
        description: "",
        desctiptionParagraph: "",
        desctiptionUl: [
            "Chinese/English liquid crystal display keyboard and LED keyboard, abundant information and convenient operation",
            "With multi-functional combination key. for example, realize remote/local switching, emergency shutdown and other humanized functions.",
            "Include parameter storage chip, convenient to storage, upload and download the parameters",
            "It is suitable for batch supporting customers. the commissioning time is saved well and the installation efficiency is improved",
            "Support the scheme of extension wire"
        ],
        features: [
            ],
        catImgs: [],
        
        
    },
    {
        id: "ex-pg01-feedback-card",
        name: "EX-PG01 Feedback Card",
        src: image6,
        alt: "EX-PG01 Feedback Card",
        description: "",
        desctiptionParagraph: "",
        desctiptionUl: [
            "Provide 12V power supply (±5%), maximum 200mA",
            "Provide PA+ PA-, PB+ PB-, PZ+PZ- encoder input",
            "80K pulse input"
        ],
        features: [
            ],
        catImgs: [],
        specs: [
            {
                title: "Electrical",
                items: [
                { label: "Power Supply", value: "12V ±5%, 200mA" },
                { label: "Pulse Input", value: "80K" }
                ]
            },
            {
                title: "Inputs",
                items: [
                { label: "Encoder Inputs", value: "PA+, PA-, PB+, PB-, PZ+, PZ-" }
                ]
            }
        ]
    },
    {
        id: "ex-pg02-feedback-card",
        name: "EX-PG02 Feedback Card",
        src: image7,
        alt: "EX-PG02 Feedback Card",
        description: "",
        desctiptionParagraph: "",
        desctiptionUl: [
            "Provide 5V power supply (±5%)",
            "Provide PA+ PA-, PB+ PB-, PZ+PZ- encoder input"
        ],
        features: [
            ],
        catImgs: [],
        
        
    },
    {
        id: "ex-pg03-feedback-card",
        name: "EX-PG03 Feedback Card",
        src: image8,
        alt: "EX-PG03 Feedback Card",
        description: "",
        desctiptionParagraph: "Motor Drive Encoder Feedback Card. If the inverter needs to send the motor speed to other equipment for counting or speed measurement in addition to the encoder speed feedback vector control 2, please use V&T PG feedback frequency division output card EX-PG03",
        desctiptionUl: [],
        features: [
            ],
        catImgs: [],
        
        
    },
    {
        id: "ex-pg04-feedback-card",
        name: "EX-PG04 Feedback Card",
        src: image9,
        alt: "EX-PG04 Feedback Card",
        description: "",
        desctiptionParagraph: "Speed Control Encoder Feedback Card. If the inverter needs to send the motor speed to other equipment for counting or speed measurement in addition to the encoder speed feedback vector control 2, please use the Lanhai Huateng PG feedback frequency division output card EX-PG04",
        desctiptionUl: [],
        features: [
            ],
        catImgs: [],
        
        
    }
    ]

export default vfdAccessories;