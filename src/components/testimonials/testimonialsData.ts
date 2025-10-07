import { StaticImageData } from "next/image"
import image1 from "../../../public/assets/imgs/user.png"

export type Testimonial = {
    id: string,
    src: StaticImageData,
}

const testimonialsData : Testimonial[] = [
    {
        id: "1",
        src: image1,
    },
    {
        id: "2",
        src: image1,
    },
    {
        id: "3",
        src: image1,
    },
    {
        id: "4",
        src: image1,
    }
]

export default testimonialsData;