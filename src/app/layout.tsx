import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core";
import icon from "../assets/imgs/logo-no-text.png"
config.autoAddCss = false

export const metadata: Metadata = {
  title: "Smart Generation",
  description: "The official website of the leading company in engineering and construction. With the latest advanced capabilities, we will execute a project beyond your imagination",
  icons: icon.src,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        <main>
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
