import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HomeFaqData } from "@/data";
import Image from "next/image";

export function HomeFAQ() {
    return (
      <section className="max-w-[1440px] mx-auto p-6 lg:p-0 relative mt-6 lg:mt-12" id="FAQ">
        {HomeFaqData.map((item, index) => {
          return (
            <div key={index}>
              <div className="flex flex-col gap-2 justify-center items-stretch">
                <p className="text-xl font-extralight text-[#262626] text-center" data-aos="fade-up">{item.pretitle}</p>
                <h1 className="text-4xl lg:text-5xl linear-text text-center" data-aos="fade-down">{item.title}</h1>
              </div>
              <Accordion type="single" collapsible className="mt-6">
                {item.questionsAndAnswer.map((qa, idx) => {
                  return (
                    <AccordionItem key={idx} value={`item-${idx}`}>
                      <AccordionTrigger className="text-lg font-medium p-4 bg-white rounded-2xl hover:bg-gray-50">
                        {qa.question}
                      </AccordionTrigger>
                      <AccordionContent className="p-4 mt-2 font-primary">
                        <p className="flex justify-center text-center">{qa.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          );
        })}
        <div className="absolute top-0 -z-50 flex justify-center">
          <Image src="/LogoBg.svg" width={1200} height={500} alt="" className="opacity-50" />
        </div>
      </section>
    );
  }