import { StaticImageData } from "next/image"
import image1 from "../../../../../assets/imgs/Products/Servo/VS510/CgAGbGWP81iALbtNAALPGRErNoM925.png"
import sliderImage1i1 from "../../../../../assets/imgs/Products/inverters/VTS/slider/2.png"
import sliderImage2i1 from "../../../../../assets/imgs/Products/inverters/VTS/slider/CgAGbGWLpR-AGNuVAAL1OwoQCZM855.png"
import sliderImage3i1 from "../../../../../assets/imgs/Products/inverters/VTS/slider/CgAGbGWLpR2AEyz0AAI1eKMa73g854.png"
import sliderImage4i1 from "../../../../../assets/imgs/Products/inverters/VTS/slider/CgAGbGWLpR6APdlIAAMJcpTBFLM917.png"
import sliderImage5i1 from "../../../../../assets/imgs/Products/inverters/VTS/slider/CgAGbGWLpR6AQRLFAAKtvbnxX_0680.png"
import sliderImage6i1 from "../../../../../assets/imgs/Products/inverters/VTS/slider/CgAGbGWvRNaAG2YPAAKEqJ1OmX8381.png"
import cat1i1 from "../../../../../assets/imgs/Products/Servo/VS510/specs/CgAGbGY7ERmAc2VZAAUhWFRdUk8410.jpg"
import cat2i1 from "../../../../../assets/imgs/Products/Servo/VS510/specs/CgAGbGY7ESyAC503AAZ04nDNjmA482.jpg"




import image2 from "../../../../../assets/imgs/Products/Servo/VS512/CgAGbGWP9GeAQVSLAAN4Px5Oohk909.png"
import sliderImage1i2 from "../../../../../assets/imgs/Products/inverters/VTS30/slider/CgAGbGWD9dKAe41oAAJZAcWcHyM878.png"
import sliderImage2i2 from "../../../../../assets/imgs/Products/inverters/VTS30/slider/CgAGbGWD9diAIAHLAAEL4An4gIk638.png"
import sliderImage3i2 from "../../../../../assets/imgs/Products/inverters/VTS30/slider/CgAGbGWD9dmAQMF2AAFBw6446dU969.png"
import sliderImage4i2 from "../../../../../assets/imgs/Products/inverters/VTS30/slider/CgAGbGWD9dmAcBRsAAF-J-HtcVI460.png"
import sliderImage5i2 from "../../../../../assets/imgs/Products/inverters/VTS30/slider/CgAGbGWD9dmAdvsZAAFoMwjdn68594.png"
import sliderImage6i2 from "../../../../../assets/imgs/Products/inverters/VTS30/slider/CgAGbGWD9dqAZW-OAAIUHppfZ6o746.png"
import sliderImage7i2 from "../../../../../assets/imgs/Products/inverters/VTS30/slider/CgAGbGWD9dqAdpIsAAFQuzoKiY0959.png"
import sliderImage8i2 from "../../../../../assets/imgs/Products/inverters/VTS30/slider/CgAGbGWD9eOAI_FDAAJZAcWcHyM223.png"
import sliderImage9i2 from "../../../../../assets/imgs/Products/inverters/VTS30/slider/CgAGbGWvReCAQkvcAAJLgA_FCQE575.png"
import cat1i2 from "../../../../../assets/imgs/Products/Servo/VS512/specs/CgAGbGY7ERmAc2VZAAUhWFRdUk8410.jpg"
import cat2i2 from "../../../../../assets/imgs/Products/Servo/VS512/specs/CgAGbGY7ESyAC503AAZ04nDNjmA482.jpg"


export type Feature = {
        heading: string | null,
        paragraph: string | null
}

export type ServoDrive = {
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

const servoDrives : ServoDrive[] = [
    {
        id: "1",
        name: "VS510 Series servo drive",
        description: "VS510 Series servo drive",
        href: "/vts",
        src: image1,
        alt: "VS510 Series servo drive Image",
        desctiptionParagraph: "The VS510 series is equipped with a new type of adjustment free function, breaking the common sense that servo drives cannot run smoothly without adjustment, and achieving instant use. The new advanced automatic tuning function can shorten installation time and fully utilize mechanical performance.",
        desctiptionUl: [
            "Excellent drive response characteristics",
            "Enhanced vibration suppression function",
            "Multi-level filtering", 
            "3x overload",
            "Supports multiple encoders",
            "Resonance suppression",
            "Faster response"
        ],
        features: [
            {
                heading: "Excellent drive response characteristics",
                paragraph: "Significantly reduced setting time",
            },
            {
                heading: "Enhanced vibration suppression function",
                paragraph: "By adding and improving the vibration resistance function, the following performance can be improved, the setting time can be shortened, and the vibration (sound) during driving and the vibration of the mechanical front end during stopping can also be reduced.",
            },
            {
                heading: "Multi-level filtering",
                paragraph: "By using multi-level filters, the vibration suppression function can be improved, the setting time can be shortened, the corresponding speed can be increased, and the front-end vibration when the drive stops can be reduced. At the same time, it can effectively suppress the influence of external disturbances",
            },
            {
                heading: "3x overload",
                paragraph: "The Vs510 servo driver has a 3x overload capacity to support the motor with 3x torque overload.",
            },
            {
                heading: "Supports multiple encoders",
                paragraph: "Supports multiple encoders such as 67 signal incremental, 17 bit absolute, magnetic encoders, etc",
            },
            {
                heading: "Resonance suppression",
                paragraph: "In response to the positioning vibration phenomenon caused by the elastic link device between the load and the motor in the servo drive system, the notch filter parameters are reasonably allocated based on system information to eliminate vibration in the given position",
            }
        ],
        catImgs: [cat1i1, cat2i1]
    },
    {
        id: "2",
        name: "VS512 series servo driver",
        description: "VS512 series servo driver",
        href: "/vts30",
        src: image2,
        alt: "VS512 series servo driver Image",
        desctiptionParagraph: "High performance servo driver The VS512 series is equipped with a new type of adjustment free function, breaking the common sense that servo drives cannot run smoothly without adjustment, and achieving instant use. The new advanced automatic tuning function can shorten installation time and fully utilize mechanical performance.",
        desctiptionUl: [
            "Excellent drive response characteristics",
            "Enhanced vibration suppression function",
            "New adjustable function",
            "New advanced automatic tuning function",
            "New parameter tuning function",
        ],
        features: [
            {
                heading: "Excellent drive response characteristics",
                paragraph: "Significantly reduced setting time",
            },
            {
                heading: "Enhanced vibration suppression function",
                paragraph: "By adding and improving the vibration resistance function, the following performance can be improved, the setting time can be shortened, and the vibration (sound) during driving and the vibration of the mechanical front end during stopping can also be reduced.",
            },
            {
                heading: "New adjustable function",
                paragraph: "By using multi-level filters, the vibration suppression function can be improved, the setting time can be shortened, the corresponding speed can be increased, and the front-end vibration when the drive stops can be reduced. At the same time, it can effectively suppress the influence of external disturbances"
            },
            {
                heading: "New advanced automatic tuning function",
                paragraph: null
            },
            {
                heading: "New parameter tuning function",
                paragraph: null
            }
        ],
        catImgs: [cat1i2, cat2i2]
    }
]

export default servoDrives;