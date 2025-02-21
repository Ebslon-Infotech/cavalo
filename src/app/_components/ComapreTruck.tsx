import Image from "next/image";
import { useState } from "react";
import truck from "@/assets/img/turck img1.webp"
import available from "@/assets/logo/available.webp"
import ton from '@/assets/logo/ton.webp'
import cargo from '@/assets/logo/cargo.webp'
import { FaArrowRight } from "react-icons/fa6";
import leftTruck from "@/assets/img/leftTruck.webp"
import rightTruck from "@/assets/img/rightTruck.webp"
import Link from "next/link";
import { CalenderSvg } from "@/components/svg";

export default function ComapreTruck({ className }: { className?: string }) {


  return (
    <div className={`grid grid-cols-2 bg-white rounded-md border border-lightgray ${className ? className : ""}`}>
      <div className="col-span-1">

        <div className={`bg-white `}>
          {/* Truck Image Carousel */}
          <div className="relative flex justify-start items-end h-[200px] bg-[#E6E6E7]">
            <Image
              className="h-[80%] object-contain"
              width={200}
              src={leftTruck}
              alt="Truck"
            />
            <div className="line absolute w-2 h-[80%] border-r border-dashed  border-[#000000] top-[50%] translate-y-[-50%] right-0"></div>
            <div className="absolute bg-primarycolor top-[50%] translate-y-[-50%] right-[-20px] h-[40px] w-[40px] flex items-center justify-center text-white font-semibold rounded-full">VS</div>
          </div>
          {/* Location Tag */}

          {/* Card Content */}
          <div className="text-sm">
            <div className="px-[1pc] my-[1pc] border-r border-dashed border-[#000000]">
              <h2 className="text-lg font-semibold">Ashok Leyland</h2>
              <p className="text-gray-500 text-xs">Ashok Leyland 1920 4X2 Tipper | AL192042</p>

              {/* Info Icons Section */}
              <div className="flex justify-between mt-5 py-2 text-sm border-t-2 border-b-2 text-gray-600">
                <div className="text-center flex flex-col items-center">
                  <CalenderSvg />
                  <p>2020</p>
                </div>
                <div className="text-center flex flex-col items-center">
                  <Image src={ton} width={13} height={13} alt="no image" />
                  <p>12 Ton</p>
                </div>
                <div className="text-center flex flex-col items-center">
                  <Image src={cargo} width={13} height={13} alt="no image" />
                  <p>Cargo</p>
                </div>
              </div>

              {/* Pricing and Action */}
              <div className="flex justify-start flex-col items-start my-5">
                <div>
                  <p className="text-lg font-meduim font-bold">₹1,00,000</p>
                </div>
              </div>

            </div>
            <Link href="/vehicle-details" className="px-[1pc] flex items-center text-primarycolor text-lg font-semibold pb-5 ">
              comapre vehicles <FaArrowRight />
            </Link>
          </div>
        </div>

      </div>
      <div className="col-span-1">

        <div className={`bg-white`}>
          {/* Truck Image Carousel */}
          <div className="flex justify-end items-end h-[200px] bg-[#E6E6E7]">
            <Image
              className="h-[80%] object-contain"
              width={200}
              src={rightTruck}
              alt="Truck"
            />
          </div>
          {/* Location Tag */}

          {/* Card Content */}
          <div className="my-4 text-sm mx-5">
            <h2 className="text-lg font-semibold">Ashok Leyland</h2>
            <p className="text-gray-500 text-xs">Ashok Leyland 1920 4X2 Tipper | AL192042</p>

            {/* Info Icons Section */}
            <div className="flex justify-between mt-5 py-2 text-sm border-t-2 border-b-2 text-gray-600">
              <div className="text-center flex flex-col items-center">
                <CalenderSvg />
                <p>2020</p>
              </div>
              <div className="text-center flex flex-col items-center">
                <Image src={ton} width={13} height={13} alt="no image" />
                <p>12 Ton</p>
              </div>
              <div className="text-center flex flex-col items-center">
                <Image src={cargo} width={13} height={13} alt="no image" />
                <p>Cargo</p>
              </div>
            </div>

            {/* Pricing and Action */}
            <div className="flex justify-start flex-col items-start my-5">
              <div>
                <p className="text-lg font-meduim font-bold">₹1,00,000</p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
