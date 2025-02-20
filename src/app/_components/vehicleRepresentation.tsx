"use client"

import React, { useState } from "react";
import Image from "next/image"
import truck from "@/assets/Logo/New Truck.webp";
import buses from "@/assets/Logo/New Bus.webp";
import threeWheelers from "@/assets/Logo/New Auto.webp";
import tractors from "@/assets/Logo/New Tractor.webp";
import machinery from "@/assets/Logo/New JCB.webp";

import { LiaUserSolid } from "react-icons/lia";
import { TbTruckDelivery } from "react-icons/tb";
import { BsCashCoin } from "react-icons/bs";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import Select from "react-select";

const VehicleRepresentation = ({trigger}:{trigger:any}) => {
     const [currentPage, setCurrentPage] = React.useState(1);
  const [selectedVehicle, setSelectedVehicle] = useState("truck");

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
    duration: "",
  });

  const vehicles = [
    { id: "truck", label: "Truck", icon: truck },
    { id: "buses", label: "Buses", icon: buses },
    { id: "threewheelers", label: "3 Wheelers", icon: threeWheelers },
    { id: "tractors", label: "Tractors", icon: tractors },
    { id: "machinery", label: "Machinery", icon: machinery },
  ];

  const states = [
    { value: "Andhra Pradesh", label: "Andhra Pradesh" },
    { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
    { value: "Assam", label: "Assam" },
    { value: "Bihar", label: "Bihar" },
    { value: "Chhattisgarh", label: "Chhattisgarh" },
    { value: "Goa", label: "Goa" },
  ];

  const handleChange = (e: any, field?: string) => {
    if (field) {
      setFormData({ ...formData, [field]: e.value });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trigger(true);    
    // Handle form submission
  };

     return (
          <div className="w-[70%] bg-gray-200/50 p-6 rounded-md">
            <div className="flex justify-around mb-6 w-full">
              <div className="flex flex-col items-center justify-center gap-2">
                <button
                  onClick={() => setCurrentPage(1)}
                  className={`px-3 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                    currentPage >= 1
                      ? "bg-black/80 text-primarycolor shadow-lg"
                      : "bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-700"
                  }`}
                >
                  <LiaUserSolid size={30} />
                </button>
                <span className="ml-2 font-medium">Personal Details</span>
              </div>
              {/* <div className="h-16 w-px bg-gray-300 mx-2 rotate-90"></div>{" "} */}

              {/* Arrow between Page 1 and Page 2 */}
              <div className="flex mt-4 justify-center">
                <svg
                  width="50"
                  height="16"
                  viewBox="0 0 50 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8H49"
                    stroke={currentPage >= 2 ? "#f8b738" : "#D1D5DB"} // Change color based on currentPage
                    strokeWidth="2"
                    strokeDasharray="4 4" // Dashed line
                  />
                  <path
                    d="M42 1L49 8L42 15"
                    stroke={currentPage >= 2 ? "#f8b738" : "#D1D5DB"} // Change color based on currentPage
                    strokeWidth="2"
                  />
                </svg>
              </div>

              {/* Vertical line */}
              <div className="flex flex-col items-center justify-center gap-2">
                <button
                  onClick={() => setCurrentPage(2)}
                  className={`px-3 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                    currentPage >= 2
                      ? "bg-black/80 text-primarycolor shadow-lg"
                      : "bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-700"
                  }`}
                >
                  <TbTruckDelivery size={30} />
                </button>
                <span className="ml-2 font-medium">Vehicle Details</span>
              </div>
              {/* <div className="h-16 w-px bg-gray-300 mx-2 rotate-90"></div>{" "} */}

              {/* Arrow between Page 2 and Page 3 */}
              <div className="flex mt-4 justify-center">
                <svg
                  width="50"
                  height="16"
                  viewBox="0 0 50 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8H49"
                    stroke={currentPage >= 3 ? "#f8b738" : "#D1D5DB"} // Change color based on currentPage
                    strokeWidth="2"
                    strokeDasharray="4 4" // Dashed line
                  />
                  <path
                    d="M42 1L49 8L42 15"
                    stroke={currentPage >= 3 ? "#f8b738" : "#D1D5DB"} // Change color based on currentPage
                    strokeWidth="2"
                  />
                </svg>
              </div>
              {/* Vertical line */}
              <div className="flex flex-col items-center justify-center gap-2">
                <button
                  onClick={() => setCurrentPage(3)}
                  className={`px-3 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                    currentPage >= 3
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
              <div className=" p-4 text-black">
                <form
                  onSubmit={handleSubmit}
                  className="max-w-4xl mx-auto space-y-8"
                >
                  <h1 className="text-4xl font-medium mb-4">
                    Share Essential Personal Details
                  </h1>

                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-[1rem] font-medium mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-[0.35rem] bg-white text-black text-[1rem] border border-gray-300 focus:border-yellow-500 focus:outline-none"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-[1rem] font-medium mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-[0.35rem] bg-white text-black text-[1rem] border border-gray-300 focus:border-yellow-500 focus:outline-none"
                          placeholder="Enter your email address"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-[1rem] font-medium mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-[0.35rem] bg-white text-black text-[1rem] border border-gray-300 focus:border-yellow-500 focus:outline-none"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="state"
                          className="block text-[1rem] font-medium mb-2"
                        >
                          State
                        </label>
                        <Select
                          options={states}
                          placeholder="Select State"
                          value={
                            states.find((s) => s.value === formData.state) ||
                            null
                          }
                          onChange={(selectedOption) =>
                            handleChange(selectedOption, "state")
                          }
                          required
                          className="block w-full py-[0.35rem] rounded-[0.35rem] border border-gray-300 bg-white text-[1rem] text-gray-900 focus:border-[#f0a75b] focus:outline-none"
                          styles={{
                            control: (styles) => ({
                              ...styles,
                              backgroundColor: "transparent",
                              border: "none",
                              boxShadow: "none",
                            }),
                            option: (styles, { isFocused, isSelected }) => ({
                              ...styles,
                              backgroundColor: isSelected
                                ? "#f8b738"
                                : isFocused
                                ? "#f8b738"
                                : "transparent",
                              color: isSelected ? "black" : "inherit",
                              fontSize: "0.9rem",
                              fontWeight: "500",
                            }),
                            menu: (styles) => ({
                              ...styles,
                              backgroundColor: "white",
                            }),
                            menuList: (styles) => ({
                              ...styles,
                              overflowY: "auto",
                              scrollbarWidth: "none",
                              msOverflowStyle: "none",
                            }),
                            placeholder: (styles) => ({
                              ...styles,
                              color: "darkslategrey",
                              fontSize: "0.9rem",
                              fontWeight: "600",
                            }),
                            singleValue: (styles) => ({
                              ...styles,
                              color: "darkslategrey",
                              fontSize: "1rem",
                              fontWeight: "600",
                            }),
                          }}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="district"
                          className="block text-[1rem] font-medium mb-2"
                        >
                          District
                        </label>
                        <Select
                          options={states}
                          placeholder="Select Disdrict"
                          value={
                            states.find((s) => s.value === formData.state) ||
                            null
                          }
                          onChange={(selectedOption) =>
                            handleChange(selectedOption, "state")
                          }
                          required
                          className="block w-full py-[0.35rem] rounded-[0.35rem] border border-gray-300 bg-white text-[1rem] text-gray-900 focus:border-[#f0a75b] focus:outline-none"
                          styles={{
                            control: (styles) => ({
                              ...styles,
                              backgroundColor: "transparent",
                              border: "none",
                              boxShadow: "none",
                            }),
                            option: (styles, { isFocused, isSelected }) => ({
                              ...styles,
                              backgroundColor: isSelected
                                ? "#f8b738"
                                : isFocused
                                ? "#f8b738"
                                : "transparent",
                              color: isSelected ? "black" : "inherit",
                              fontSize: "0.9rem",
                              fontWeight: "500",
                            }),
                            menu: (styles) => ({
                              ...styles,
                              backgroundColor: "white",
                            }),
                            menuList: (styles) => ({
                              ...styles,
                              overflowY: "auto",
                              scrollbarWidth: "none",
                              msOverflowStyle: "none",
                            }),
                            placeholder: (styles) => ({
                              ...styles,
                              color: "darkslategrey",
                              fontSize: "0.9rem",
                              fontWeight: "600",
                            }),
                            singleValue: (styles) => ({
                              ...styles,
                              color: "darkslategrey",
                              fontSize: "1rem",
                              fontWeight: "600",
                            }),
                          }}
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
                      onClick={() => setCurrentPage(2)}
                      type="button"
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
                            ${
                              selectedVehicle === vehicle.id
                                ? "border-2 border-yellow-500 text-black"
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
                      <label className="block text-[1rem] font-medium mb-2">
                        Brand
                      </label>
                      <Select
                          options={states}
                          placeholder="Select State"
                          value={
                            states.find((s) => s.value === formData.state) ||
                            null
                          }
                          onChange={(selectedOption) =>
                            handleChange(selectedOption, "state")
                          }
                          required
                          className="block w-full py-[0.35rem] rounded-[0.35rem] border border-gray-300 bg-white text-[1rem] text-gray-900 focus:border-[#f0a75b] focus:outline-none"
                          styles={{
                            control: (styles) => ({
                              ...styles,
                              backgroundColor: "transparent",
                              border: "none",
                              boxShadow: "none",
                            }),
                            option: (styles, { isFocused, isSelected }) => ({
                              ...styles,
                              backgroundColor: isSelected
                                ? "#f8b738"
                                : isFocused
                                ? "#f8b738"
                                : "transparent",
                              color: isSelected ? "black" : "inherit",
                              fontSize: "0.9rem",
                              fontWeight: "500",
                            }),
                            menu: (styles) => ({
                              ...styles,
                              backgroundColor: "white",
                            }),
                            menuList: (styles) => ({
                              ...styles,
                              overflowY: "auto",
                              scrollbarWidth: "none",
                              msOverflowStyle: "none",
                            }),
                            placeholder: (styles) => ({
                              ...styles,
                              color: "darkslategrey",
                              fontSize: "0.9rem",
                              fontWeight: "600",
                            }),
                            singleValue: (styles) => ({
                              ...styles,
                              color: "darkslategrey",
                              fontSize: "1rem",
                              fontWeight: "600",
                            }),
                          }}
                        />
                    </div>

                    <div>
                      <label className="block text-[1rem] font-medium mb-2">
                        Model
                      </label>
                      <Select
                          options={states}
                          placeholder="Select State"
                          value={
                            states.find((s) => s.value === formData.state) ||
                            null
                          }
                          onChange={(selectedOption) =>
                            handleChange(selectedOption, "state")
                          }
                          required
                          className="block w-full py-[0.35rem] rounded-[0.35rem] border border-gray-300 bg-white text-[1rem] text-gray-900 focus:border-[#f0a75b] focus:outline-none"
                          styles={{
                            control: (styles) => ({
                              ...styles,
                              backgroundColor: "transparent",
                              border: "none",
                              boxShadow: "none",
                            }),
                            option: (styles, { isFocused, isSelected }) => ({
                              ...styles,
                              backgroundColor: isSelected
                                ? "#f8b738"
                                : isFocused
                                ? "#f8b738"
                                : "transparent",
                              color: isSelected ? "black" : "inherit",
                              fontSize: "0.9rem",
                              fontWeight: "500",
                            }),
                            menu: (styles) => ({
                              ...styles,
                              backgroundColor: "white",
                            }),
                            menuList: (styles) => ({
                              ...styles,
                              overflowY: "auto",
                              scrollbarWidth: "none",
                              msOverflowStyle: "none",
                            }),
                            placeholder: (styles) => ({
                              ...styles,
                              color: "darkslategrey",
                              fontSize: "0.9rem",
                              fontWeight: "600",
                            }),
                            singleValue: (styles) => ({
                              ...styles,
                              color: "darkslategrey",
                              fontSize: "1rem",
                              fontWeight: "600",
                            }),
                          }}
                        />
                    </div>

                    <div>
                      <label className="block text-[1rem] font-medium mb-2">
                        Length
                      </label>
                      <Select
                          options={states}
                          placeholder="Select State"
                          value={
                            states.find((s) => s.value === formData.state) ||
                            null
                          }
                          onChange={(selectedOption) =>
                            handleChange(selectedOption, "state")
                          }
                          required
                          className="block w-full py-[0.35rem] rounded-[0.35rem] border border-gray-300 bg-white text-[1rem] text-gray-900 focus:border-[#f0a75b] focus:outline-none"
                          styles={{
                            control: (styles) => ({
                              ...styles,
                              backgroundColor: "transparent",
                              border: "none",
                              boxShadow: "none",
                            }),
                            option: (styles, { isFocused, isSelected }) => ({
                              ...styles,
                              backgroundColor: isSelected
                                ? "#f8b738"
                                : isFocused
                                ? "#f8b738"
                                : "transparent",
                              color: isSelected ? "black" : "inherit",
                              fontSize: "0.9rem",
                              fontWeight: "500",
                            }),
                            menu: (styles) => ({
                              ...styles,
                              backgroundColor: "white",
                            }),
                            menuList: (styles) => ({
                              ...styles,
                              overflowY: "auto",
                              scrollbarWidth: "none",
                              msOverflowStyle: "none",
                            }),
                            placeholder: (styles) => ({
                              ...styles,
                              color: "darkslategrey",
                              fontSize: "0.9rem",
                              fontWeight: "600",
                            }),
                            singleValue: (styles) => ({
                              ...styles,
                              color: "darkslategrey",
                              fontSize: "1rem",
                              fontWeight: "600",
                            }),
                          }}
                        />
                    </div>

                    <div>
                      <label className="block text-[1rem] font-medium mb-2">
                        Body Type
                      </label>
                      <Select
                          options={states}
                          placeholder="Select State"
                          value={
                            states.find((s) => s.value === formData.state) ||
                            null
                          }
                          onChange={(selectedOption) =>
                            handleChange(selectedOption, "state")
                          }
                          required
                          className="block w-full py-[0.35rem] rounded-[0.35rem] border border-gray-300 bg-white text-[1rem] text-gray-900 focus:border-[#f0a75b] focus:outline-none"
                          styles={{
                            control: (styles) => ({
                              ...styles,
                              backgroundColor: "transparent",
                              border: "none",
                              boxShadow: "none",
                            }),
                            option: (styles, { isFocused, isSelected }) => ({
                              ...styles,
                              backgroundColor: isSelected
                                ? "#f8b738"
                                : isFocused
                                ? "#f8b738"
                                : "transparent",
                              color: isSelected ? "black" : "inherit",
                              fontSize: "0.9rem",
                              fontWeight: "500",
                            }),
                            menu: (styles) => ({
                              ...styles,
                              backgroundColor: "white",
                            }),
                            menuList: (styles) => ({
                              ...styles,
                              overflowY: "auto",
                              scrollbarWidth: "none",
                              msOverflowStyle: "none",
                            }),
                            placeholder: (styles) => ({
                              ...styles,
                              color: "darkslategrey",
                              fontSize: "0.9rem",
                              fontWeight: "600",
                            }),
                            singleValue: (styles) => ({
                              ...styles,
                              color: "darkslategrey",
                              fontSize: "1rem",
                              fontWeight: "600",
                            }),
                          }}
                        />
                    </div>

                    <div>
                      <label className="block text-[1rem] font-medium mb-2">
                        Seating Capacity
                      </label>
                      <Select
                          options={states}
                          placeholder="Select State"
                          value={
                            states.find((s) => s.value === formData.state) ||
                            null
                          }
                          onChange={(selectedOption) =>
                            handleChange(selectedOption, "state")
                          }
                          required
                          className="block w-full py-[0.35rem] rounded-[0.35rem] border border-gray-300 bg-white text-[1rem] text-gray-900 focus:border-[#f0a75b] focus:outline-none"
                          styles={{
                            control: (styles) => ({
                              ...styles,
                              backgroundColor: "transparent",
                              border: "none",
                              boxShadow: "none",
                            }),
                            option: (styles, { isFocused, isSelected }) => ({
                              ...styles,
                              backgroundColor: isSelected
                                ? "#f8b738"
                                : isFocused
                                ? "#f8b738"
                                : "transparent",
                              color: isSelected ? "black" : "inherit",
                              fontSize: "0.9rem",
                              fontWeight: "500",
                            }),
                            menu: (styles) => ({
                              ...styles,
                              backgroundColor: "white",
                            }),
                            menuList: (styles) => ({
                              ...styles,
                              overflowY: "auto",
                              scrollbarWidth: "none",
                              msOverflowStyle: "none",
                            }),
                            placeholder: (styles) => ({
                              ...styles,
                              color: "darkslategrey",
                              fontSize: "0.9rem",
                              fontWeight: "600",
                            }),
                            singleValue: (styles) => ({
                              ...styles,
                              color: "darkslategrey",
                              fontSize: "1rem",
                              fontWeight: "600",
                            }),
                          }}
                        />
                    </div>

                    <div>
                      <label className="block text-[1rem] font-medium mb-2">
                        Preferred Year Of Manufacture
                      </label>
                      <Select
                          options={states}
                          placeholder="Select State"
                          value={
                            states.find((s) => s.value === formData.state) ||
                            null
                          }
                          onChange={(selectedOption) =>
                            handleChange(selectedOption, "state")
                          }
                          required
                          className="block w-full py-[0.35rem] rounded-[0.35rem] border border-gray-300 bg-white text-[1rem] text-gray-900 focus:border-[#f0a75b] focus:outline-none"
                          styles={{
                            control: (styles) => ({
                              ...styles,
                              backgroundColor: "transparent",
                              border: "none",
                              boxShadow: "none",
                            }),
                            option: (styles, { isFocused, isSelected }) => ({
                              ...styles,
                              backgroundColor: isSelected
                                ? "#f8b738"
                                : isFocused
                                ? "#f8b738"
                                : "transparent",
                              color: isSelected ? "black" : "inherit",
                              fontSize: "0.9rem",
                              fontWeight: "500",
                            }),
                            menu: (styles) => ({
                              ...styles,
                              backgroundColor: "white",
                            }),
                            menuList: (styles) => ({
                              ...styles,
                              overflowY: "auto",
                              scrollbarWidth: "none",
                              msOverflowStyle: "none",
                            }),
                            placeholder: (styles) => ({
                              ...styles,
                              color: "darkslategrey",
                              fontSize: "0.9rem",
                              fontWeight: "600",
                            }),
                            singleValue: (styles) => ({
                              ...styles,
                              color: "darkslategrey",
                              fontSize: "1rem",
                              fontWeight: "600",
                            }),
                          }}
                        />
                    </div>
                  </div>

                  {/* Additional Requirements */}
                  <div>
                    <label className="block text-[1rem] font-medium mb-2">
                      Additional Requirements
                    </label>
                    <input
                      type="text"
                      value={formData.additionalRequirements}
                      onChange={handleChange}
                      placeholder="Please provide any specific details or requirementsyou may have"
                      className="w-full px-4 py-3 rounded-[0.35rem] bg-white text-black text-[1rem] border border-gray-300 focus:border-yellow-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={() => setCurrentPage(1)}
                      type="button"
                      className="flex items-center gap-2 px-8 py-4 rounded-lg bg-yellow-500 font-medium text-white hover:bg-gray-300 transition-colors"
                    >
                      <HiOutlineArrowNarrowLeft className="w-5 h-5" />
                      Back
                    </button>

                    <button
                      onClick={() => setCurrentPage(3)}
                      type="button"
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
                        className="block text-[1rem] font-medium mb-2"
                      >
                        Budget
                      </label>
                      <Select
                          options={states}
                          placeholder="Select State"
                          value={
                            states.find((s) => s.value === formData.state) ||
                            null
                          }
                          onChange={(selectedOption) =>
                            handleChange(selectedOption, "state")
                          }
                          required
                          className="block w-full py-[0.35rem] rounded-[0.35rem] border border-gray-300 bg-white text-[1rem] text-gray-900 focus:border-[#f0a75b] focus:outline-none"
                          styles={{
                            control: (styles) => ({
                              ...styles,
                              backgroundColor: "transparent",
                              border: "none",
                              boxShadow: "none",
                            }),
                            option: (styles, { isFocused, isSelected }) => ({
                              ...styles,
                              backgroundColor: isSelected
                                ? "#f8b738"
                                : isFocused
                                ? "#f8b738"
                                : "transparent",
                              color: isSelected ? "black" : "inherit",
                              fontSize: "0.9rem",
                              fontWeight: "500",
                            }),
                            menu: (styles) => ({
                              ...styles,
                              backgroundColor: "white",
                            }),
                            menuList: (styles) => ({
                              ...styles,
                              overflowY: "auto",
                              scrollbarWidth: "none",
                              msOverflowStyle: "none",
                            }),
                            placeholder: (styles) => ({
                              ...styles,
                              color: "darkslategrey",
                              fontSize: "0.9rem",
                              fontWeight: "600",
                            }),
                            singleValue: (styles) => ({
                              ...styles,
                              color: "darkslategrey",
                              fontSize: "1rem",
                              fontWeight: "600",
                            }),
                          }}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="state"
                          className="block text-[1rem] font-medium mb-2"
                        >
                          Financing Option
                        </label>
                        <Select
                          options={states}
                          placeholder="Select State"
                          value={
                            states.find((s) => s.value === formData.state) ||
                            null
                          }
                          onChange={(selectedOption) =>
                            handleChange(selectedOption, "state")
                          }
                          required
                          className="block w-full py-[0.35rem] rounded-[0.35rem] border border-gray-300 bg-white text-[1rem] text-gray-900 focus:border-[#f0a75b] focus:outline-none"
                          styles={{
                            control: (styles) => ({
                              ...styles,
                              backgroundColor: "transparent",
                              border: "none",
                              boxShadow: "none",
                            }),
                            option: (styles, { isFocused, isSelected }) => ({
                              ...styles,
                              backgroundColor: isSelected
                                ? "#f8b738"
                                : isFocused
                                ? "#f8b738"
                                : "transparent",
                              color: isSelected ? "black" : "inherit",
                              fontSize: "0.9rem",
                              fontWeight: "500",
                            }),
                            menu: (styles) => ({
                              ...styles,
                              backgroundColor: "white",
                            }),
                            menuList: (styles) => ({
                              ...styles,
                              overflowY: "auto",
                              scrollbarWidth: "none",
                              msOverflowStyle: "none",
                            }),
                            placeholder: (styles) => ({
                              ...styles,
                              color: "darkslategrey",
                              fontSize: "0.9rem",
                              fontWeight: "600",
                            }),
                            singleValue: (styles) => ({
                              ...styles,
                              color: "darkslategrey",
                              fontSize: "1rem",
                              fontWeight: "600",
                            }),
                          }}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="district"
                          className="block text-[1rem] font-medium mb-2"
                        >
                          Time Duration of Purchase
                        </label>
                        <Select
                          options={states}
                          placeholder="Select State"
                          value={
                            states.find((s) => s.value === formData.state) ||
                            null
                          }
                          onChange={(selectedOption) =>
                            handleChange(selectedOption, "state")
                          }
                          required
                          className="block w-full py-[0.35rem] rounded-[0.35rem] border border-gray-300 bg-white text-[1rem] text-gray-900 focus:border-[#f0a75b] focus:outline-none"
                          styles={{
                            control: (styles) => ({
                              ...styles,
                              backgroundColor: "transparent",
                              border: "none",
                              boxShadow: "none",
                            }),
                            option: (styles, { isFocused, isSelected }) => ({
                              ...styles,
                              backgroundColor: isSelected
                                ? "#f8b738"
                                : isFocused
                                ? "#f8b738"
                                : "transparent",
                              color: isSelected ? "black" : "inherit",
                              fontSize: "0.9rem",
                              fontWeight: "500",
                            }),
                            menu: (styles) => ({
                              ...styles,
                              backgroundColor: "white",
                            }),
                            menuList: (styles) => ({
                              ...styles,
                              overflowY: "auto",
                              scrollbarWidth: "none",
                              msOverflowStyle: "none",
                            }),
                            placeholder: (styles) => ({
                              ...styles,
                              color: "darkslategrey",
                              fontSize: "0.9rem",
                              fontWeight: "600",
                            }),
                            singleValue: (styles) => ({
                              ...styles,
                              color: "darkslategrey",
                              fontSize: "1rem",
                              fontWeight: "600",
                            }),
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={() => setCurrentPage(2)}
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
     )
}

export default VehicleRepresentation