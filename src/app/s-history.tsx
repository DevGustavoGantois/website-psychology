import { HomeHistoryData } from "@/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function HomeHistory() {
  return (
    <section className="max-w-[1440px] mx-auto p-6 lg:p-0" id="History">
      <div className="mt-10 lg:mt-[100px]">
        <div className="hidden md:flex justify-center" data-aos="fade-up">
          <Image
            src="/TitleHistory.svg"
            width={900}
            height={200}
            alt="Título histórico"
          />
        </div>
        {HomeHistoryData.map((item, index) => (
          <div key={index}>
            <div className="flex md:hidden">
              <h1 className="text-center linear-text text-3xl">{item.title}</h1>
            </div>
            <div className="grid gap-6 lg:gap-10 mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
              {item.cards.map((card, cardIndex) => (
                <div
                  key={cardIndex}
                  className="p-6 lg:p-14 bg-[#0094C7]/10 transition-all duration-700 hover:scale-[0.9] rounded-2xl"
                >
                  <div className="flex flex-col lg:flex-row lg:justify-between items-end lg:items-center">
                    <div className="text-left mb-4 lg:mb-0">
                      <h2 className="text-2xl lg:text-3xl font-extralight linear-text mb-6">
                        {card.title}
                      </h2>
                      <p className="text-black text-base lg:text-xl max-w-[500px] font-primary">
                        {card.description}
                      </p>
                    </div>
                    <div>
                      <div className="p-2 border border-[#0094c7] rounded-full mt-4 lg:mt-0">
                        <ArrowRight className="text-[#0094c7] -rotate-45 hover:rotate-0 hover:scale-[1.1] lg:text-9 transition-transform size-6 lg:size-8" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
