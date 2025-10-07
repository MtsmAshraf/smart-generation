import { StaticImageData } from "next/image"
import image1 from "../../../public/assets/imgs/1.jpg"
import image2 from "../../../public/assets/imgs/2.jpg"
import image3 from "../../../public/assets/imgs/3.jpg"
import image4 from "../../../public/assets/imgs/4.jpg"
import image5 from "../../../public/assets/imgs/5.jpg"
import image6 from "../../../public/assets/imgs/6.jpg"
import image7 from "../../../public/assets/imgs/7.jpg"
import image8 from "../../../public/assets/imgs/8.jpg"
import image9 from "../../../public/assets/imgs/8.jpg"

export type projectsImage = {
    id: string,
    name: string,
    place: string,
    src: StaticImageData | string,
}

const projectsImages : projectsImage[] = [
    {
        id: "1",
        name: "مشروع 1",
        place: "مصر",
        src: image1
    },
    {
        id: "2",
        name: "مشروع 2",
        place: "مصر",
        src: image2
    },
    {
        id: "3",
        name: "مشروع 3",
        place: "مصر",
        src: image3
    },
    {
        id: "4",
        name: "مشروع 4",
        place: "مصر",
        src: image4
    },
    {
        id: "5",
        name: "مشروع 5",
        place: "مصر",
        src: image5
    },
    {
        id: "6",
        name: "مشروع 6",
        place: "مصر",
        src: image6
    },
    {
        id: "7",
        name: "مشروع 7",
        place: "مصر",
        src: image7
    },
    {
        id: "8",
        name: "مشروع 8",
        place: "مصر",
        src: image8
    },
    {
        id: "9",
        name: "مشروع 9",
        place: "مصر",
        src: image9
    },
]

export default projectsImages;