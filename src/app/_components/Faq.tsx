"use client"

import Image from "next/image"
import { useState } from "react"
import faq from "@/assets/img/faq.webp"
export default function FAQSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Email submitted:", email)
    setEmail("")
  }

  return (
    <div className="w-10/12 mx-auto px-4 py-12">
      <div className="flex justify-around items-center gap-8">
        {/* Left column with image and title */}
        <div className="">
          <Image
            src={faq}
            alt="FAQ Illustration"
            width={600}
            height={600}
          />
          <h2 className="text-4xl font-bold">FAQs</h2>
          <p className="text-lg text-gray-600">
            Frequently Asked Questions.
            <br />
            Here are some common questions about Cavalo.
          </p>
        </div>

        {/* Right column with FAQ items */}
        <div className="w-5/6 p-5">
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
            <details key={index} className="group border-b pb-4 transition-all py-2 duration-300" onToggle={(e) => {
              if (e.currentTarget.open) {
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
  )
}

