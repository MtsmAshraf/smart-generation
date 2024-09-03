import React from 'react'
import styles from "./project-id.module.css"
import MainHeading from '@/components/mainHeading/mainHeading'
import Image from 'next/image'
import test from "../../../../assets/imgs/1.jpg"
import Link from 'next/link'
import projectsImages from '@/components/projectsSlider/projectsImages'


const ProjectId = ({ params } : any) => {
  const foundProject = projectsImages.find((project) => project.id === params.projectId) || { id: 113123213, name: "not Found", place: "NOT FOUND", src: test }
  console.log(foundProject)
  return (
    <section className={styles.projectId}>
      <div className="container">
        <MainHeading>
          <h1>
            { foundProject?.name }
          </h1>
          <span>
            { foundProject?.place }
            </span>
        </MainHeading>
        <div>
          
          <div className={styles.imgs}>
            <Image src={foundProject.src} alt='Project Image'></Image>
            <Image src={foundProject.src} alt='Project Image'></Image>
            <Image src={foundProject.src} alt='Project Image'></Image>
            <Image src={foundProject.src} alt='Project Image'></Image>
            <Image src={foundProject.src} alt='Project Image'></Image>
          </div>
          <div className={styles.details}>
            <p>
              مشروع الكهرباء هذا يهدف إلى تحسين كفاءة استهلاك الطاقة في المباني السكنية من خلال استخدام أحدث التقنيات في مجال الطاقة المتجددة والتحكم الآلي. سيتم تركيب ألواح شمسية على أسطح المباني لتوليد الكهرباء من الطاقة الشمسية، وسيتم دمج هذه الألواح مع نظام تخزين الطاقة لضمان توفر الكهرباء على مدار الساعة.
              كما سيتم تطبيق نظام التحكم الذكي في الأجهزة الكهربائية، بحيث يتم تشغيلها فقط عند الحاجة، مما يساهم في تقليل استهلاك الطاقة غير الضروري. سيتم أيضًا تركيب أنظمة إضاءة موفرة للطاقة، مثل مصابيح LED، لتحسين جودة الإضاءة وتقليل استهلاك الكهرباء.
            </p>
          </div>
        </div>
        <div className={styles.goBackLink}>
          <Link href={"/projects"}>باقي المشاريع</Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectId