import { Button } from "@/components/ui/button";
import { HomeAboutData } from "@/data";
import Image from "next/image";
import Link from "next/link";

export function HomeAbout() {
  return (
    <section className="max-w-[1550px] mx-auto p-6 lg:p-0 mt-10 lg:mt-20" id="About">
      {HomeAboutData.map((item, index) => {
        return (
            <div key={index}>
                <div className="flex flex-col lg:flex-row justify-center lg:justify-around">
        <figure>
          <Image src="/ImgAbout.svg" width={600} height={600} quality={100} alt="" data-aos="flip-up" />
        </figure>
        <div>
          <h1 className="text-[#262626] text-center lg:text-start mt-10 lg:mt-0 text-4xl lg:text-5xl mb-4 font-primary" data-aos="fade-down">
            {item.title}
          </h1>
          <p className="text-[#262626] text-center lg:text-start max-w-[484px] mb-6 text-xl font-primary" data-aos="fade-down" data-aos-delay="200">
            {item.description}
          </p>
          <div className="flex justify-center lg:justify-start" data-aos="fade-down">
            <Button className="p-6 text-xl">
              <Link href="" target="_blank" className="font-primary">
                Fale comigo!
              </Link>
            </Button>
          </div>
        </div>
      </div>
            </div>
        )
      })}
    </section>
  );
}
