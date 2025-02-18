"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import Mask from "@/assets/img/aboutus/Mask group.webp";
import tick from "@/assets/img/Gallery/tick.webp";
import about1 from "@/assets/img/aboutus/about1.webp";
import about2 from "@/assets/img/aboutus/about2.webp";
import FeaturesSection from "@/app/_components/FeaturesSection";
import mission from "@/assets/img/aboutus/mission.webp";
import vision from "@/assets/img/aboutus/vision.webp";
import customer from "@/assets/img/aboutus/customer.webp";
import vehicle from "@/assets/img/aboutus/vechile.webp";
import years from "@/assets/img/aboutus/years.webp";
import team from "@/assets/img/aboutus/team.webp";
import founder1 from "@/assets/img/aboutus/founder2.webp";
import founder2 from "@/assets/img/aboutus/founder1.webp";
import x from "@/assets/img/aboutus/x.webp"
import facebook from "@/assets/img/aboutus/facebook.webp"
import instagram from "@/assets/img/aboutus/instagram.webp"
import team1 from "@/assets/img/aboutus/team1.webp"
import team2 from "@/assets/img/aboutus/team2.webp"
import team3 from "@/assets/img/aboutus/team3.webp"
import team4 from "@/assets/img/aboutus/team4.webp"
import newsletter from "@/assets/img/aboutus/newsletter.webp"

