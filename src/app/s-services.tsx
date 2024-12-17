import { Button } from "@/components/ui/button";
import { HomeServicesData } from "@/data";
import Link from "next/link";

export function HomeServices() {
  return (
    <section className="max-w-[1550px] mx-auto p-6 lg:p-0 mt-20 lg:mt-[100px] font-primary" id="Services">
      <div>
        {HomeServicesData.map((item, index) => {
          return (
            <div key={index}>
              <h1 className="linear-text text-center text-4xl lg:text-5xl mb-10" data-aos="fade-down">
                {item.title}
              </h1>
              <div className="flex flex-col xl:flex-row gap-10">
                {item.cardServices.map((card, index) => {
                  const backgroundClass =
                    index === 0
                      ? "bg-bgChild"
                      : index === 1
                      ? "bg-bgAd"
                      : "bg-bgAdult";

                  return (
                    <div
                      key={index}
                      className={`relative p-6 lg:p-10 rounded-2xl flex flex-col gap-4 lg:gap-10 bg-cover w-full  bg-center ${backgroundClass}`}
                      data-aos="fade-up"
                    >
                      <div className="absolute inset-0 bg-[#0094C7]/10 backdrop-blur-sm rounded-2xl"></div>
                      <div className="relative flex flex-col items-center p-4 rounded-lg text-white">
                        <h2 className="text-3xl lg:text-4xl font-light text-center mb-2">
                          {card.title}
                        </h2>
                        <h3 className="text-xl font-medium text-center mb-5">
                          {card.subtitle}
                        </h3>
                        <ul className="list-disc flex flex-col gap-3 text-center text-base">
                          {card.topics.map((topicItem, topicIndex) => (
                            <li key={topicIndex}>{topicItem.topic}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="z-50 flex justify-center">
                      <Button className="w-full h-full transition-all duration-700 hover:bg-white hover:text-[#0096c7]">
                        <Link href="https://wa.me/+557196329047?text=Ol%C3%A1%20M%C3%B4nica%2C%20queria%20agendar%20uma%20consulta%2C%20qual%20a%20sua%20disponibilidade%20de%20hor%C3%A1rios%20e%20dias%3F" target="_blank">Agende sua sessão!</Link>
                      </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
