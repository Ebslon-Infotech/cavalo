"use client";

import React, { useState } from "react";

import SellVehicle from "@/app/_components/sellVehicle";
import Thankyou from "@/components/Thankyou";

export default function page() {
  const [trigger, setTrigger] = useState(false);

  return (
    <>
      <div className="rounded-lg my-10 p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.1)] mx-[15rem]">
        <div className="flex flex-col items-start gap-2">
          <h1 className="font-semibold text-[2.35rem]">
            Sell Your Vehicle in a
            <span className="text-primarycolor"> Few Steps Only!</span>
          </h1>
          <p className="text-[1.35rem] font-medium text-gray-600/60">
            Experience a stress free journey to sell your vehicle effortlessly
            with us.
          </p>
        </div>

        <div className="mt-10 flex gap-6 items-start">
          {!trigger ? <SellVehicle trigger={setTrigger} /> : <Thankyou />}
        </div>
      </div>
    </>
  );
}
