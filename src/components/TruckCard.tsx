import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import ton from '@/assets/logo/ton.webp'
import cargo from '@/assets/logo/cargo.webp'
import available from '@/assets/logo/available.webp'
import { CiLocationOn } from 'react-icons/ci'
import truck from '@/assets/img/turck img1.webp'


export default function TruckCard() {
  return (
    <div className="w-3xl group rounded-2xl border-2 bg-white z-10">
      <div className="relative">
        {/* Truck Image Carousel */}
        <Image
          className="w-full"
          src={truck}
          alt="Truck"
        />
        {/* Location Tag */}
      </div>

      {/* Card Content */}
      <div className="relative h-[2vh]">
        <div className="absolute flex justify-center items-center gap-1 font-semibold top-0 transition-all delay-75 duration-200 -right-3 bg-black text-white px-4 z-20 py-1 text-lg rounded-tr-xl rounded-bl-xl z-4 group-hover:bg-primarycolor">
          <CiLocationOn />
          Mumbai
        </div>
        <div className="absolute transition-all delay-75 duration-200 bg-black -right-2 top-7 z-0 transform rotate-45 h-[15px] w-[15px] group-hover:bg-primarycolor"></div>
      </div>
      <div className="my-4 mx-5">
        <h2 className="text-xl font-semibold">Ashok Leyland</h2>
        <p className="text-gray-500">Ashok Leyland 1920 4X2 Tipper | AL192042</p>

        {/* Info Icons Section */}
        <div className="flex justify-between mt-5 py-2 text-sm border-t-2 border-b-2 text-gray-600">
          <div className="text-center flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 1024 1024">
              <path fill="currentColor" d="m960 95.888l-256.224.001V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985m0 863.985H64v-800h255.776v32.24c0 17.679 14.32 32 32 32s32-14.321 32-32v-32.224h256v32.24c0 17.68 14.32 32 32 32s32-14.32 32-32v-32.24H960zM736 511.888h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32m0 255.984h64c17.664 0 32-14.32 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.696 14.336 32 32 32m-192-128h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32m0-255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32m-256 0h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32m0 255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32" />
            </svg>
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
          <div className="text-center flex flex-col items-center">
            <Image src={available} width={13} height={13} alt="no image" />
            <p>Available</p>
          </div>
        </div>

        {/* Pricing and Action */}
        <div className="flex justify-between items-center my-5">
          <div>
            <p className="text-sm font-meduim text-gray-500">EMI Starts from</p>
            <p className="text-xl font-bold text-primarycolor">₹15,000 <span className='text-sm text-black font-light'>/months</span></p>
          </div>
          <button className="flex items-center gap-2 font-medium">
            See details <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}

