import Image from "next/image";
import { useState } from "react";
import truck from "@/assets/img/turck img1.webp"
import available from "@/assets/logo/available.webp"
import ton from '@/assets/logo/ton.webp'
import cargo from '@/assets/logo/cargo.webp'
import { FaArrowRight, FaIndianRupeeSign } from "react-icons/fa6";

export default function VehicleComparison() {
  const [vehicles] = useState([
    {
      brand: "Ashok Leyland",
      model: "AL192042",
      year: "2020",
      capacity: "12 Ton",
      type: "Cargo",
      price: "₹16.28 - 16.38 lakh",
      image: "https://via.placeholder.com/200x150?text=Vehicle+1",
    },
    {
      brand: "Ashok Leyland",
      model: "AL192042",
      year: "2021",
      capacity: "10 Ton",
      type: "Cargo",
      price: "₹16.28 - 16.38 lakh",
      image: "https://via.placeholder.com/200x150?text=Vehicle+2",
    },
  ]);

  return (
    <div className="bg-white col-span-1 rounded-2xl">
      <div className="flex justify-center relative">
        <div className="absolute top-16 px-2 font-medium h-10 w-10 rounded-[50%] text-2xl bg-primarycolor text-white">vs</div>
        <div>
          <div className="flex justify-between">
            <Image
              src={truck}
              width={240}
              alt=""
              className="border-r-4 border-dashed"
            />
            <Image
              src={truck}
              width={240}
              alt=""
              className="mx-auto"
            />
          </div>
          <div className="flex">
            <div className="my-4 mx-5 w-[12vw]">
              <h2 className="text-xl font-semibold">Ashok Leyland</h2>
              <p className="text-gray-500">Ashok Leyland AL192042</p>

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
              <div className="text-left flex font-semibold items-center justify-normal py-3 text-lg"> <FaIndianRupeeSign />16.28 - 16.38 lakh</div>

              {/* Pricing and Action */}
            </div>

            <div className="my-4 mx-5 w-[12vw]">
              <h2 className="text-xl font-semibold">Ashok Leyland</h2>
              <p className="text-gray-500">Ashok Leyland AL192042</p>

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
              <div className="text-left flex font-semibold items-center justify-normal py-3 text-lg"> <FaIndianRupeeSign />16.28 - 16.38 lakh</div>
            </div>
          </div>
          <div className="text-primarycolor pl-5 pb-4">
            <a className="">Compare vehicle <FaArrowRight className="inline-block"/></a>
          </div>
        </div>
      </div>
    </div >
  );
}
