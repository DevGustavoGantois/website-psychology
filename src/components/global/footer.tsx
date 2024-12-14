import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaTelegram, FaEnvelope, FaInstagram } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-[#0094C7]/50 font-primary rounded-t-3xl mt-40 lg:mt-[100px]">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start p-8 max-w-[1440px] mx-auto lg:p-12">
        <div className="mb-8 lg:mb-0 flex justify-center lg:justify-start">
          <Image src="/Logo.svg" width={300} height={300} alt="Logo" />
        </div>
        <div className="text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-white text-3xl mb-5">Navegação</h1>
          <ul className="flex flex-col gap-4 text-white">
            <Link href="#Home"><li>Home</li></Link>
            <Link href="#About"><li>Sobre mim</li></Link>
            <Link href="#Services"><li>Meus Serviços</li></Link>
            <Link href="#Testimonials"><li>Depoimentos</li></Link>
            <Link href="#FAQ" target="_blank"><li>FAQ</li></Link>
            <Link href="#Location"><li>Localização</li></Link>
            <Link href="#Contact"><li>Contato</li></Link>
          </ul>
        </div>
        <div className="text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-white text-3xl">Onde estou?</h1>
          <p className="mt-4 max-w-[300px] text-center lg:text-left text-white mx-auto lg:mx-0">
            Rua Alceu Amoroso Lima, 172 - Edf. Salvador Office e Pool - Caminho das Árvores - Salvador/BA
          </p>
        </div>

        <div className="text-center lg:text-left">
          <h1 className="text-white text-3xl mb-5">Social</h1>
          <div className="grid grid-cols-2 gap-3 text-white mx-auto lg:mx-0">
            <Link href="" target="_blank"><FaInstagram size={30} /></Link>
            <Link href="" target="_blank"><FaWhatsapp size={30} /></Link>
            <Link href="" target="_blank"><FaTelegram size={30} /></Link>
            <Link href="" target="_blank"><FaEnvelope size={30} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
