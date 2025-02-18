import { Button, TextField } from "@mui/material";
import { FaArrowRight, FaMagnifyingGlass } from "react-icons/fa6";
import truck from '@/assets/Logo/New Truck.webp'
import Image from "next/image";
export default function HeroSection() {
  return (
    <>
      <section className="relative">
        {/* First Section with Background Image */}
        <div className="h-[60vh] bg-[url('@/assets/img/bannerbackground.webp')] bg-cover bg-center">
          <div className="absolute sm:top-[80%] left-1/2 transform -translate-x-1/2 w-4/6 bg-white p-10 rounded-xl shadow-2xl flex flex-col gap-6">
            <h2 className="text-center text-3xl font-semibold mb-6">
              Search the <span className="text-primarycolor">Right Vehicle</span>
            </h2>
            <div className="flex gap-4">
              {/* Select Brand */}
              <TextField
                name="brands"
                select
                label="Brands"
                className="flex-1  bg-white border-gray-400  placeholder-gray-500"
                SelectProps={{
                  native: true,
                }}
              >
                <option>Select brand</option>
                <option>Brand 1</option>
                <option>Brand 2</option>
              </TextField>

              {/* Select Model */}
              <TextField
                name="Model"
                select
                label="Model"
                className="flex-1 bg-white border-gray-400  placeholder-gray-500"
                SelectProps={{
                  native: true,
                }}
              >
                <option>Select model</option>
                <option>Model 1</option>
                <option>Model 2</option>
              </TextField>

              {/* Select State */}
              <TextField
                name="state"
                select
                label="State"
                className="flex-1 bg-white border-gray-400   placeholder-slate-500"
                SelectProps={{
                  native: true,
                }}
              >
                <option>Select state</option>
                <option>State 1</option>
                <option>State 2</option>
              </TextField>
              <button className="px-7 text-white gap-2 flex justify-center items-center bg-primarycolor rounded-lg"><FaMagnifyingGlass /> Search Vehicle</button>
            </div>
          </div>
        </div>
      </section>
      {/* Type Vehicle */}
      <section className="h-[50vh">
        <h1 className="text-4xl mt-40 text-center font-bold">Vehicle <span className="text-primarycolor">Type</span></h1>
        <ul className="flex justify-around text-lg pb-10 font-medium gap-4 mt-10">
          <li className="text-center"><Image src={truck} alt="" /> Trucks</li>
          <li className="text-center"><Image src={truck} alt="" /> Buses</li>
          <li className="text-center"><Image src={truck} alt="" /> 3 Wheelers</li>
          <li className="text-center"><Image src={truck} alt="" /> Tractors</li>
          <li className="text-center"><Image src={truck} alt="" /> Machinery</li>
        </ul>

        {/* Banner */}
        <div className="h-[40vh] flex bg-[url('@/assets/Logo/Banner.webp')] bg-cover p-20">
          <div className="flex flex-col justify-center gap-4 items-start m-20">
            <h1 className="text-5xl font-bold text-primarycolor">Find Your <br /> Perfect Trucks</h1>
            <div className="font-semibold text-lg">
              <p>Not sure what you'are looking for ?</p>
              <p>Answer a few questions to discover the best fit for you.</p>
            </div>
            <button className="text-left mt-4 py-3 px-5 bg-primarycolor text-white rounded-lg">Start Quiz <FaArrowRight className="inline-block" /></button>
          </div>
        </div>
      </section>

    </>
  );
}
