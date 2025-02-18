"use client"
import Button from "@/components/button/button";
import Bg from "../../assets/imgs/home-bg.jpg"
import ServicesCards from "@/components/servicesCards/servicesCards";
import StatsCard from "@/components/statsCard/statsCard";
import Vision from "@/components/vision/vision";
// import Testimonials from "@/components/testimonials/testimonials";
import Contact from "@/components/contact/contact";
import "./globals.css"

import {useTranslations} from 'next-intl';
import Loader from "@/components/loader/loader";
import Fields from "@/components/fields/fields";
import Why from "@/components/why/why";

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
          <div className="buttons">
            <Button href={`/${locale}/services`} l={locale} inverted={false}>
            {
            t('heroSection.btnOne')
            }
            </Button>
            <Button href={`/${locale}/contact`} l={locale} inverted={true}>
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
        <Testimonials l={locale}></Testimonials>
      </section> */}
      <section>
        <Contact l={locale}></Contact>
      </section>
    </main>
  );
}
