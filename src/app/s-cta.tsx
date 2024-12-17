import { Button } from "@/components/ui/button";
import { HomeCTAData } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";

export function CTASection() {
  return (
    <section className="bg-[#0094C7]/70 bg-bgCta bg-cover bg-center w-full h-full py-10 mt-20 lg:mt-[250px] relative font-primary">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-10 p-6">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
          {HomeCTAData.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h1 className="text-white font-light text-3xl lg:text-5xl mb-4" data-aos="fade-up">
                Me siga nas redes sociais e venha <br /> se reconectar com você mesmo(a)!
              </h1>
              <p className="text-white text-base lg:text-xl max-w-[600px]" data-aos="fade-up" data-aos-delay="200">
                {item.description}
              </p>
            </div>
          ))}
          <div className="mt-6 flex flex-col lg:flex-row gap-4">
            <Button>
              <Link href="https://www.instagram.com/psi.monicaaran/?igsh=MWRnZjFoeHBwNnYxOQ%3D%3D" target="_blank" className="flex items-center gap-4">
                Instagram <FaInstagram size={20} />
              </Link>
            </Button>
            <Button>
              <Link href="https://wa.me/+557196329047?text=Ol%C3%A1%20M%C3%B4nica%2C%20queria%20agendar%20uma%20consulta%2C%20qual%20a%20sua%20disponibilidade%20de%20hor%C3%A1rios%20e%20dias%3F" target="_blank" className="flex items-center gap-4">
                Whatsapp <FaWhatsapp size={20} />
              </Link>
            </Button>
            <Button>
              <Link href="https://t.me/Monica_Aran" target="_blank" className="flex items-center gap-4">
                Telegram <FaTelegram size={20} />
              </Link>
            </Button>
          </div>
        </div>
        <div className="hidden xl:flex">
          <Image
            src="/MonicaAran.svg"
            width={400}
            height={300}
            alt="Ilustração"
            className="absolute -top-[178px] right-20"
          />
        </div>
      </div>
    </section>
  );
}
