import type { Metadata } from "next";
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core";
import icon from "../../../public/assets/imgs/logo-no-text.png"
import "./globals.css"
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Loader from "@/components/loader/loader";
config.autoAddCss = false

export const metadata: Metadata = {
  title: "Smart Generation",
  description: "The official website of the leading company in engineering and construction. With the latest advanced capabilities, we will execute a project beyond your imagination",
  icons: icon.src,
   keywords: [
    "Smart Generation Egypt",
    "SmartGeneration EG",
    "Electrical Solutions Egypt",
    "Electrical Supplies Egypt",
    "Electrical Equipment Supplier Egypt",
    "Industrial Electrical Supplies Egypt",
    "Electrical Contracting Egypt",
    "Compressed Air Systems Egypt",
    "Automation and Control Panels",
    "Energy Efficiency Solutions",
    "Electrical Components Egypt",
    "Engineering Solutions Egypt",
    "Power Distribution Systems",
    "Electrical Panels and Switchgear",
    "Industrial Power Solutions",
    "The exclusive agent of V&T in Egypt",
    "V&T in Egypt"
  ],
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

