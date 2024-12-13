import { MoreHorizontal } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export function NavbarMobile() {
    return (
        <section>
            <Sheet>
                <SheetTrigger className="absolute top-4 right-4">
                <MoreHorizontal className="text-[#0094c7]" size={40} />
                </SheetTrigger>
                <SheetContent className="flex flex-col">
                <SheetHeader>
                    <SheetTitle className="flex justify-center mt-20">
                        <Image src="/Logo.svg" width={150} height={200} alt="" />
                    </SheetTitle>
                </SheetHeader>
                <SheetDescription>
                <span className="flex flex-col items-center mt-10">
            <span className="flex justify-center flex-col text-center gap-6 text-xl">
            <Link
    className="relative text-[#0094c7] transition-all duration-500 group"
    href="#Home"
  >
    Home
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#0094c7] transition-all duration-500 group-hover:w-full"></span>
  </Link>
  <Link
    className="relative text-[#0094c7] transition-all duration-500 group"
    href="#About"
  >
    Sobre mim
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#0094c7] transition-all duration-500 group-hover:w-full"></span>
  </Link>
  <Link
    className="relative text-[#0094c7] transition-all duration-500 group"
    href="#Services"
  >
    Meus Serviços
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#0094c7] transition-all duration-500 group-hover:w-full"></span>
  </Link>
  <Link
    className="relative text-[#0094c7] transition-all duration-500 group"
    href="#Testimonials"
  >
    Depoimentos
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#0094c7] transition-all duration-500 group-hover:w-full"></span>
  </Link>
  <Link
    className="relative  text-[#0094c7] transition-all duration-500 group"
    href="#FAQ"
  >
    FAQ
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#0094c7] transition-all duration-500 group-hover:w-full"></span>
  </Link>
  <Link
    className="relative  text-[#0094c7] transition-all duration-500 group"
    href="#Location"
  >
    Localização
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#0094c7] transition-all duration-500 group-hover:w-full"></span>
  </Link>
  <Link
    className="relative  text-[#0094c7] transition-all duration-500 group"
    href="#Contact"
  >
    Contato
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#0094c7] transition-all duration-500 group-hover:w-full"></span>
  </Link>
            </span>
            <Link href="" target="_blank" className="mt-10">
            <Button className="p-5" variant="secondary">Agende a sua consulta</Button>
            </Link>
            </span>
                </SheetDescription>
                </SheetContent>
            </Sheet>
        </section>
    )
}