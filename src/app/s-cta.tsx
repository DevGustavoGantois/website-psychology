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
              <h1 className="text-white font-light text-3xl lg:text-5xl mb-4">
                Me siga nas redes sociais e vamos <br /> bater esse papo!
              </h1>
              <p className="text-white text-base lg:text-xl max-w-[600px]">
                {item.description}
              </p>
            </div>
          ))}
          {/* Botões */}
          <div className="mt-6 flex flex-col lg:flex-row gap-4">
            <Button>
              <Link href="" target="_blank" className="flex items-center gap-4">
                Instagram <FaInstagram size={20} />
              </Link>
            </Button>
            <Button>
              <Link href="" target="_blank" className="flex items-center gap-4">
                Whatsapp <FaWhatsapp size={20} />
              </Link>
            </Button>
            <Button>
              <Link href="" target="_blank" className="flex items-center gap-4">
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
