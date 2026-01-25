import Button from "@/components/button/button";
import Bg from "../../../public/assets/imgs/home-bg.jpg"
import ServicesCards from "@/components/servicesCards/servicesCards";
import StatsCard from "@/components/statsCard/statsCard";
import Vision from "@/components/vision/vision";
import Contact from "@/components/contact/contact";
import "./globals.css"

import {useTranslations} from 'next-intl';
import Loader from "@/components/loader/loader";
import Fields from "@/components/fields/fields";
import Why from "@/components/why/why";
import Image from "next/image";
import vtLogo from "../../../public/assets/imgs/vt-logo.png"
import VT from "@/components/vt/VT";
import Partners from "@/components/Partners/Partners";
import { Metadata } from "next";
// import Projects from "./(subpages)/projects/page";
// import ProjectsSlider from "@/components/projectsSlider/projectsSlider";
import icon from "../../../public/assets/imgs/logo-no-text.png"


export const metadata: Metadata = {
  title: {
    default: "Home | Smart Generation Egypt",
    template: "%s | Smart Generation Egypt"
  },
  description: "Smart Generation Egypt - Exclusive Agent of V&T. Leading electrical engineering, industrial automation, and power distribution solutions in Egypt. Professional electrical contracting, control panels, and compressed air systems for industrial and commercial sectors. سمارت جينيريشن مصر - الوكيل الحصري لشركة V&T في مصر. الحلول الرائدة في الهندسة الكهربائية، الأتمتة الصناعية، وتوزيع الطاقة في مصر. مقاولات كهربائية احترافية، لوحات تحكم، وأنظمة الهواء المضغوط للقطاعات الصناعية والتجارية",
  icons: icon.src,
  keywords: [
    // English Keywords
    "Smart Generation",
    "Smart Generation Egypt",
    "SmartGeneration EG",
    "سمارت جينيريشن",
    "سمارت جينيريشن مصر",

    /* V&T */
    "V&T Egypt",
    "V&T in Egypt",
    "Exclusive agent of V&T in Egypt",
    "الوكيل الحصري لشركة V&T في مصر",

    /* Engineering & Electrical */
    "Engineering company Egypt",
    "Electrical solutions Egypt",
    "Electrical supplies Egypt",
    "Electrical equipment supplier Egypt",
    "Industrial electrical supplies Egypt",
    "Electrical contracting Egypt",
    "Electrical components Egypt",
    "Power distribution systems",
    "Electrical panels and switchgear",
    "Automation and control panels",
    "Industrial power solutions",
    "Energy efficiency solutions",
    "Low voltage systems Egypt",

    /* Compressed Air */
    "Compressed air systems Egypt",
    "Air compressors Egypt",
    "Industrial air compressors",
    "Compressed air solutions",
    "أنظمة الهواء المضغوط",
    "ضواغط هواء صناعية",

    /* Arabic SEO */
    "شركة هندسية في مصر",
    "شركة حلول كهربائية",
    "مستلزمات كهرباء صناعية",
    "مقاولات كهرباء",
    "لوحات تحكم كهربائية",
    "أنظمة توزيع الكهرباء",
    "حلول الطاقة الصناعية",
    "حلول كفاءة الطاقة",

    "Smart Generation Egypt",
    "Smart Generation Electrical",
    "V&T Egypt agent",
    "V&T electrical equipment Egypt",
    "electrical engineering Egypt",
    "electrical contracting services Egypt",
    "industrial automation Egypt",
    "control panels Egypt",
    "Inverters Egypt",
    "AC drives Egypt",
    "variable frequency drives Egypt",
    "Servo drives Egypt",
    "HMIs Egypt",
    "PLC panels Egypt",
    "SCADA systems Egypt",
    "power distribution panels Egypt",
    "LV panels Egypt",
    "MV switchgear Egypt",
    "compressed air systems Egypt",
    "industrial compressors Egypt",
    "air treatment systems",
    "electrical maintenance Egypt",
    "industrial electrical solutions",
    "commercial electrical services",
    "factory electrical installation",
    "motor control centers Egypt",
    "electrical panel manufacturing",
    "energy management systems",
    "power factor correction",
    "electrical safety equipment",
    
    // Arabic Keywords
    "سمارت جينيريشن مصر",
    "سمارت جينيريشن للكهرباء",
    "الوكيل الحصري لـ V&T في مصر",
    "معدات كهربائية V&T مصر",
    "هندسة كهربائية مصر",
    "مقاولات كهربائية مصر",
    "خدمات المقاولات الكهربائية",
    "أتمتة صناعية مصر",
    "لوحات تحكم مصر",
    "لوحات تحكم صناعية",
    "لوحات PLC مصر",
    "أنظمة SCADA مصر",
    "لوحات توزيع كهرباء",
    "لوحات كهرباء ضغط منخفض",
    "مفاتيح كهرباء ضغط متوسط",
    "أنظمة الهواء المضغوط مصر",
    "كمبروسر هواء صناعي",
    "أنظمة معالجة الهواء",
    "صيانة كهربائية مصر",
    "حلول كهرباء صناعية",
    "تركيبات كهرباء المصانع",
    "مراكز تحكم المحركات",
    "تصنيع لوحات كهربائية",
    "أنظمة إدارة الطاقة",
    "تحسين معامل القدرة",
    "معدات السلامة الكهربائية",
    
    // Product/Service Specific
    "V&T electrical products",
    "V&T industrial equipment",
    "circuit breakers Egypt",
    "contactors Egypt",
    "relays electrical Egypt",
    "motor starters Egypt",
    "industrial sensors Egypt",
    "electrical cables Egypt",
    "wiring accessories",
    "lighting solutions Egypt",
    "emergency lighting systems",
    "cable management systems",
    "industrial connectors",
    "electrical enclosures",
    "terminal blocks Egypt",
    "safety switches Egypt",
    
    // Project Types
    "factory electrical projects",
    "commercial building electrical",
    "hospital electrical systems",
    "mall electrical installations",
    "data center power solutions",
    "hotel electrical systems",
    "residential complex electrical",
    "industrial plant electrification"
  ],
  openGraph: {
    title: "Smart Generation Egypt | Exclusive Agent of V&T",
    description: "Leading electrical engineering and industrial automation solutions in Egypt. Professional electrical contracting services.",
    url: "https://smartgeneration-eg.com",
    siteName: "Smart Generation Egypt",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Smart Generation Egypt - Electrical Engineering Solutions"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Generation Egypt",
    description: "Exclusive Agent of V&T in Egypt | Electrical Engineering & Automation",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://smartgeneration-eg.com",
    languages: {
      'en-US': 'https://smartgeneration-eg.com/en',
      'ar-EG': 'https://smartgeneration-eg.com/ar',
    },
  },
  authors: [
    { name: "Moatasim Ashraf" },
    { name: "Smart Generation Egypt" },
    { name: "V&T Electrical" }
  ],
  creator: "Moatasim Ashraf",
  publisher: "Smart Generation Co.",
  category: "industrial",
  classification: "Electrical Engineering & Contracting",

  metadataBase: new URL("https://smartgeneration-eg.com"),

};

