import { Button } from "@/components/ui/button";
import { HomeAboutData } from "@/data";
import Image from "next/image";
import Link from "next/link";

export function HomeAbout() {
  return (
    <section className="max-w-[1550px] mx-auto p-6 lg:p-0 mt-10 lg:mt-20" id="About">
      {HomeAboutData.map((item, index) => (
        <div key={index} className="flex flex-col lg:flex-row justify-center lg:justify-around items-center lg:items-start gap-8">
          {/* Imagem */}
          <figure className="flex justify-center lg:justify-start">
            <Image
              src="/ImgAbout.svg"
              width={600}
              height={600}
              quality={100}
              alt=""
              data-aos="flip-up"
            />
          </figure>

          {/* Texto e Botão */}
          <div className="text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
            <h1
              className="text-[#262626] text-4xl lg:text-5xl mb-4 font-primary"
              data-aos="fade-down"
            >
              {item.title}
            </h1>
            <p
              className="text-[#262626] max-w-[484px] mb-6 text-base lg:text-xl font-primary"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              {item.description}
            </p>
            <div className="flex justify-center lg:justify-start" data-aos="fade-down">
              <Button className="p-6 text-xl">
                <Link href="https://wa.me/+557196329047?text=Ol%C3%A1%20M%C3%B4nica%2C%20queria%20agendar%20uma%20consulta%2C%20qual%20a%20sua%20disponibilidade%20de%20hor%C3%A1rios%20e%20dias%3F" target="_blank" className="font-primary">
                  Fale comigo!
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
