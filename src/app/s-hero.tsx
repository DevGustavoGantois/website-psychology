import { HomeHeroData } from "@/data";
import Image from "next/image";

export function HomeHero() {
    return (
        <section className="max-w-[1550px] mx-auto p-8 lg:p-6 mt-20">
            <div className="flex flex-col items-center lg:flex-row justify-center gap-32 lg:justify-between">
            <div className="">
                {HomeHeroData.map((item, index) => {
                    return (
                        <div key={index}>
                            <p className="text-xl font-light">{item.pretitle}</p>
                            <h1 className="font-primary text-4xl lg:text-5xl font-semibold max-w-[600px]">{item.title}</h1>
                            <p className="mt-4 max-w-[1400px]">{item.description}</p>
                        </div>

                    )
                })}
            </div>
            <div>
                <Image src="/CTARectangle.svg" width={1200} height={1200} alt="" quality={100} />
            </div>
            </div>
        </section>
    )
}