export default function Home({
  params: {locale}
}: {
  params: {locale: string}
}) {
  const t = useTranslations('HomePage');
  return (
    <main>
        <Loader></Loader>
        <section className={locale === "ar" ? "home" : "en home" } style={{backgroundImage: `url(${Bg.src})`}}>
        <div className="overlay"></div>
        <div className="container">
          <div>
            <h1>
              {
              t('heroSection.coName')
              }
            </h1>
            <h2>
              {
              t('heroSection.greeting')
              }
            </h2>
          </div>
          <p>
            {
            t('heroSection.heroP')
            }
          </p>
          <div className={"vtLogo"}>
              <Image src={vtLogo} alt="V&T company logo"></Image>
              <span>
                {
                  t("heroSection.VT.h1")
                }
              </span>
          </div>
          <div className="buttons">
            <Button href={`/services`} l={locale} inverted={false}>
            {
            t('heroSection.btnOne')
            }
            </Button>
            <Button href={`/contact`} l={locale} inverted={true}>
            {
            t('heroSection.btnTwo')
            }
            </Button>
          </div>
        </div>
      </section>
      <section>
        <StatsCard l={locale}></StatsCard>
      </section>
      <section>
        <VT l={locale}></VT>
      </section>
      <section>
        <div className="container">
          <ServicesCards l={locale}></ServicesCards>
        </div>
      </section>
      <section>
        <Vision l={locale}></Vision>
      </section>
      <section>
        <Fields lo={locale}></Fields>
      </section>
      <section>
        <Why lo={locale}></Why>
      </section>
      {/* <section>
        <ProjectsSlider lo={locale}></ProjectsSlider>
      </section> */}
      <Partners lo={locale}></Partners>
      <section>
        <Contact l={locale}></Contact>
      </section>
    </main>
  );
}
