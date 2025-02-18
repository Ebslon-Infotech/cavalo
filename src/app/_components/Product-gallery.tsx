"use client"

import Image from "next/image"
import { useState } from "react"
import { IoMdShare } from "react-icons/io"
import tick from "@/assets/img/Gallery/tick.webp"
import truck from "@/assets/img/turck img1.webp"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Warranty from "@/assets/img/Gallery/Warranty.webp"
import hassle from "@/assets/img/Gallery/hassle.webp"
import buyback from "@/assets/img/Gallery/buyback.webp"
import price from "@/assets/img/Gallery/price.webp"
import road from "@/assets/img/Gallery/road.webp"
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Engine from "@/assets/img/Gallery/engine.webp"
import Power from "@/assets/img/Gallery/Power.webp"
import GVW from "@/assets/img/Gallery/GVW.webp"
import Fuel from "@/assets/img/Gallery/Fuel.webp"
import Payload from "@/assets/img/Gallery/Payload.webp"
import Types from "@/assets/img/Gallery/Types.webp"
import Wheelbase from "@/assets/img/Gallery/wheelbase.webp"
import Transmission from "@/assets/img/Gallery/transimission.webp"
import { CiHeart, CiLocationOn } from "react-icons/ci"
import { FaHeart, FaPhone, FaRupeeSign } from "react-icons/fa6"
import { MdOutlineLocalPhone } from "react-icons/md"
import { FiMinus } from "react-icons/fi"

