"use client";

import React, { useState } from "react";
import Select from "react-select";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function page() {
  const [isChecked, setIsChecked] = useState(false);
  const states = [
    { value: "Andhra Pradesh", label: "Andhra Pradesh" },
    { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
    { value: "Assam", label: "Assam" },
    { value: "Bihar", label: "Bihar" },
    { value: "Chhattisgarh", label: "Chhattisgarh" },
    { value: "Goa", label: "Goa" },
  ];

  return (
    <>
      <div className="rounded-lg my-10 py-6 px-8 shadow-[0_0_0_1px_rgba(0,0,0,0.1)] mx-[10rem]">
        <div className="flex flex-col items-start gap-2">
          <h1 className="font-semibold text-[2.35rem]">
            Become a<span className="text-primarycolor"> Partner</span>
          </h1>
          <p className="text-[1.35rem] font-medium text-gray-600/60">
            We are here to assist you with any questions or concerns.
          </p>
        </div>

        <div className="flex flex-col gap-4 my-6 rounded-lg p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.1)] ">
          <div className="flex flex-col gap-2 mt-6">
            <h2 className="text-[1.35rem] font-semibold mb-6">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-[0.85rem] font-medium mb-2"
                >
                  First Name<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-4 py-3 rounded-[0.35rem] bg-white text-black text-[1rem] border border-gray-300 focus:border-yellow-500 focus:outline-none"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-[0.85rem] font-medium mb-2"
                >
                  Last Name<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-4 py-3 rounded-[0.35rem] bg-white text-black text-[1rem] border border-gray-300 focus:border-yellow-500 focus:outline-none"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[0.85rem] font-medium mb-2"
                >
                  Email Address<span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-[0.35rem] bg-white text-black text-[1rem] border border-gray-300 focus:border-yellow-500 focus:outline-none"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-[0.85rem] font-medium mb-2"
                >
                  Phone Number<span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-[0.35rem] bg-white text-black text-[1rem] border border-gray-300 focus:border-yellow-500 focus:outline-none"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label
                  htmlFor="state"
                  className="block text-[0.85rem] font-medium mb-2"
                >
                  State<span className="text-red-600">*</span>
                </label>
                <Select
                  options={states}
                  placeholder="Select State"
                  //  value={
                  //    states.find((s) => s.value === formData.state) ||
                  //    null
                  //  }
                  //  onChange={(selectedOption) =>
                  //    handleChange(selectedOption, "state")
                  //  }
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
                  District<span className="text-red-600">*</span>
                </label>
                <Select
                  options={states}
                  placeholder="Select Disdrict"
                  //  value={
                  //    states.find((s) => s.value === formData.state) ||
                  //    null
                  //  }
                  //  onChange={(selectedOption) =>
                  //    handleChange(selectedOption, "state")
                  //  }
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
          <div className="flex flex-col gap-2 mt-6">
            <h2 className="text-[1.35rem] font-semibold mb-6">Truck Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="state"
                  className="block text-[0.85rem] font-medium mb-2"
                >
                  Vehicle
                </label>
                <Select
                  options={states}
                  placeholder="Select State"
                  //  value={
                  //    states.find((s) => s.value === formData.state) ||
                  //    null
                  //  }
                  //  onChange={(selectedOption) =>
                  //    handleChange(selectedOption, "state")
                  //  }
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
                  htmlFor="state"
                  className="block text-[0.85rem] font-medium mb-2"
                >
                  Brand
                </label>
                <Select
                  options={states}
                  placeholder="Select State"
                  //  value={
                  //    states.find((s) => s.value === formData.state) ||
                  //    null
                  //  }
                  //  onChange={(selectedOption) =>
                  //    handleChange(selectedOption, "state")
                  //  }
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
                  Model Number
                </label>
                <Select
                  options={states}
                  placeholder="Select Disdrict"
                  //  value={
                  //    states.find((s) => s.value === formData.state) ||
                  //    null
                  //  }
                  //  onChange={(selectedOption) =>
                  //    handleChange(selectedOption, "state")
                  //  }
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
                  htmlFor="state"
                  className="block text-[0.85rem] font-medium mb-2"
                >
                  Enter Manufacture Year
                </label>
                <Select
                  options={states}
                  placeholder="Select State"
                  //  value={
                  //    states.find((s) => s.value === formData.state) ||
                  //    null
                  //  }
                  //  onChange={(selectedOption) =>
                  //    handleChange(selectedOption, "state")
                  //  }
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

              <div className="flex items-center">
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                  />
                  <span
                    className={`relative w-5 h-5 border-2 rounded flex items-center justify-center transition-all duration-200 ${
                      isChecked
                        ? "bg-primarycolor border-none"
                        : "bg-white border-gray-700"
                    }`}
                  >
                    <svg
                      className={`w-3 h-3 text-white transition-opacity duration-200 ${
                        isChecked ? "opacity-100" : "opacity-0"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="ml-3 text-sm font-medium text-gray-700">
                    Are you Financing your Vehicle?
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-6">
            <h2 className="text-[1.35rem] font-semibold mb-6">Budget</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="state"
                  className="block text-[0.85rem] font-medium mb-2"
                >
                  Budget
                </label>
                <Select
                  options={states}
                  placeholder="Select State"
                  //  value={
                  //    states.find((s) => s.value === formData.state) ||
                  //    null
                  //  }
                  //  onChange={(selectedOption) =>
                  //    handleChange(selectedOption, "state")
                  //  }
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
                  Mode
                </label>
                <Select
                  options={states}
                  placeholder="Select Disdrict"
                  //  value={
                  //    states.find((s) => s.value === formData.state) ||
                  //    null
                  //  }
                  //  onChange={(selectedOption) =>
                  //    handleChange(selectedOption, "state")
                  //  }
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

              <div className="col-span-2">
                <label
                  htmlFor="email"
                  className="block text-[0.85rem] font-medium mb-2"
                >
                  Additional Requirements
                </label>
                <textarea
                  id="firstName"
                  name="firstName"
                  rows={4}
                  className="w-full px-4 py-3 rounded-[0.35rem] bg-white text-black text-[1rem] border border-gray-300 focus:border-yellow-500 focus:outline-none"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-start">
            <button
              type="submit"
              className="flex items-center gap-2 px-8 py-4 rounded-lg bg-yellow-500 font-medium text-white hover:bg-yellow-400 transition-colors"
            >
              Submit
              <HiOutlineArrowNarrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
