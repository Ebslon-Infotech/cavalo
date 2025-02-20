"use client"
import React from 'react'

export default function page() {

  const [active, setActive] = React.useState<number | null>(0);
  const [faqtoggle, setFaqtoggle] = React.useState([])
  return (
    <div className='mx-auto w-4/5'>
      <div className='rounded-lg my-10 p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.1)]'>
        <div className='flex flex-col gap-3 justify-start items-start'>
          <h1 className="text-3xl font-semibold">Frequently Asked <span className="text-primarycolor">Questions</span></h1>
          <p className='font-medium text-xl text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptatum!</p>
          <div className='flex w-full gap-10'>
            <div className='basis-4/12 flex flex-col bg-[#F6F6F6] rounded-md h-max'>
              {
                Array.from((new Array(5)).keys()).map((_, i) => (
                  <div key={i} className={`p-3 font-semibold text-sm w-full border-b ${active === i ? "bg-primarycolor" : "bg-#F6F6F6]"} ${i === 0 ? "rounded-t-md" : i === 4 && "rounded-b-md"}`} onClick={() => setActive(i)}>
                    General Questions
                  </div>
                ))
              }
            </div>
            {/* faq questions */}
            <div className="w-5/6">
              {[
                {
                  question: "Why buy a used faq from Cavalo?",
                  answer:
                    "With complete confidence and no compromises, Cavalo removes the danger and uncertainty associated with purchasing a secondhand faq. Only the best quality certified used faqs are offered in your location, thanks to our background check. A faq that is certified by Cavalo Assured must go through an extensive inspection that looks at the condition of every component of the faq before it can be certified. Being Cavalo Assured needs perfection. All Cavalo Guaranteed faqs have simple paperwork, free RC transfers, and vehicle financing choices with cheap interest rates starting at XX%. You can buy a faq that is ideal for your business and work by going through a transparent, reasonable, and safe approach.",
                },
                {
                  question: "What makes cavalo the best place to sell my faq?",
                  answer: "Contact Cavalo for detailed information about selling your faq.",
                },
                {
                  question: "Will Cavalo help me in arranging for finance?",
                  answer: "Yes, Cavalo provides financing options with competitive interest rates.",
                },
                {
                  question: "How long does it take to sell my faq?",
                  answer: "The selling process duration varies based on market conditions and your faq's details.",
                },
                {
                  question: "What all factors impact the prices of my faq?",
                  answer: "Multiple factors including age, condition, mileage, and market demand affect faq prices.",
                },
                {
                  question: "How much fee do you charge for RC Transfer?",
                  answer: "Contact our support team for current RC transfer fee information.",
                },
              ].map((faq: any, index) => (
                <details key={index} className="group border-b pb-4 transition-all duration-300" open={index === 0} onToggle={(e) => {
                  if (e.currentTarget.open) {
                    console.log("trigggered")
                    document.querySelectorAll('details').forEach((detail) => {
                      if (detail !== e.currentTarget) {
                        detail.removeAttribute('open');
                      }
                    });
                  }
                }}>
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <span className="font-medium text-xl">{faq.question}</span>
                    <span className="transform transition-transform font-medium text-2xl duration-200">
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">-</span>
                    </span>
                  </summary>
                  <div className="mt-4 text-gray-600 transition-max-height duration-300 ease-in-out overflow-hidden max-h-0 group-open:max-h-screen">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
