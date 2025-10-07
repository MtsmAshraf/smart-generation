import { StaticImageData } from "next/image"
import image1 from "../../../public/assets/imgs/logos/163860.svg";
import image2 from "../../../public/assets/imgs/logos/333260.svg";
import image3 from "../../../public/assets/imgs/logos/353305.svg";
import image4 from "../../../public/assets/imgs/logos/353309.svg";
import image5 from "../../../public/assets/imgs/logos/353415.svg";
import image6 from "../../../public/assets/imgs/logos/ABB_Group-Logo.wine.png";
import image7 from "../../../public/assets/imgs/logos/autonics-seeklogo.png";
import image8 from "../../../public/assets/imgs/logos/avaya-35121.svg";
import image9 from "../../../public/assets/imgs/logos/dell-2016-seeklogo.com.svg";
import image10 from "../../../public/assets/imgs/logos/Delta_Air_Lines-Logo.wine.png";
import image11 from "../../../public/assets/imgs/logos/d-link-logo-1.svg";
import image12 from "../../../public/assets/imgs/logos/farfisa.svg";
import image13 from "../../../public/assets/imgs/logos/hikvision-logo.svg";
import image14 from "../../../public/assets/imgs/logos/hitachi-data-sys.svg";
import image15 from "../../../public/assets/imgs/logos/img1_Siemens-Logo.wine.png";
import image16 from "../../../public/assets/imgs/logos/imgi_54_CatalogImage.png";
import image17 from "../../../public/assets/imgs/logos/ls-traktor-seeklogo.png";
import image18 from "../../../public/assets/imgs/logos/Mitsubishi-Logo.wine.png";
import image19 from "../../../public/assets/imgs/logos/Omron-Logo.wine.png";
import image20 from "../../../public/assets/imgs/logos/Schneider_Electric-Logo.wine.png";
import image21 from "../../../public/assets/imgs/logos/simplex-seeklogo.png";
import image22 from "../../../public/assets/imgs/logos/Yaskawa_Electric_Corporation-Logo.wine.png";





export type Brand = {
    id: string,
    src: StaticImageData,
}

const brands : Brand[] = [
    { 
        id: '1',
        src: image1 
    },
    { 
        id: '2',
        src: image2 
    },
    { 
        id: '3',
        src: image3 
    },
    { 
        id: '4',
        src: image4 
    },
    { 
        id: '5',
        src: image5 
    },
    { 
        id: '6',
        src: image6 
    },
    { 
        id: '7',
        src: image7 
    },
    { 
        id: '8',
        src: image8 
    },
    { 
        id: '9',
        src: image9 
    },
    { 
        id: '10',
        src: image10 
    },
    { 
        id: '11',
        src: image11 
    },
    { 
        id: '12',
        src: image12 
    },
    { 
        id: '13',
        src: image13 
    },
    { 
        id: '14',
        src: image14 
    },
    { 
        id: '15',
        src: image15 
    },
    { 
        id: '16',
        src: image16 
    },
    { 
        id: '17',
        src: image17 
    },
    { 
        id: '18',
        src: image18 
    },
    { 
        id: '19',
        src: image19 
    },
    { 
        id: '20',
        src: image20 
    },
    { 
        id: '21',
        src: image21 
    },
    { 
        id: '22',
        src: image22 
    },
]

export default brands;