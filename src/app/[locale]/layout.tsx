import type { Metadata } from "next";
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core";
import icon from "../../../public/assets/imgs/logo-no-text.png"
import "./globals.css"
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
// import Loader from "@/components/loader/loader";
config.autoAddCss = false

// export const metadata: Metadata = {
//   title: "Smart Generation",
//   description: "The official website of Smart Generation Co., The Exclusive Agent of V&T in Egypt, the leading company in engineering and construction. With the latest advanced capabilities, we will execute a project beyond your imagination",
//   icons: icon.src,
//    keywords: [
//     "Smart Generation Egypt",
//     "SmartGeneration EG",
//     "Electrical Solutions Egypt",
//     "Electrical Supplies Egypt",
//     "Electrical Equipment Supplier Egypt",
//     "Industrial Electrical Supplies Egypt",
//     "Electrical Contracting Egypt",
//     "Compressed Air Systems Egypt",
//     "Automation and Control Panels",
//     "Energy Efficiency Solutions",
//     "Electrical Components Egypt",
//     "Engineering Solutions Egypt",
//     "Power Distribution Systems",
//     "Electrical Panels and Switchgear",
//     "Industrial Power Solutions",
//     "The exclusive agent of V&T in Egypt",
//     "V&T in Egypt"
//   ],
// };

export const metadata: Metadata = {
  title: {
    default: "Smart Generation Egypt | Exclusive Agent of V&T in Egypt",
    template: "%s | Smart Generation Egypt"
  },
  description: "Smart Generation Egypt - Exclusive Agent of V&T. Leading electrical engineering, industrial automation, and power distribution solutions in Egypt. Professional electrical contracting, control panels, and compressed air systems for industrial and commercial sectors. سمارت جينيريشن مصر - الوكيل الحصري لشركة V&T في مصر. الحلول الرائدة في الهندسة الكهربائية، الأتمتة الصناعية، وتوزيع الطاقة في مصر. مقاولات كهربائية احترافية، لوحات تحكم، وأنظمة الهواء المضغوط للقطاعات الصناعية والتجارية",
  icons: icon.src,
  keywords: [
    // English Keywords
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
    { name: "Smart Generation Egypt" },
    { name: "V&T Electrical" }
  ],
  creator: "Smart Generation Egypt",
  publisher: "Smart Generation Co.",
  category: "industrial",
  classification: "Electrical Engineering & Contracting",
};

export default async function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
})  {
 
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header l={locale}></Header>
          {children}
          <Footer l={locale}></Footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

