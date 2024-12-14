import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HomeFaqData } from "@/data";

export function HomeFAQ() {
    return (
      <section className="max-w-[1300px] mx-auto p-6 lg:p-0 relative mt-6 lg:mt-12" id="FAQ">
        {HomeFaqData.map((item, index) => {
          return (
            <div key={index}>
              <div className="flex flex-col gap-2 justify-center items-stretch">
                <p className="text-xl font-extralight text-[#262626] text-center">{item.pretitle}</p>
                <h1 className="text-4xl lg:text-5xl linear-text text-center">{item.title}</h1>
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
      </section>
    );
  }