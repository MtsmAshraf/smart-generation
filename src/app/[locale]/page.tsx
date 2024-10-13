"use client"
import Button from "@/components/button/button";
import Image from "next/image";
import Bg from "../../assets/imgs/home-bg.jpg"
import ServicesCards from "@/components/servicesCards/servicesCards";
import StatsCard from "@/components/statsCard/statsCard";
import Vision from "@/components/vision/vision";
import Testimonials from "@/components/testimonials/testimonials";
import Contact from "@/components/contact/contact";
import "./globals.css"

import {useTranslations} from 'next-intl';

export default function Home({
  params: {locale}
}: {
  params: {locale: string}
}) {
  const t = useTranslations('HomePage');
  return (
    <main>
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
            <Button inverted={false}>
            {
            t('heroSection.btnOne')
            }
            </Button>
            <Button inverted={true}>
            {
            t('heroSection.btnTwo')
            }
            </Button>
          </div>
        </div>
      </section>
      <section>
        <StatsCard></StatsCard>
      </section>
      <section>
        <div className="container">
          <ServicesCards></ServicesCards>
        </div>
      </section>
      <section>
        <Vision></Vision>
      </section>
      <section>
        <Testimonials></Testimonials>
      </section>
      <section>
        <Contact></Contact>
      </section>
    </main>
  );
}
