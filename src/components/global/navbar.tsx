import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

export function Navbar() {
    return (
        <nav className="max-w-[1550px] mx-auto p-8 lg:p-6 font-primary">
            <div className="flex justify-around items-center gap-40">
            <Image src="/Logo.svg" width={70} height={200} quality={100} alt="" />
            <ul className="flex justify-center gap-6 text-sm">
                <a href="#Home">Home</a>
                <a href="#About">Sobre mim</a>
                <a href="#Services">Meus Serviços</a>
                <a href="#Testimonials">Depoimentos</a>
                <a href="#FAQ">FAQ</a>
                <a href="#Location">Localização</a>
                <a href="#Contact">Contato</a>
            </ul>
            <Link href="" target="_blank">
            <Button className="p-5" variant="secondary">Agende a sua consulta</Button>
            </Link>
            </div>
        </nav>
    )
}