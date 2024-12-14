import { Button } from "@/components/ui/button";
import { HomeContactData } from "@/data";
import Link from "next/link";

export function HomeContact() {
    return (
        <section className="max-w-[1300px] mx-auto p-6 lg:p-0 mt-10 lg:mt-20 z-50" id="Contact">
            <div className="bg-[#0094C7]/10 p-14 rounded-3xl">
            {HomeContactData.map((item, index) => {
                return (
                    <div key={index}>
                        <div className="flex flex-col gap-8 justify-center items-center">
                <h1 data-aos="zoom-in" className=" font-primary text-4xl lg:text-5xl linear-text text-center">{item.title}</h1>
                <p data-aos="fade-up" className="text-[#262626] font-primary text-xl max-w-[550px] text-center">{item.description}</p>
                <Button className="p-6 font-primary" data-aos="fade-up" data-aos-delay="200">
                    <Link href="" target="_blank">Agende sua consulta!</Link>
                </Button>
            </div>
                    </div>
                )
            })}
            </div>
        </section>
    )
}