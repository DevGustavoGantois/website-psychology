import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

export function Navbar() {
    return (
        <nav className="max-w-[1550px] mx-auto p-8 lg:p-6 font-primary">
            <div className="flex justify-around items-center gap-40">
            <Image src="/Logo.svg" width={70} height={200} quality={100} alt="" data-aos="fade-down" />
            <ul className="flex justify-center gap-6 text-sm" data-aos="fade-down" data-aos-delay="100">
            <Link
    className="relative text-[#262626] hover:text-[#0094c7] transition-all duration-500 group"
    href="#Home"
  >
    Home
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#0094c7] transition-all duration-500 group-hover:w-full"></span>
  </Link>
  <Link
    className="relative text-[#262626] hover:text-[#0094c7] transition-all duration-500 group"
    href="#About"
  >
    Sobre mim
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#0094c7] transition-all duration-500 group-hover:w-full"></span>
  </Link>
  <Link
    className="relative text-[#262626] hover:text-[#0094c7] transition-all duration-500 group"
    href="#Services"
  >
    Meus Serviços
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#0094c7] transition-all duration-500 group-hover:w-full"></span>
  </Link>
  <Link
    className="relative text-[#262626] hover:text-[#0094c7] transition-all duration-500 group"
    href="#Testimonials"
  >
    Depoimentos
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#0094c7] transition-all duration-500 group-hover:w-full"></span>
  </Link>
  <Link
    className="relative text-[#262626] hover:text-[#0094c7] transition-all duration-500 group"
    href="#FAQ"
  >
    FAQ
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#0094c7] transition-all duration-500 group-hover:w-full"></span>
  </Link>
  <Link
    className="relative text-[#262626] hover:text-[#0094c7] transition-all duration-500 group"
    href="#Location"
  >
    Localização
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#0094c7] transition-all duration-500 group-hover:w-full"></span>
  </Link>
  <Link
    className="relative text-[#262626] hover:text-[#0094c7] transition-all duration-500 group"
    href="#Contact"
  >
    Contato
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#0094c7] transition-all duration-500 group-hover:w-full"></span>
  </Link>
            </ul>
            <Link href="" target="_blank" data-aos="fade-down" data-aos-delay="200">
            <Button className="p-5" variant="secondary">Agende a sua consulta</Button>
            </Link>
            </div>
        </nav>
    )
}