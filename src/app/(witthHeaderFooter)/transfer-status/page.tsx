"use client"

import Link from "next/link"
import React from "react"
import assistance from "@/assets/img/rc/assistance.webp"
import finance from "@/assets/img/rc/finances.webp"
import support from "@/assets/img/rc/support.webp"
import Image from "next/image"
export default function Page() {
  return (
    <div className="my-10 mx-auto py-12 max-w-7xl">
      <div className="grid md:grid-cols-2 gap-20">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">
            Check your
            <br />
            RC <span className="text-[#F5B544]">Transfer Status</span>
          </h1>

          <p className="text-gray-600 leading-relaxed">
            At Cavalo, we understand that transferring ownership of a truck can be a daunting task. That's why we've
            made the process quick and easy for you. Simply fill the form, provide the necessary details and documents,
            and we'll handle the rest. With Cavalo, you can trust that your truck's ownership transfer will be
            hassle-free and efficient. So why wait? Transfer your truck's ownership with Cavalo today
          </p>

          <p className="text-gray-600">
            The policy provides you multifold benefits once you sell your truck with us. For more details on the same,
            read the{" "}
            <Link href="/faq" className="text-blue-600 hover:underline">
              FAQs
            </Link>{" "}
            or{" "}
            <Link href="/contact-us" className="text-blue-600 hover:underline">
              Contact Us
            </Link>
            !
          </p>
        </div>

        <div className="space-y-8">
          <div className="flex gap-6 items-center justify-center">
            <div className="w-24 h-24">
              <Image
                src={assistance}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Quick & Fast Assistance</h3>
              <p className="text-gray-600">
                At every step till the RC Transfer process is complete, we are here to help.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-center justify-center">
            <div className="w-24 h-24">
              <Image
                src={finance}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Full-Fledged Legal Support</h3>
              <p className="text-gray-600">
                In any rare scenario fith issue in the process we are here with Full Legal Support.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-center justify-center">
            <div className="w-24 h-24">
              <Image
                src={support}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">All Finances Covered</h3>
              <p className="text-gray-600">
                For any expenses incurred due to challan, or an accident with the vehicle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

