"use client";

import React, { useState } from "react";
import Image from "next/image";
import representation from "@/assets/img/representation.webp";

import VehicleRepresentation from "@/app/_components/vehicleRepresentation";
import Thankyou from "@/components/Thankyou";

export default function page() {
  
  const [trigger,setTrigger] = useState(false);

  return (
    <>
      <div className="rounded-lg my-10 p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.1)] mx-[15rem]">
        <div className="flex flex-col items-start gap-2">
          <h1 className="font-semibold text-[2.35rem]">
            Wheels and Wonders:
            <span className="text-primarycolor">
              {" "}
              Find Your Perfect Vehicle!
            </span>
          </h1>
          <p className="text-[1.35rem] font-medium text-gray-600/60">
            Please fill out the forms below to help us understand your
            requirements and we will provide you with the best options
          </p>
        </div>

        <div className="mt-10 flex gap-6 items-start">
          

          {!trigger ? (
            <div className="flex gap-6">
            <div className="w-[30%]">
            <Image src={representation} alt="vehicle" height={900} />
          </div>
          <VehicleRepresentation trigger={setTrigger} />
          </div>
          ) : (
            <Thankyou />
          )}
        </div>
      </div>
    </>
  );
}

