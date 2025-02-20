"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
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
import { DatePicker } from "@/components/datePicker";

import { MdCancel } from "react-icons/md";

import Minibus from "@/assets/img/sellVechile/minibus.svg";

import Select from "react-select";

interface FilePreview {
  url: string;
  file: File;
}

export default function SellVehicle({ trigger }: { trigger: any }) {
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
    rcStatus: "",
    permit: "",
    fitnessValidity: "",
    insuranceValidity: "",
    taxValidity: "",
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

  const [previews, setPreviews] = useState<FilePreview[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newPreviews: FilePreview[] = [];

    Array.from(files).forEach((file) => {
      // Check file size (25MB limit)
      if (file.size > 25 * 1024 * 1024) {
        alert("File size exceeds 25MB limit");
        return;
      }

      // Check file type
      const fileType = file.name.split(".").pop()?.toLowerCase();
      if (!["xls", "jpg", "png"].includes(fileType || "")) {
        alert("Only XLS, JPG, and PNG files are allowed");
        return;
      }

      const url = URL.createObjectURL(file);
      newPreviews.push({ url, file });
    });

    setPreviews((prev) => [...prev, ...newPreviews]);
  };

  const removePreview = (index: number) => {
    setPreviews((prev) => {
      const newPreviews = [...prev];
      URL.revokeObjectURL(newPreviews[index].url);
      newPreviews.splice(index, 1);
      return newPreviews;
    });
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (fileInputRef.current) {
      fileInputRef.current.files = files;
      const event = new Event("change", { bubbles: true });
      fileInputRef.current.dispatchEvent(event);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-full bg-gray-200/50 p-6 rounded-md">
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
          <span className="ml-2 font-medium">Vehicle Category</span>
        </div>

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
              stroke={currentPage >= 4 ? "#f8b738" : "#D1D5DB"} // Change color based on currentPage
              strokeWidth="2"
              strokeDasharray="4 4" // Dashed line
            />
            <path
              d="M42 1L49 8L42 15"
              stroke={currentPage >= 4 ? "#f8b738" : "#D1D5DB"} // Change color based on currentPage
              strokeWidth="2"
            />
          </svg>
        </div>
        {/* Vertical line */}
        <div className="flex flex-col items-center justify-center gap-2">
          <button
            onClick={() => setCurrentPage(4)}
            className={`px-3 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
              currentPage >= 4
                ? "bg-black/80 text-primarycolor shadow-lg"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-700"
            }`}
          >
            <BsCashCoin size={30} />
          </button>
          <span className="ml-2 font-medium">RC Details</span>
        </div>
      </div>

      {currentPage === 1 && (
        <div className=" p-4 text-black">
          <form onSubmit={handleSubmit} className="mx-auto space-y-8">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[0.85rem] font-medium mb-2"
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
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[0.85rem] font-medium mb-2"
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
                    htmlFor="email"
                    className="block text-[0.85rem] font-medium mb-2"
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
                    htmlFor="state"
                    className="block text-[0.85rem] font-medium mb-2"
                  >
                    State
                  </label>
                  <Select
                    options={states}
                    placeholder="Select State"
                    value={
                      states.find((s) => s.value === formData.state) || null
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="state"
                    className="block text-[0.85rem] font-medium mb-2"
                  >
                    District
                  </label>
                  <Select
                    options={states}
                    placeholder="Select District"
                    value={
                      states.find((s) => s.value === formData.state) || null
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
                    className="block text-[0.85rem] font-medium mb-2"
                  >
                    Tehsil
                  </label>
                  <Select
                    options={states}
                    placeholder="Select Tehsil"
                    value={
                      states.find((s) => s.value === formData.state) || null
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
                className="flex items-center gap-2 px-8 py-4 rounded-lg bg-gray-200 font-medium text-black hover:bg-gray-300 transition-colors"
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
          <div className=" mx-auto space-y-8">
            {/* Vehicle Type Selection */}
            <div className="flex flex-wrap items-start mb-8 gap-4">
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
              <Image
                src={Minibus}
                alt="minibus"
                width={300}
                height={300}
                className="text-yellow"
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
          <form onSubmit={handleSubmit} className=" mx-auto space-y-8">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[0.85rem] font-medium mb-2">
                    Brand
                  </label>
                  <Select
                    options={states}
                    placeholder="Select State"
                    value={
                      states.find((s) => s.value === formData.state) || null
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
                  <label className="block text-[0.85rem] font-medium mb-2">
                    Model Number
                  </label>
                  <Select
                    options={states}
                    placeholder="Select State"
                    value={
                      states.find((s) => s.value === formData.state) || null
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
                  <label className="block text-[0.85rem] font-medium mb-2">
                    Purchase Year
                  </label>
                  <Select
                    options={states}
                    placeholder="Select State"
                    value={
                      states.find((s) => s.value === formData.state) || null
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
                  <label className="block text-[0.85rem] font-medium mb-2">
                    Body Type
                  </label>
                  <Select
                    options={states}
                    placeholder="Select State"
                    value={
                      states.find((s) => s.value === formData.state) || null
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
                  <label className="block text-[0.85rem] font-medium mb-2">
                    Fuel
                  </label>
                  <Select
                    options={states}
                    placeholder="Select State"
                    value={
                      states.find((s) => s.value === formData.state) || null
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
                  <label className="block text-[0..85rem] font-medium mb-2">
                    Payload
                  </label>
                  <Select
                    options={states}
                    placeholder="Select State"
                    value={
                      states.find((s) => s.value === formData.state) || null
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
                  <label className="block text-[0.85rem] font-medium mb-2">
                    Cargo Length
                  </label>
                  <Select
                    options={states}
                    placeholder="Select State"
                    value={
                      states.find((s) => s.value === formData.state) || null
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
                  <label className="block text-[0.85rem] font-medium mb-2">
                    Tyre Condition
                  </label>
                  <Select
                    options={states}
                    placeholder="Select State"
                    value={
                      states.find((s) => s.value === formData.state) || null
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-[0.85rem] font-medium mb-2"
                  >
                    Vehicle Price
                  </label>
                  <input
                    type="text"
                    id="vehiclePrice"
                    name="vehiclePrice"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-[0.35rem] bg-white text-black text-[1rem] border border-gray-300 focus:border-yellow-500 focus:outline-none"
                    placeholder="Enter Vehicle Price"
                  />
                </div>

                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-[0.85rem] font-medium mb-2"
                  >
                    Total KM Driven
                  </label>
                  <input
                    type="text"
                    id="totalKmDriven"
                    name="totalKmDriven"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-[0.35rem] bg-white text-black text-[1rem] border border-gray-300 focus:border-yellow-500 focus:outline-none"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-[0.85rem] font-medium mb-2"
                  >
                    Vehicle Number
                  </label>
                  <input
                    type="text"
                    id="vehicleNumber"
                    name="vehicleNumber"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-[0.35rem] bg-white text-black text-[1rem] border border-gray-300 focus:border-yellow-500 focus:outline-none"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div className="w-full mx-auto ">
                <h3 className="text-[0.85rem] font-medium">
                  Upload Vehicle Images
                </h3>
                <div className="flex gap-4 items-center ">
                  <div
                    className="border-2 border-dashed border-gray-300 rounded-lg p-6"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept=".xls,.jpg,.png"
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="flex flex-col items-center justify-center cursor-pointer"
                    >
                      <svg
                        className="w-8 h-8 text-gray-400 mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <p className="text-sm text-gray-600">
                        Maximum upload file size 25 MB, allowed files
                        XLS,JPG,PNG
                      </p>
                    </label>
                  </div>

                  {previews.length > 0 && (
                    <div className="flex flex-wrap gap-4 mt-4">
                      {previews.map((preview, index) => (
                        <div key={index} className="relative">
                          {preview.file.type.startsWith("image/") ? (
                            <img
                              src={preview.url}
                              alt="preview"
                              className="w-32 h-32 object-cover rounded-lg"
                            />
                          ) : (
                            <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                              <span className="text-sm text-gray-500">
                                {preview.file.name}
                              </span>
                            </div>
                          )}
                          <button
                            onClick={() => removePreview(index)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full"
                          >
                            <MdCancel className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
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
                onClick={() => setCurrentPage(4)}
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

      {currentPage === 4 && (
        <div className=" p-6 text-black">
          <form onSubmit={handleSubmit} className=" mx-auto space-y-8">
            <div className="space-y-6">
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
                      states.find((s) => s.value === formData.state) || null
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
                      states.find((s) => s.value === formData.state) || null
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

                <div className="space-y-2">
                  <label className="text-gray-400 text-sm">
                    Fitness Validity
                  </label>
                  <DatePicker
                    value={formData.fitnessValidity}
                    onChange={(value) =>
                      setFormData({ ...formData, fitnessValidity: value })
                    }
                    format="MM/DD/YYYY"
                    placeholder="MM/DD/YYYY"
                  />
                </div>

                {/* Insurance Validity */}
                <div className="space-y-2">
                  <label className="text-gray-400 text-sm">
                    Insurance Validity
                  </label>
                  <DatePicker
                    value={formData.insuranceValidity}
                    onChange={(value) =>
                      setFormData({ ...formData, insuranceValidity: value })
                    }
                    format="DD/MM/YYYY"
                    placeholder="DD/MM/YYYY"
                  />
                </div>

                {/* Tax Validity */}
                <div className="space-y-2">
                  <label className="text-gray-400 text-sm">Tax Validity</label>
                  <DatePicker
                    value={formData.taxValidity}
                    onChange={(value) =>
                      setFormData({ ...formData, taxValidity: value })
                    }
                    format="MM/DD/YYYY"
                    placeholder="MM/DD/YYYY"
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
  );
}
