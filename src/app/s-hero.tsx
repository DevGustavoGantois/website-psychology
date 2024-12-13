"use client";
import { Button } from "@/components/ui/button";
import { HomeHeroData } from "@/data";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HomeHero() {
  return (
    <section>
      <div className="max-w-[1550px] mx-auto p-8 lg:p-6 mt-40 lg:mt-0">
        <div className="flex flex-col items-center lg:flex-row justify-center gap-32 lg:justify-between">
          <div>
            {HomeHeroData.map((item, index) => {
              return (
                <div key={index} className="-mt-10">
                  <p
                    className="text-center lg:text-start text-sm lg:text-xl font-extralight linear-text"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    {item.pretitle}
                  </p>
                  <div className="flex justify-center lg:justify-start">
                    <h1
                      className="text-center lg:text-start font-primary text-3xl lg:text-5xl font-semibold max-w-[600px] mt-2 lg:mt-0"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      {item.title}
                    </h1>
                  </div>
                  <div className="hidden md:flex">
                    <p
                      className="mt-4 max-w-[1400px] text-[#262626] text-center lg:text-start text-sm md:text-base"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      {item.description}
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center lg:justify-start lg:flex-row gap-4 mt-6">
                    <Link href="#About" data-aos="zoom-in">
                      <Button>
                        Saiba mais
                        <div className="bg-white p-1 rounded-full text-[#0094C7]">
                          <ArrowDown />
                        </div>
                      </Button>
                    </Link>
                    <Link href="#Servicos" data-aos="zoom-in">
                      <Button variant="link">Conheça meus Serviços</Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="-mt-24 lg:mt-0" data-aos="fade-left">
            <Image
              src="/CTARectangle.svg"
              width={1200}
              height={300}
              alt=""
              quality={100}
            />
          </div>
        </div>
      </div>
      <div>
  
      </div>
    </section>
  );
}