export default function ProductGallery() {
  const [activeImage, setActiveImage] = useState(0)
  const tabs = [
    "Highlights",
    "Truck Information",
    "Benefits",
    "Inspection Report",
    "Description",
    "Compare",
    "Similar Trucks",
    "EMI Calculator",
  ]
  const Highlights = [
    {
      icon: Engine,
      name: "Engine",
      description: "H series BS-VI"
    },
    {
      icon: Power,
      name: "Power",
      description: "144 HP"
    },
    {
      icon: GVW,
      name: "GVW",
      description: "14250 KG"
    },
    {
      icon: Fuel,
      name: "Fuel Tank",
      description: "360 Ltr."
    },
    {
      icon: Payload,
      name: "Payload",
      description: "NA"
    },
    {
      icon: Types,
      name: "No. of Tyres",
      description: "6"
    },
    {
      icon: Wheelbase,
      name: "Wheelbase",
      description: "5200 mm"
    },
    {
      icon: Transmission,
      name: "Transmission",
      description: "Synchromesh"
    },
  ]

  const Benefits = [
    { icon: Warranty, name: "1year Warranty" },
    { icon: hassle, name: "5 Day hassle free return" },
    { icon: buyback, name: "Guaranteed Buyback option" },
    { icon: price, name: "Fixed price assurance" },
    { icon: road, name: "24/7 Roadside Assistance" },
  ]

  const [activeTab, setActiveTab] = useState(0)
  const images = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20at%2010.30.42%E2%80%AFAM-CCITJ8gRKxrSBKWNk4knLdlWgfAqpM.png",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ]

  return (
    <div className="flex gap-4 w-11/12 mx-auto">
      {/* first half */}
      <div className="grid p-5 basis-3/4 grid-cols-2 h-max gap-10">
        {/* Gallery */}
        <div className="h-[20rem] w-[40rem] flex flex-row-reverse gap-5">
          <div className="overflow-hidden relative rounded-lg">
            <Swiper modules={[Navigation, Pagination]} navigation={true} pagination={{ clickable: true }} className="mySwiper gallery">
              {
                Array.from({ length: 5 }).map((_, index) => (
                  <SwiperSlide key={index}>
                    <Image src={truck || ""} alt="Product image" width={900} className="object-cover" />
                  </SwiperSlide>
                ))
              }
            </Swiper>
            <button className="text-right flex items-center gap-1 hover:bg-primarycolor duration-200 delay-100 transition-colors hover:text-white absolute top-6 z-10 text-sm transform -translate-y-1/2 right-2 bg-white bg-opacity-50 p-1 rounded-md">
              <IoMdShare /> Share
            </button>
          </div>

          <div className="flex flex-col justify-around h-full my-auto items-center w-max gap-[.8rem]">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={` w-max ${activeImage === index ? "ring-2 rounded-md ring-primary" : ""
                  }`}
              >
                <Image
                  src={truck || "/placeholder.svg"}
                  height={70}
                  alt={`Product thumbnail ${index + 1}`}
                  className="object-cover rounded-md"
                />
              </button>
            ))}
          </div>
        </div>
        {/* Details */}
        <div className="flex flex-col justify-around w-[90%] ml-[4rem]">
          <button className="flex items-center gap-1 text-sm text-gray-500">
            <CiLocationOn color="blue" size={15} />
            <span className="font-semibold">Location</span>
          </button>
          <h2 className="font-semibold text-2xl tracking-wider">Lorem ipsum dolor sit amet consectetur.</h2>
          <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem consequuntur soluta eos ut quas unde fugiat minima enim qui? Alias voluptatum laudantium praesentium!</p>
          <div className="flex gap-5 text-[.75rem] font-medium">
            <p>Brand : <span className="text-[.7rem]">Tata</span></p>
            <p>Model : <span className="text-[.7rem]">TA3224</span></p>
            <p>Body : <span className="text-[.7rem]">Cargo</span></p>
            <p>Body : <span className="text-[.7rem]">Cargo</span></p>
          </div>
          <div>
            <p className="text-green-600 font-bold text-xl">
              ₹1,00,000
            </p>
            <p className="text-[0.6rem]">EMI starts at ₹30,000 /months</p>
          </div>
          <div className="flex gap-[1.3rem]">
            <button className="flex gap-2 items-center justify-center border text-sm bg-black text-white px-6 py-3 w-[45%] rounded-xl"><MdOutlineLocalPhone size={24} />Know more offers</button>
            <button className="flex gap-2 items-center border-black justify-center text-sm border px-6 py-3 w-[45%] rounded-xl"><CiHeart size={24} />Save for later</button>
          </div>
        </div>
        {/* highlights */}
        <div className="col-span-full">
          <ul className="flex justify-between border-b border-gray-200 items-center">
            {
              tabs.map((_, index) => (
                <li key={index} onClick={() => setActiveTab(index)} className={`cursor-pointer py-2 text-[0.9rem] px-2  ${activeTab === index ? "border-b-2 border-black font-semibold text-black" : "font-medium  text-gray-500"}`}>{_}</li>
              ))
            }
          </ul>
          {/* isuzu details */}
          <div className="rounded-lg mt-10 p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.1)]">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-2xl">SML Isuzu Samrat GS WB 4240 <span className="text-primarycolor">Highlights</span></h1>
              <FiMinus size={20} />
            </div>
            <div className="flex gap-2 justify-between">
              {

                Highlights.map((_, index) => (
                  <div key={index} className="mt-4 basis-1/5 shadow-slate-200 shadow-lg p-3 rounded-lg flex flex-col justify-start items-center gap-2 w-[20%]">
                    <Image src={_.icon} alt={_.name} width={45} height={45} />
                    <div className="text-center text-sm">
                      <h3 className="font-semibold text-sm">{_.name}</h3>
                      <p className="text-gray-500">{_.description}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          {/* Truck information */}
          <div className="rounded-lg mt-10 p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.1)]">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold">Truck <span className="text-primarycolor">Information</span></h1>
              <FiMinus size={20} />
            </div>
            <table className="w-full mt-6 text-left">
              <tbody>
                {
                  Array.from({ length: 15 }).map((_, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100 outline-none' : 'bg-white'}`}>
                      <td className="py-4 px-4 w-[15rem] font-semibold">Feature {index + 1}</td>
                      <td className="py-4 font-medium">Details {index + 1}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
          {/* inspection report */}
          <div>
          </div>
          {/* Benefits */}
          <div className="rounded-lg mt-10 p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.1)]">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold">Benefits & <span className="text-primarycolor">add-ons</span></h1>
              <FiMinus size={20} />
            </div>
            <ul className="flex flex-wrap justify-between px-8 mt-10 items-center">
              {
                Benefits.map((_, index) => (
                  <li key={index} className="flex w-40 h-full px-5 flex-col gap-2 items-center justify-start">
                    <Image src={_.icon} alt={_.name} width={45} height={45} />
                    <p className="text-center text-[0.93rem] font-medium">{_.name}</p>
                  </li>
                ))
              }
            </ul>
          </div>
          {/* truck description */}
          <div className="rounded-lg mt-10 p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.1)]">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold">Truck <span className="text-primarycolor">Description</span></h1>
              <FiMinus size={20} />
            </div>
            <div className="mt-5">
              <h1 className="font-medium text-xl">SMI Isuzu Samrat GS WB 4240 Truck Description</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe cum voluptatum culpa id dolorum voluptatem, libero sint, perspiciatis rem molestiae sit obcaecati natus ad fugiat sed beatae aut accusantium? Doloremque facilis nostrum quaerat sint porro quod ex odit veritatis autem.</p>
              <h1 className="font-medium mt-5 text-xl">More About used SMI Isuzu Samrat GS WB 4240</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae alias a ducimus sit est quidem, consequuntur harum vitae non dignissimos illum ea inventore atque unde ab incidunt accusamus. Iure soluta assumenda ullam autem animi possimus eos fugiat aut maxime quasi. Eum, rem! Corrupti pariatur laudantium sed quod autem nulla nihil!
              </p>
              <p className="mt-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque mollitia natus debitis, repudiandae fugiat at laborum voluptatibus temporibus eius expedita doloremque ducimus molestiae delectus inventore laboriosam ex dicta! Velit corporis mollitia obcaecati repellendus repellat. Molestias ducimus ex, consequuntur temporibus, omnis adipisci dolore illo consequatur enim pariatur earum incidunt necessitatibus totam!
              </p>
            </div>
          </div>

        </div>
      </div>
      {/* second half */}
      <div className="basis-1/5 w-full">
        {/* Ads card */}
        <div className="rounded-lg bg-[#FFF6D9]">
          <div className="flex flex-col gap-2 p-5">
            <h1 className="font-semibold text-2xl">Get this Truck Financed</h1>
            <div className="text-sm">
              <p>Short on cash ?</p>
              <p>We've got your car financing needs sorted</p>
            </div>
            <button className="rounded-lg px-6 py-3 bg-primarycolor text-sm w-5">Finance for SML Truck</button>
          </div>
          <div className="">
            <Image height={100} src={truck} alt="image" />
          </div>
        </div>
        {/* Sell truck */}
        <div className="rounded-lg mt-10 p-3 shadow-[0_0_0_1px_rgba(0,0,0,0.1)] w-full">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">Similar <span className="text-primarycolor">Trucks</span></h1>
            <span className="text-blue-700 text-xs">Sell All</span>
          </div>
          {Array.from({ length: 5 }).map((_, index) => (
            <div className="flex gap-5 items-start mt-5 border border-gray-100 p-2 rounded-md">
              <Image src={truck} height={50} alt="image" />
              <div className="flex flex-col font-semibold">
                <h2 className="text-sm">Ashok Leylan AVTR 2620 -6x2 LA</h2>
                <p className="text-green-600 text-xs">From ₹30,00,000</p>
              </div>
            </div>
          ))}
        </div>
        {/* reason to buy */}
        <div className="rounded-lg mt-10 p-3 shadow-[0_0_0_1px_rgba(0,0,0,0.1)] bg-gray-100/30 w-full">
          <h1 className="text-xl font-semibold mt-2">Reasons to <span className="text-primarycolor">Buy</span></h1>
          <ul className="mt-5">
            {
              Array.from({ length: 4 }).map((_, index) => (
                <li key={index} className="flex gap-2 items-start justify-normal mb-4">
                  <Image src={tick} height={25} alt="no image" />
                  <div className="flex flex-col gap-[0.12rem]">
                    <h2 className="font-semibold">Lorem ipsum dolor sit.</h2>
                    <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptas.</p>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}


