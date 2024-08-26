import Button from "@/components/button/button";
import Image from "next/image";
import Bg from "../assets/imgs/home-bg.jpg"

export default function Home() {
  return (
    <main>
      <section className="home" style={{backgroundImage: `url(${Bg.src})`}}>
        <div className="overlay"></div>
        <div className="container">
          <div>
            <h1>
              سمارت جينيريشن,
            </h1>
            <h2>
              ترحب بكم
            </h2>
          </div>
          <p>
            نرحب بكم في الموقع الرسمي للشركة الرائدة في مجال الهندسة والبناء باحدث الامكانيات المتطورة سوف ننفذ لك مشروع يفوق الخيال
          </p>
          <div className="buttons">
            <Button inverted={false}>
              جميع خدمتنا
            </Button>
            <Button inverted={true}>
              اتصل بنا 
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
