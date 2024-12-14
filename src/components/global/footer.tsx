import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaTelegram, FaEnvelope, FaInstagram } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-[#0094C7]/50 font-primary rounded-t-3xl mt-40 lg:mt-[100px]">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start p-8 max-w-[1440px] mx-auto lg:p-12">
        <div className="mb-8 lg:mb-0 flex justify-center lg:justify-start">
          <Image src="/Logo.svg" width={200} height={300} alt="Logo" />
        </div>
        <div className="text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-white text-3xl mb-5">Navegação</h1>
          <ul className="flex flex-col gap-4 text-white">
            <Link href="#Home"><li>Home</li></Link>
            <Link href="#About"><li>Sobre mim</li></Link>
            <Link href="#Services"><li>Meus Serviços</li></Link>
            <Link href="#Testimonials"><li>Depoimentos</li></Link>
            <Link href="#FAQ"><li>FAQ</li></Link>
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
            <Link className="hover:scale-[1.1] transition-all duration-700" href="https://www.instagram.com/psi.monicaaran/?igsh=MWRnZjFoeHBwNnYxOQ%3D%3D" target="_blank"><FaInstagram size={30} /></Link>
            <Link className="hover:scale-[1.1] transition-all duration-700" href="https://wa.me/+557196329047?text=Ol%C3%A1%20M%C3%B4nica%2C%20queria%20agendar%20uma%20consulta%2C%20qual%20a%20sua%20disponibilidade%20de%20hor%C3%A1rios%20e%20dias%3F" target="_blank"><FaWhatsapp size={30} /></Link>
            <Link className="hover:scale-[1.1] transition-all duration-700" href="https://t.me/Monica_Aran" target="_blank"><FaTelegram size={30} /></Link>
            <Link className="hover:scale-[1.1] transition-all duration-700" href="mailto:psi.monicaaran@gmail.com" target="_blank"><FaEnvelope size={30} /></Link>
          </div>
        </div>
      </div>
      <div className="text-center mb-4 mt-10 text-white font-light">
        <p>@copryght. Todos os Direitos Reservados. Monica Aran 2024</p>
      </div>
      <div className="text-center text-white/70 font-light">
        <Link href="https://www.instagram.com/devgustavogantois_/?hl=pt-br" target="_blank">Desenvolvido por @devgustavogantois_</Link>
      </div>
    </footer>
  );
}
