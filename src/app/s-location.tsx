import { HomeLocationData } from "@/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HomeLocation() {
  return (
    <section className="max-w-[1440px] mx-auto p-6 lg:p-0 font-primary mt-20 lg:mt-[100px]" id="Location">
      {HomeLocationData.map((item, index) => {
        return (
          <div key={index}>
            <h1 className="linear-text text-4xl lg:text-5xl text-center">
              {item.title}
            </h1>
            <p className="text-center mt-2 text-[#262626]">{item.subtitle}</p>
            <div className="mt-10 lg:mt-20 flex flex-col lg:flex-row gap-4">
              <div className="relative group w-full lg:w-auto overflow-hidden">
                <Image
                  src="/Location1.svg"
                  width={500}
                  height={200}
                  quality={100}
                  alt="Localização 1"
                  className="rounded-md"
                  data-aos="fade-right"
                />
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <Link
                    href="https://wa.me/+557196329047?text=Ol%C3%A1%20M%C3%B4nica%2C%20queria%20agendar%20uma%20consulta%2C%20qual%20a%20sua%20disponibilidade%20de%20hor%C3%A1rios%20e%20dias%3F"
                    target="_blank"
                    className="text-white text-lg font-light flex items-center gap-2"
                  >
                    {item.cta} <ArrowRight className="-rotate-45" />
                  </Link>
                </div>
              </div>

              <div className="relative group w-full lg:w-auto overflow-hidden">
                <Image
                  src="/Location2.svg"
                  width={505}
                  height={200}
                  quality={100}
                  alt="Localização 2"
                  className="rounded-md"
                  data-aos="fade-right"
                />
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <Link
                    href="https://wa.me/+557196329047?text=Ol%C3%A1%20M%C3%B4nica%2C%20queria%20agendar%20uma%20consulta%2C%20qual%20a%20sua%20disponibilidade%20de%20hor%C3%A1rios%20e%20dias%3F"
                    target="_blank"
                    className="text-white text-lg font-light flex items-center gap-2"
                  >
                    {item.cta} <ArrowRight className="-rotate-45" />
                  </Link>
                </div>
              </div>
              <div className="relative group w-full lg:w-auto overflow-hidden">
                <Image
                  src="/Location3.svg"
                  width={497}
                  height={200}
                  quality={100}
                  alt="Localização 3"
                  className="rounded-md"
                  data-aos="fade-right"
                />
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <Link
                    href="https://wa.me/+557196329047?text=Ol%C3%A1%20M%C3%B4nica%2C%20queria%20agendar%20uma%20consulta%2C%20qual%20a%20sua%20disponibilidade%20de%20hor%C3%A1rios%20e%20dias%3F"
                    target="_blank"
                    className="text-white text-lg font-light flex items-center gap-2"
                  >
                    {item.cta} <ArrowRight className="-rotate-45" />
                  </Link>
                </div>
              </div>
              <div className="relative group w-full lg:w-auto overflow-hidden">
                <Image
                  src="/Location4.svg"
                  width={479}
                  height={200}
                  quality={100}
                  alt="Localização 4"
                  className="rounded-md"
                  data-aos="fade-right"
                />
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <Link
                    href="https://wa.me/+557196329047?text=Ol%C3%A1%20M%C3%B4nica%2C%20queria%20agendar%20uma%20consulta%2C%20qual%20a%20sua%20disponibilidade%20de%20hor%C3%A1rios%20e%20dias%3F"
                    target="_blank"
                    className="text-white text-lg font-light flex items-center gap-2"
                  >
                    {item.cta} <ArrowRight className="-rotate-45" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
