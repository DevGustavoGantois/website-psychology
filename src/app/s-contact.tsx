import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HomeContact() {
    return (
        <section className="max-w-[1550px] mx-auto p-6 lg:p-0 mt-10 lg:mt-20">
            <div className="bg-[#0094C7]/10 p-12 rounded-3xl">
            <div className="flex flex-col gap-8 justify-center items-center">
                <h1 data-aos="zoom-in" className=" font-primary text-4xl lg:text-5xl linear-text text-center">Vamos cuidar da sua mente <br /> juntos?</h1>
                <p data-aos="fade-up" className="text-[#262626] font-primary text-xl max-w-[550px] text-center">Agende uma conversa e descubra como a psicologia pode transformar sua vida. Entre em contato agora e dê o primeiro passo para o seu bem-estar!</p>
                <Button className="p-6 font-primary" data-aos="fade-up" data-aos-delay="200">
                    <Link href="" target="_blank">Agende sua consulta!</Link>
                </Button>
            </div>
            </div>
        </section>
    )
}