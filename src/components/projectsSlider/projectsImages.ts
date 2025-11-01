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

export type ProjectsImage = {
    id: string,
    name: string,
    place: string,
    src: StaticImageData | string,
}

const projectsImages : ProjectsImage[] = [
    {
        id: "1",
        name: "Project 1 ",
        place: "Egypt",
        src: image1
    },
    {
        id: "2",
        name: "Project 2",
        place: "Egypt",
        src: image2
    },
    {
        id: "3",
        name: "Project 3",
        place: "Egypt",
        src: image3
    },
    {
        id: "4",
        name: "Project 4",
        place: "Egypt",
        src: image4
    },
    {
        id: "5",
        name: "Project 5",
        place: "Egypt",
        src: image5
    },
    {
        id: "6",
        name: "Project 6",
        place: "Egypt",
        src: image6
    },
    {
        id: "7",
        name: "Project 7",
        place: "Egypt",
        src: image7
    },
    {
        id: "8",
        name: "Project 8",
        place: "Egypt",
        src: image8
    },
    {
        id: "9",
        name: "Project 9",
        place: "Egypt",
        src: image9
    },
]

export default projectsImages;