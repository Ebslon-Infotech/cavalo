"use client";

import React, { useState } from "react";
import Image from "next/image";
import representation from "@/assets/img/representation.webp";

import truck from '@/assets/Logo/New Truck.webp'
import buses from "@/assets/Logo/New Bus.webp"
import threeWheelers from "@/assets/Logo/New Auto.webp"
import tractors from "@/assets/Logo/New Tractor.webp"
import machinery from "@/assets/Logo/New JCB.webp"

import { LiaUserSolid } from "react-icons/lia";
import { TbTruckDelivery } from "react-icons/tb";
import { BsCashCoin } from "react-icons/bs";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

export default function page() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [selectedVehicle, setSelectedVehicle] = useState("truck")

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    state: "",
    district: "",
    model: "",
    brand: "",
    length: "",
    bodyType: "",
    seatingCapacity: "",
    yearOfManufacture: "",
    additionalRequirements: "",
    budget: "",
    financingOption: "",
    duration: ""
  });

  const vehicles = [
    { id: "truck", label: "Truck", icon: truck },
    { id: "buses", label: "Buses", icon: buses },
    { id: "threewheelers", label: "3 Wheelers", icon: threeWheelers },
    { id: "tractors", label: "Tractors", icon: tractors },
    { id: "machinery", label: "Machinery", icon: machinery },
  ]

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <div className="rounded-lg my-10 p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.1)] mx-[15rem]">
        <div className="flex flex-col items-start gap-2">
          <h1 className="font-semibold text-[2.7rem]">
            Wheels and Wonders:
            <span className="text-primarycolor">
              {" "}
              Find Your Perfect Vehicle!
            </span>
          </h1>
          <p className="text-[1.5rem] font-medium text-gray-600/60">
            Please fill out the forms below to help us understand your
            requirements and we will provide you with the best options
          </p>
        </div>

        <div className="mt-10 flex gap-6 items-start">
          <div className="w-[30%]">
            <Image src={representation} alt="vehicle" height={900} />
          </div>
          <div className="w-[70%] bg-gray-200/50 p-6 rounded-md">
            <div className="flex justify-around mb-6 w-full">
              <div className="flex flex-col items-center justify-center gap-2">
                <button
                  onClick={() => setCurrentPage(1)}
                  className={`px-3 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${currentPage === 1
                      ? "bg-black/80 text-primarycolor shadow-lg"
                      : "bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-700"
                    }`}
                >
                  <LiaUserSolid size={30} />
                </button>
                <span className="ml-2 font-medium">Personal Details</span>
              </div>
              <div className="h-16 w-px bg-gray-300 mx-2 rotate-90"></div>{" "}
              {/* Vertical line */}
              <div className="flex flex-col items-center justify-center gap-2">
                <button
                  onClick={() => setCurrentPage(2)}
                  className={`px-3 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${currentPage === 2
                      ? "bg-black/80 text-primarycolor shadow-lg"
                      : "bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-700"
                    }`}
                >
                  <TbTruckDelivery size={30} />
                </button>
                <span className="ml-2 font-medium">Vehicle Details</span>
              </div>
              <div className="h-16 w-px bg-gray-300 mx-2 rotate-90"></div>{" "}
              {/* Vertical line */}
              <div className="flex flex-col items-center justify-center gap-2">
                <button
                  onClick={() => setCurrentPage(3)}
                  className={`px-3 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${currentPage === 3
                      ? "bg-black/80 text-primarycolor shadow-lg"
                      : "bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-700"
                    }`}
                >
                  <BsCashCoin size={30} />
                </button>
                <span className="ml-2 font-medium">Finance Details</span>
              </div>
            </div>

            {currentPage === 1 && (
              <div className=" p-6 text-black">
                <form
                  onSubmit={handleSubmit}
                  className="max-w-4xl mx-auto space-y-8"
                >
                  <h1 className="text-4xl font-medium mb-6">
                    Share Essential Personal Details
                  </h1>

                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-[1.12rem] font-medium mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full p-4 rounded-md bg-white text-black text-[1rem]"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-[1.12rem] font-medium mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full p-4 rounded-md bg-white text-black text-[1rem]"
                          placeholder="Enter your email address"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-[1.12rem] font-medium mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full p-4 rounded-md bg-white text-black text-[1rem]"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="state"
                          className="block text-[1.12rem] font-medium mb-2"
                        >
                          State
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className="w-full p-4 rounded-md bg-white text-black text-[1rem]"
                          placeholder="Enter your state"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="district"
                          className="block text-[1.12rem] font-medium mb-2"
                        >
                          District
                        </label>
                        <input
                          type="text"
                          id="district"
                          name="district"
                          value={formData.district}
                          onChange={handleChange}
                          className="w-full p-4 rounded-md bg-white text-black text-[1rem]"
                          placeholder="Enter your district"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      className="flex items-center gap-2 px-8 py-4 rounded-lg bg-gray-200 font-medium text-primarycolor hover:bg-gray-300 transition-colors"
                    >
                      <HiOutlineArrowNarrowLeft className="w-5 h-5" />
                      Back
                    </button>

                    <button
                      type="submit"
                      className="flex items-center gap-2 px-8 py-4 rounded-lg bg-yellow-500 font-medium text-white hover:bg-yellow-400 transition-colors"
                    >
                      Next
                      <HiOutlineArrowNarrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              </div>
            )}

            {currentPage === 2 && (
              <div className=" p-6 text-black">
                <div className="max-w-6xl mx-auto space-y-8">
                  <h1 className="text-4xl font-medium mb-12">
                    Lets Choose Your Dream Ride
                  </h1>

                  {/* Vehicle Type Selection */}
                  <div className="flex flex-wrap justify-between mb-8">
                    {vehicles.map((vehicle) => (
                      <button
                        key={vehicle.id}
                        onClick={() => setSelectedVehicle(vehicle.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-lg transition-colors
                            ${selectedVehicle === vehicle.id
                            ? "border-4 border-yellow-500 text-black"
                            : "border-2 border-white/20 hover:border-yellow-500"
                          }`}
                      >
                        <Image src={vehicle.icon} alt="icon" height={20} />
                        {vehicle.label}
                      </button>
                    ))}
                  </div>

                  {/* Form Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[1.12rem] font-medium mb-2">Brand</label>
                      <input
                        type="text"
                        id="brand"
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                        className="w-full p-4 rounded-lg bg-white text-black text-[1rem]"
                      />
                    </div>

                    <div>
                      <label className="block text-[1.12rem] font-medium mb-2">Model</label>
                      <input
                        type="text"
                        id="model"
                        name="model"
                        value={formData.model}
                        onChange={handleChange}
                        className="w-full p-4 rounded-lg bg-white text-black text-[1rem]"
                      />
                    </div>

                    <div>
                      <label className="block text-[1.12rem] font-medium mb-2">Length</label>
                      <input
                        type="number"
                        id="length"
                        name="length"
                        value={formData.length}
                        onChange={handleChange}
                        className="w-full p-4 rounded-lg bg-white text-black text-[1rem]"
                      />
                    </div>

                    <div>
                      <label className="block text-[1.12rem] font-medium mb-2">Body Type</label>
                      <input
                        type="text"
                        id="bodyType"
                        name="bodyType"
                        value={formData.bodyType}
                        onChange={handleChange}
                        className="w-full p-4 rounded-lg bg-white text-black text-[1rem]"
                      />

                    </div>

                    <div>
                      <label className="block text-[1.12rem] font-medium mb-2">
                        Seating Capacity
                      </label>
                      <input
                        type="number"
                        id="seatingCapacity"
                        name="seatingCapacity"
                        value={formData.seatingCapacity}
                        onChange={handleChange}
                        className="w-full p-4 rounded-lg bg-white text-black text-[1rem]"
                      />

                    </div>

                    <div>
                      <label className="block text-[1.12rem] font-medium mb-2">
                        Preferred Year Of Manufacture
                      </label>
                      <input
                        type="text"
                        id="yearOfManufacture"
                        name="yearOfManufacture"
                        value={formData.yearOfManufacture}
                        onChange={handleChange}
                        className="w-full p-4 rounded-lg bg-white text-black text-[1rem]"
                      />
                    </div>
                  </div>

                  {/* Additional Requirements */}
                  <div>
                    <label className="block text-[1.12rem] font-medium mb-2">
                      Additional Requirements
                    </label>
                    <input
                      type="text"
                      value={formData.additionalRequirements}
                      onChange={handleChange}
                      placeholder="Please provide any specific details or requirementsyou may have"
                      className="w-full p-4 rounded-lg bg-white text-black text-lg appearance-none"
                    />
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      className="flex items-center gap-2 px-8 py-4 rounded-lg bg-yellow-500 font-medium text-white hover:bg-gray-300 transition-colors"
                    >
                      <HiOutlineArrowNarrowLeft className="w-5 h-5" />
                      Back
                    </button>

                    <button
                      type="submit"
                      className="flex items-center gap-2 px-8 py-4 rounded-lg bg-yellow-500 font-medium text-white hover:bg-yellow-400 transition-colors"
                    >
                      Next
                      <HiOutlineArrowNarrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {currentPage === 3 && (
              <div className=" p-6 text-black">
                <form
                  onSubmit={handleSubmit}
                  className="max-w-4xl mx-auto space-y-8"
                >
                  <h1 className="text-4xl font-medium mb-6">
                    Determine Your Budget Parameter Below
                  </h1>

                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-[1.12rem] font-medium mb-2"
                      >
                        Budget
                      </label>
                      <input
                        type="text"
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full p-4 rounded-md bg-white text-black text-[1rem]"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="state"
                          className="block text-[1.12rem] font-medium mb-2"
                        >
                          Financing Option
                        </label>
                        <input
                          type="text"
                          id="financingOption"
                          name="financingOption"
                          value={formData.financingOption}
                          onChange={handleChange}
                          className="w-full p-4 rounded-md bg-white text-black text-[1rem]"
                          placeholder="Enter your state"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="district"
                          className="block text-[1.12rem] font-medium mb-2"
                        >
                          Time Duration of Purchase
                        </label>
                        <input
                          type="text"
                          id="duration"
                          name="duration"
                          value={formData.duration}
                          onChange={handleChange}
                          className="w-full p-4 rounded-md bg-white text-black text-[1rem]"
                          placeholder="Enter your district"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      className="flex items-center gap-2 px-8 py-4 rounded-lg bg-yellow-500 font-medium text-white hover:bg-gray-300 transition-colors"
                    >
                      <HiOutlineArrowNarrowLeft className="w-5 h-5" />
                      Back
                    </button>

                    <button
                      type="submit"
                      className="flex items-center gap-2 px-8 py-4 rounded-lg bg-yellow-500 font-medium text-white hover:bg-yellow-400 transition-colors"
                    >
                      Submit
                      <HiOutlineArrowNarrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
