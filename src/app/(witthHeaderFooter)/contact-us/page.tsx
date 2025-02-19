"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MdMailOutline } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa6";
import { AiOutlineUser } from "react-icons/ai";

import contact from "@/assets/img/contact/contact.webp";

export default function page() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const validateForm = () => {
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    };

    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Handle form submission
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="rounded-lg my-10 p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.1)] mx-[10rem]">
        <div className="flex flex-col items-start gap-2">
          <h1 className="font-semibold text-4xl">
            Contact
            <span className="text-primarycolor"> Us</span>
          </h1>
          <p className="text-[1.25rem] font-medium text-gray-600/60">
            We're here to help! Contact us with any questions, concerns, or
            feedback for top-notch service
          </p>
        </div>

        <div className="flex justify-between items-center mt-8">
          <div className="flex gap-2 items-center">
            <div className="bg-primarycolor rounded-full p-3">
              <MdMailOutline size={24} />
            </div>
            <div className="flex flex-col items-start">
              <h2 className="font-semibold text-xl text-gray-800">Email</h2>
              <p className="font-medium text-gray-700/70 text-[1.10rem]">
                abc@gmail.com
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-primarycolor rounded-full p-3">
              <LuPhoneCall size={24} strokeWidth={2} />
            </div>
            <div className="flex flex-col items-start">
              <h2 className="font-semibold text-xl text-gray-800">
                Phone Number
              </h2>
              <p className="font-medium text-gray-700/70 text-[1.10rem]">
                1234567890
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-primarycolor rounded-full p-3">
              <HiOutlineLocationMarker size={24} strokeWidth={2} />
            </div>
            <div className="flex flex-col items-start">
              <h2 className="font-semibold text-xl text-gray-800">Address</h2>
              <p className="font-medium text-gray-700/70 text-[1.10rem]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores, in.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center my-10 gap-20">
          <div className="flex h-[500px]">
            <div className="bg-black/90 w-[3rem] flex justify-center items-center h-[500px]">
              <h2 className="text-white text-lg font-bold -rotate-90 whitespace-nowrap tracking-wide">
                Contact Us
              </h2>
            </div>

            <div className="flex-1 items-center my-auto">
              <div className="relative w-[32rem]">
                <Image
                  src={contact}
                  alt="contact"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-md shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium">
                    First Name<span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full pr-10 pl-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black/5 text-sm"
                      placeholder="First name"
                    />
                    <AiOutlineUser className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                  {errors.firstName && (
                    <p className="text-sm text-red-500">{errors.firstName}</p>
                  )}
                </div>

                {/* Last Name */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium">
                    Last Name<span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full pr-10 pl-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black/5 text-sm"
                      placeholder="Last name"
                    />
                    <AiOutlineUser className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                  {errors.lastName && (
                    <p className="text-sm text-red-500">{errors.lastName}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pr-10 pl-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black/5 text-sm"
                      placeholder="Email"
                    />
                    <MdMailOutline className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium">
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pr-10 pl-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black/5 text-sm"
                      placeholder="Phone number"
                    />
                    <LuPhoneCall className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                  {errors.phone && (
                    <p className="text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black/5 text-sm min-h-[150px] resize-none"
                  placeholder="Enter message"
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center px-6 py-2 bg-black text-white rounded-md hover:bg-black/90 transition-colors"
              >
                Send Enquiry
                <FaArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
