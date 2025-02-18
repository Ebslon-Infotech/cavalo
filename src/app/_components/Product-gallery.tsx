"use client"

import Image from "next/image"
import { useState } from "react"
import { IoMdShare } from "react-icons/io"
import tick from "@/assets/img/Gallery/tick.webp"
import truck from "@/assets/img/turck img1.webp"
import trucklogo from "@/assets/img/Gallery/truck.webp"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import total from "@/assets/img/Gallery/total.webp"
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
import { FaChevronRight, FaExclamation, FaHeart, FaPhone, FaRupeeSign } from "react-icons/fa6"
import { MdOutlineLocalPhone } from "react-icons/md"
import { FiMinus } from "react-icons/fi"
import { TiTick } from "react-icons/ti"
import right from "@/assets/img/Gallery/Right.webp"
import wrong from "@/assets/img/Gallery/Wrong.webp"
import asclamation from "@/assets/img/Gallery/Asclation Mark.webp"
import { RxCross2 } from "react-icons/rx"
import TruckCard from "@/components/TruckCard"
import VehicleComparison from "./ComapreTruck"
import EMIcalculator from "@/components/EMI"

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
    <>
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
            <div className="rounded-lg mt-10 p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.1)]">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Inspection <span className="text-primarycolor">Report</span></h1>
                <FiMinus size={20} />
              </div>
              <div className="rounded-lg mt-10 p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.1)]">
                {
                  Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="flex gap-3 pb-3 flex-col items-start w-full">
                      <h1>Body</h1>
                      <div className="flex flex-wrap gap-5 items-center w-full justify-between">
                        <div className="flex basis-[50%] flex-col gap-2 pr-10 border-r border-gray-400">
                          {
                            Array.from({ length: 6 }).map((_, index) => (
                              <div className="flex items-center justify-between" key={index}>
                                <div className="flex gap-2">
                                  <Image alt="no image" height={30} src={Warranty} />
                                  <p>Lorem, ipsum.</p>
                                </div>
                                <div className="flex gap-2">
                                  <div className="bg-red p-2">
                                    <Image alt="no image" height={20} src={right} />
                                  </div>
                                  <div className="bg-red p-2">
                                    <Image alt="no image" height={20} src={asclamation} />
                                  </div>
                                  <div className="bg-red p-2">
                                    <Image alt="no image" height={20} src={wrong} />
                                  </div>
                                </div>
                              </div>
                            ))
                          }
                        </div>
                        <div className="flex flex-col basis-[45%] gap-2">
                          {
                            Array.from({ length: 6 }).map((_, index) => (
                              <div className="flex items-center justify-between" key={index}>
                                <div className="flex gap-2">
                                  <Image alt="no image" height={30} src={tick} />
                                  <p>Lorem, ipsum.</p>
                                </div>
                                <div className="flex gap-2">
                                  <div className="bg-red p-2">
                                    <Image alt="no image" height={20} src={right} />
                                  </div>
                                  <div className="bg-red p-2">
                                    <Image alt="no image" height={20} src={asclamation} />
                                  </div>
                                  <div className="bg-red p-2">
                                    <Image alt="no image" height={20} src={wrong} />
                                  </div>
                                </div>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
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
            <div className="mt-10 rounded-lg py-6 p-6  bg-gray-50">
              <h1 className="text-xl font-semibold">Buy Similar <span className="text-primarycolor">used trucks</span></h1>
              <Swiper modules={[Navigation, Pagination]} slidesPerView={2} spaceBetween={10} navigation={true} pagination={{ clickable: true }} className="mySwiper gallery-similar-truck mt-5">
                <div className=" w-11/12 mx-auto">
                  {
                    Array.from({ length: 10 }).map((_, index) => (
                      <SwiperSlide key={index}>
                        <div className="flex flex-col gap-2 w-[95%] rounded-lg bg-white mx-auto ">
                          <VehicleComparison />
                        </div>
                      </SwiperSlide>
                    ))
                  }
                </div>
              </Swiper>
            </div>
            {/* Latest News */}
            <div className="rounded-lg mt-10 py-6 bg-gray-50">
              <h1 className="text-xl font-semibold pl-5">Latest <span className="text-primarycolor">News</span></h1>
              <Swiper modules={[Navigation, Pagination]} slidesPerView={3} spaceBetween={40} navigation={true} pagination={{ clickable: true }} className="mySwiper gallery-news mt-5">
                <div className="w-11/12 mx-auto">
                  {
                    Array.from({ length: 10 }).map((_, index) => (
                      <SwiperSlide key={index}>
                        <div className="flex flex-col gap-2 w-[90%] rounded-lg bg-white mx-auto h-max">
                          <Image src={truck} alt="no image" className="aspect-[1/full]" height={250} />
                          <div className="px-3 flex-col flex gap-2">
                            <p className="flex text-sm font-medium text-gray-700 items-center gap-2 justify-between">
                              <span>20 May 2024</span>
                              <span>2 days ago</span>
                            </p>
                            <h1 className="font-semibold">Truck News</h1>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, consequatur!</p>
                            <a className="text-primarycolor font-medium py-2">Read more <FaChevronRight className="inline-block" /></a>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))
                  }
                </div>
              </Swiper>
            </div>
          </div>
        </div >

        {/* second half */}
        <div className="basis-1/5 w-full h-max" >
          {/* Ads card */}
          <div className="rounded-lg bg-[#FFF6D9]" >
            <div className="flex flex-col gap-2 p-5">
              <h1 className="font-semibold text-2xl">Get this Truck Financed</h1>
              <div className="text-sm font-normal">
                <p>Short on cash ?</p>
                <p>We've got your car financing needs sorted</p>
              </div>
              <button className="rounded-lg py-3 bg-primarycolor text-xs w-3/4 font-semibold">Finance for SML Truck</button>
            </div>
            <div className="flex justify-end items-center">
              <div className="rounded-tl-[10rem] basis-11/12 py-4 bg-[#FFECAF] flex justify-end items-center">
                <Image height={90} src={trucklogo} alt="image" className="mr-10" />
              </div>
            </div>
          </div >
          {/* EMI calcuator */}
          <div className="border border-gray-100 rounded-lg mt-10 p-3 shadow-[0_0_0_1px_rgba(0,0,0,0.1)] w-full">
            <h1 className="text-xl font-semibold">EMI <span className="text-primarycolor">Calculator</span></h1>
            <EMIcalculator/>
            <div className="flex flex-col gap-2 mt-2">
              {
                Array.from({ length: 2 }).map((_, index) => (
                  <div className="flex justify-between mt-2" key={index}>
                    <div className="flex gap-2 items-center">
                      <div className="bg-primarycolor h-5 w-5 rounded-md"></div>
                      <p className="font-light text-xs">Lorem, ipsum dolor.</p>
                    </div>
                    <p className="text-sm font-semibold">₹1,00,000</p>
                  </div>
                )
                )
              }
              <hr className="border-dashed text-black bg-black" />
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <Image src={total} height={20} alt="image" />
                  <p className="font-light text-xs">Lorem, ipsum dolor.</p>
                </div>
                <p className="text-sm font-semibold">₹1,00,000</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 justify-center-items-center">
              {
                Array.from({ length: 3 }).map((_, index) => (
                  <>
                    <div className="flex justify-between items-center font-semibold text-sm" key={index}>
                      <p>Loan Amount</p>
                      <p>₹1,00,000</p>
                    </div>
                    <input type="range" className="h-1.5 bg-primarycolor appearance-auto rounded-lg cursor-pointer accent-primarycolor"
                    />
                    <div className="flex justify-between items-center font-semibold text-gray-500 text-xs">
                      <p>₹1,00,000</p>
                      <p>₹8,00,000</p>
                    </div>
                  </>
                ))
              }
            </div>
            <div className="text-center">
              <button className="px-5 py-2 bg-primarycolor text-white rounded-lg mt-5 mx-auto">
                Check Eligibility
              </button>
            </div>
            <div className="py-3 bg-gray-50 text-[0.7rem] text-left px-3 rounded-b-xl mt-5">
              <p className="border-b border-dashed py-2">*Proccessing fees and additional loan charges are not included</p>
              <p className="mt-1"><span className="font-medium">Disclamer</span>the applicable interest rate may vary based on the credit profile</p>
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
        </div >
      </div>
      {/* Buy similar truck */}
      <div className="mt-10 py-6 w-11/12 mx-auto">
        <h1 className="text-xl font-semibold pl-5">Buy Similar <span className="text-primarycolor">used trucks</span></h1>
        <Swiper modules={[Navigation, Pagination]} slidesPerView={4} spaceBetween={10} navigation={true} pagination={{ clickable: true }} className="mySwiper gallery-similar-truck mt-5">
          <div className=" w-11/12 mx-auto">
            {
              Array.from({ length: 10 }).map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col gap-2 w-[95%] rounded-lg bg-white mx-auto ">
                    <TruckCard />
                  </div>
                </SwiperSlide>
              ))
            }
          </div>
        </Swiper>
      </div>
    </>
  )
}


