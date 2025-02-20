"use client";

import React from "react";
import Image from "next/image";
import { HiOutlineArrowNarrowRight as ArrowRight } from "react-icons/hi";

import Career from "@/assets/img/career.webp";
import Career1 from "@/assets/img/career1.webp";
import Career2 from "@/assets/img/career2.webp";
import Career3 from "@/assets/img/career3.webp";
import Career4 from "@/assets/img/career4.webp";

export default function page() {
  const career = [
    {
      title: "Sales Executive",
      description:
        "Responsible for business development and sales of Electronics and Electrical Products through various mediums",
      qualifications: ["B.Tech", "BBA", "MBA", "B.Com", "M.Com"],
    },
    {
      title: "Field Sales Executive",
      description:
        "Responsible for sales billing, Tally updates and stock management.",
      qualifications: ["B.Com", "M.Com", "CS", "CA"],
    },
    {
      title: "Sales Manager",
      description:
        "Sales team leader for different verticals of electrical and electronics goods. ",
      qualifications: ["B.Tech", "BBA", "MBA", "B.Com", "M.Com"],
    },
    {
      title: "Sales Manager",
      description:
        "Sales team leader for different verticals of electrical and electronics goods. ",
      qualifications: ["B.Tech", "BBA", "MBA", "B.Com", "M.Com"],
    },
  ];
  return (
    <>
      <div className="mx-[10rem] my-[2rem]">
        <h1 className="font-semibold text-[2.7rem]">Career</h1>
        <p className="font-medium text-gray-600/70 text-xl">
          The calculated amount is approximate. The exact terms of the loan are
          determined individually.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
          {career.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-md shadow-lg overflow-hidden flex flex-col h-[400px] text-center" // Fixed height container
            >
              {/* Header - Fixed height */}
              <div className="bg-yellow-400 py-4 px-4 h-[60px] flex items-center justify-center">
                <h1 className="text-xl font-semibold text-white text-center line-clamp-2">
                  {job.title}
                </h1>
              </div>

              {/* Content container - Fills remaining space */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Job Description - Fixed height with overflow */}
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Job Description
                  </h2>
                  <div className="h-[90px] overflow-y-auto">
                    <p className="text-[0.93rem] text-gray-600 leading-5 font-medium">
                      {job.description}
                    </p>
                  </div>
                </div>

                {/* Qualification - Fixed height with overflow */}
                <h2 className="text-xl font-semibold text-yellow-400 mb-4">
                  Qualification
                </h2>
                <div className="h-[40px] overflow-y-auto">
                  <p className="text-[0.95rem] text-gray-600 font-medium">
                    {job.qualifications.join("/")}
                  </p>
                </div>

                {/* Button - Always at bottom */}
                <div className="mt-4">
                  <button
                    onClick={() => alert("You have applied for this job")}
                    className="w-full flex items-center justify-center space-x-2 text-blue-600 text-lg font-semibold hover:text-blue-700 transition-colors"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[2rem] bg-gray-200/60 ">
        <div className="flex items-center gap-10 px-[10rem] py-[3rem]">
          <div className="w-[30%]">
            <Image src={Career} alt="Career" height={600} />
          </div>
          <div className="w-[70%]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <div className="bg-[#FFF6DC] p-2 rounded-md w-[fit-content]">
                  <Image src={Career1} alt="Career1" height={40} />
                </div>

                <h3 className="text-[1.35rem] font-semibold mt-4">
                  Enjoy the Cool Start up Culture
                </h3>
                <p className="text-sm font-medium text-gray-600/60 mt-4">
                  Young team, open work plan and unlimited cups of coffee to get
                  your grey cells working is what defines our work culture.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <div className="bg-[#FFF6DC] p-2 rounded-md w-[fit-content]">
                  <Image src={Career2} alt="Career1" height={40} />
                </div>

                <h3 className="text-[1.35rem] font-semibold mt-4">
                  Even sky is not our limit
                </h3>
                <p className="text-sm font-medium text-gray-600/60 mt-4">
                  Are you as invested in company's growth as you are in yours?
                  Are you not afraid of hard work or long working hours? We want
                  you!
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <div className="bg-[#FFF6DC] p-2 rounded-md w-[fit-content]">
                  <Image src={Career3} alt="Career1" height={40} />
                </div>

                <h3 className="text-[1.35rem] font-semibold mt-4">
                  Beauty Inside & Out
                </h3>
                <p className="text-sm font-medium text-gray-600/60 mt-4">
                  We have a great taste in design, don't believe us? Just
                  checkout our office space and products for yourself!
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <div className="bg-[#FFF6DC] p-2 rounded-md w-[fit-content]">
                  <Image src={Career4} alt="Career1" height={40} />
                </div>

                <h3 className="text-[1.35rem] font-semibold mt-4">
                  Fun @ Work - Not just all work
                </h3>
                <p className="text-sm font-medium text-gray-600/60 mt-4">
                  Fun activities and frequent team party scenes to keep you from
                  getting dull.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