export default function page() {
  const features = [
    "Vehicle Specification",
    "Expert Guidance",
    "Guidance on Finance & Insurance",
    "Compilance & Documentation",
    "Compilance & Documentation",
  ];

  const founder = [
    {
      image: founder1,
      name: "Divyam Agarwal",
      designation: "Co-founder",
      description:
        "A dynamic force in the truck industry, Divyam Agarwal's forward-thinking approach and dedication elevate Cavalo's standards. His leadership ensures the company's continued success, fostering innovation and customer satisfaction.",
    },
    {
      image: founder2,
      name: "Pramod Agarwal",
      designation: "Co-founder",
      description:
        "A seasoned entrepreneur, Pramod Agarwal's strategic prowess fuels Cavalo's growth. His unwavering commitment to excellence and vast industry knowledge positions the company as a frontrunner, delivering quality trucks and unmatched service.",
    },
  ];

  const teamMember = [
     {
          image: team1,
          name: "Ruthvik",
          designation: "Procurement Head"
     },
     {
          image: team2,
          name: "Nisha",
          designation: "Finance"
     },
     {
          image: team3,
          name: "Rupali",
          designation: "Sales Head"
     },
     {
          image: team4,
          name: "Rasika",
          designation: "sales"
     },
  ]

  return (
    <>
      <div
        className={`flex items-center bg-cover justify-center bg-[url('@/assets/img/aboutus/bannerImage.webp')] h-[20rem]`}
      >
        {/* <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div> */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[2.7rem] font-bold text-white">
            About <span className="text-primarycolor"> Us</span>
          </h1>

          {/* Breadcrumb */}
          <div className="flex items-center mb-6">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2">
                {/* Home */}
                <li className="inline-flex items-center">
                  <Link
                    href="/"
                    className="inline-flex items-center text-sm font-medium text-white hover:text-primarycolor"
                  >
                    Home
                  </Link>
                </li>

                {/* about */}
                <li>
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <Link
                      href={`/about-us`}
                      className="ml-1 text-sm font-medium text-white hover:text-primarycolor md:ml-2"
                    >
                      About
                    </Link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-10 w-full max-w-[1440px] mx-auto my-10">
        <div className="w-[45%] relative">
          <Image
            src={about2}
            alt="banner image"
            height={550}
            className="ml-36 flex items-end"
          />
          <Image
            src={about1}
            alt="about"
            height={300}
            width={300}
            className="absolute bottom-0 left-0"
          />
        </div>
        <div className="w-[50%]">
          <h3 className="text-primarycolor font-normal text-2xl mb-2">
            Who We Are
          </h3>
          <h1 className="text-4xl font-bold mb-4">
            We are best For Secure Business Transport
          </h1>
          <p className="">
            Welcome to Cavalo, the online platform for buying and selling
            refurbished trucks. We are a team of passionate truck enthusiasts
            who are committed to making the process of buying and selling trucks
            as seamless as possible. With Cavalo, you can easily find the
            perfect refurbished truck for your business or sell your own truck
            at a fair price. Our platform is designed to be user-friendly and
            intuitive, with a wide range of filters and search options to help
            you find the perfect truck. Whether you're a seasoned truck owner or
            new to the market, Cavalo is the perfect place to buy or sell your
            refurbished truck. So why wait? Start your journey with Cavalo
            today!
          </p>

          <div className="flex items-center gap-10 mt-6">
            <div className="bg-gray-200/60 rounded-b-md flex flex-col relative w-[30%]">
              <div className="bg-primarycolor rounded-t-lg h-[0.15rem] absolute top-0 left-0 w-full"></div>
              <div className="flex flex-col items-center justify-center gap-3 p-4">
                <Image src={Mask} alt="about us" width={60} height={60} />
                <h1 className="font-medium text-2xl text-center px-4">
                  <strong className="text-primarycolor">25+ </strong>Years of
                  Experience
                </h1>
              </div>
            </div>

            <div className="flex flex-col gap-3 w-[60%]">
              {features.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Image src={tick} alt="about" height={25} width={25} />
                  <h3 className="">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <FeaturesSection />

      <div className="flex justify-between gap-20 my-12 mx-[10rem]">
        <div className="w-full bg-gray-200/50 flex flex-col items-center justify-center p-10 rounded-lg">
          <Image
            src={mission}
            alt="mission"
            height={50}
            width={50}
            className="text-center"
          />
          <h2 className="text-black text-3xl font-semibold my-6">
            Our <span className="text-primarycolor">Mission</span>
          </h2>
          <p className="text-center">
            At Cavalo, our mission is to offer a reliable platform for buying
            and selling refurbished trucks across India. We aim to reach truck
            buyers and sellers nationwide, providing a transparent, hassle-free
            experience.
          </p>
        </div>
        <div className="w-full bg-gray-200/50 flex flex-col items-center justify-center p-10 rounded-lg">
          <Image src={vision} alt="vision" height={50} width={50} />
          <h2 className="text-black text-3xl font-semibold my-6">
            Our <span className="text-primarycolor">Vision</span>
          </h2>
          <p className="text-center">
            Now that you know what we do, Learn about the values that drive us
            and makes our customers fall in love with our services.
          </p>
        </div>
      </div>

      <div className="bg-black/90 flex justify-evenly p-16">
        <div className="flex items-center gap-4">
          <Image src={customer} alt="customer" width={60} height={50} />
          <div className="flex flex-col justify-start text-white">
            <h2 className="text-4xl font-bold">500+</h2>
            <p className="text-md font-medium">Customers</p>
          </div>
        </div>
        <hr className="rotate-90 text-white border-white w-[8rem] my-auto" />
        <div className="flex items-center gap-4">
          <Image src={vehicle} alt="customer" width={60} height={50} />
          <div className="flex flex-col justify-start text-white">
            <h2 className="text-4xl font-bold">5000+</h2>
            <p className="text-md font-medium">Vehicles</p>
          </div>
        </div>
        <hr className="rotate-90 text-white border-white  w-[8rem] my-auto" />

        <div className="flex items-center gap-4">
          <Image src={years} alt="customer" width={60} height={50} />
          <div className="flex flex-col justify-start text-white">
            <h2 className="text-4xl font-bold">25+</h2>
            <p className="text-md font-medium">Years of Experience</p>
          </div>
        </div>
        <hr className="rotate-90 text-white border-white  w-[8rem] my-auto" />

        <div className="flex items-center gap-4">
          <Image src={team} alt="customer" width={60} height={50} />
          <div className="flex flex-col justify-start text-white">
            <h2 className="text-4xl font-bold">20+</h2>
            <p className="text-md font-medium">Team Members</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-10 my-10">
        <h1 className="text-[2.5rem] font-semibold">
          Founder & <span className="text-primarycolor">Mentor</span>
        </h1>
        <div className="flex gap-10 items-center mx-[8rem]">
          {founder.map((item, index) => (
            <div key={index} className="flex shadow-2xl w-full">
              <Image src={item.image} alt={item.name} height={500} width={350} />
              <div className="flex flex-col items-start justify-center p-10 w-full">
                <h1 className="font-bold text-3xl">{item.name}</h1>
                <h3 className="text-gray-600 font-semibold">{item.designation}</h3>
                <p className="mt-4 text-justify">{item.description}</p>
                <div className="mt-8 flex items-center gap-4">
                  <h3 className="font-medium">Follow us </h3>
                  <Image src={facebook} alt="facebook" height={24} width={24} />
                  <Image src={instagram} alt="facebook" height={24} width={24} />
                  <Image src={x} alt="facebook" height={24} width={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`flex flex-col items-center bg-cover justify-center bg-[url('@/assets/img/aboutus/teamM.webp')] h-[45rem] mt-10`}
      >
          <div className="text-center">
               <h1 className="text-5xl font-semibold">
                    Team <span className="text-primarycolor">Member</span>
               </h1>
               <p className="text-[1.25rem] mx-[25rem]">
               We have a team of specialists who are highly skilled and experienced experts in their respective fields, ensuring top-quality results.
               </p>
          </div>

          <div className="flex gap-10 items-center pb-10 mt-10">
               {
                    teamMember.map((item,index) => (
                         <div key={index} className="flex flex-col items-center bg-white shadow-xl">
                              <Image src={item.image} alt={item.name} height={500} width={300} />
                              <div className="text-center p-2">
                                   <h2 className="mt-2 font-semibold text-2xl">
                                        {item.name}
                                   </h2>
                                   <p>
                                        {item.designation}
                                   </p>
                              </div>
                         </div>
                    ))
               }
          </div>
      </div>
    </>
  );
}
