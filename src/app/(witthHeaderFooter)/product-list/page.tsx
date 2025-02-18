"use client"

import { useState } from "react"
import minitruck from "@/assets/img/category/minitruck.webp"
import truck from "@/assets/img/category/Truck.webp"
import pickup from "@/assets/img/category/Pickup.webp"
import tipper from "@/assets/img/category/tripper.webp"
import trailer from "@/assets/img/category/trailer.webp"
import transitMixer from "@/assets/img/category/transitmixer.webp"
import { CiLocationOn } from "react-icons/ci"
import ton from "@/assets/Logo/ton.webp"
import cargo from "@/assets/Logo/cargo.webp"
import available from "@/assets/Logo/available.webp"
import { FaArrowRight } from "react-icons/fa"
import Image from "next/image"
import truck1 from "@/assets/img/turck img1.webp"
// Types for our data
interface Vehicle {
  id: number
  brand: string
  model: string
  location: string
  specs: {
    cc: number
    weight: number
    fuel: string
    capacity: number
  }
  price: number
  image: string
}

// Mock data
const vehicles: Vehicle[] = [
  {
    id: 1,
    brand: "Mercedes-Benz",
    model: "Mercedes-Benz Actros 3344",
    location: "Delhi",
    specs: {
      cc: 3783,
      weight: 4995,
      fuel: "Diesel",
      capacity: 180,
    },
    price: 1500000,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%2012.09.03%E2%80%AFPM-KhiHxigOac9p75FF7pdH4caBNKJi5k.png",
  },
  // Add more vehicles as needed
]

const categories = [
  { name: "Truck", count: 20, icon: truck },
  { name: "Pickup", count: 20, icon: pickup },
  { name: "Mini Truck", count: 20, icon: minitruck },
  { name: "Tipper", count: 20, icon: tipper },
  { name: "Trailer", count: 20, icon: trailer },
  { name: "Transit Mixer", count: 20, icon: transitMixer },
]

const priceRanges = [
  { label: "Less than 5 lakh", count: 20 },
  { label: "5 lakh - 10 lakh", count: 20 },
  { label: "10 lakh - 15 lakh", count: 20 },
  { label: "15 lakh - 20 lakh", count: 20 },
  { label: "20 lakh - 30 lakh", count: 20 },
  { label: "30 lakh - 40 lakh", count: 20 },
  { label: "Above 40 lakh", count: 20 },
]

const brands = [
  { name: "Ashok Leyland", count: 20 },
  { name: "Tata", count: 20 },
  { name: "Mahindra", count: 20 },
  { name: "BharatBenz", count: 20 },
  { name: "Eicher", count: 20 },
  { name: "SML Isuzu", count: 20 },
  { name: "Toyota", count: 20 },
]

export default function VehicleListing() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [brandSearch, setBrandSearch] = useState("")
  const [showSortDropdown, setShowSortDropdown] = useState(false)

  const filteredBrands = brands.filter((brand) => brand.name.toLowerCase().includes(brandSearch.toLowerCase()))

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-10">
        {/* Sidebar */}
        <div className="space-y-6 border rounded-lg px-5 py-2">
          {/* Categories */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Category</h2>
            <div className="grid grid-cols-3">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={` text-center hover:border-blue-500 transition-colors ${selectedCategories.includes(category.name) ? "border-blue-500" : "border-gray-200"
                    }`}
                  onClick={() => {
                    setSelectedCategories((prev) =>
                      prev.includes(category.name) ? prev.filter((c) => c !== category.name) : [...prev, category.name],
                    )
                  }}
                >
                  <div className="text-2xl mb-2 flex items-center justify-center"><Image src={category.icon} width={40} alt="no image" /></div>
                  <div className="text-sm">{category.name}</div>
                  <div className="text-xs text-gray-500">({category.count})</div>
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Price Range</h2>
            <div className="space-y-2">
              {priceRanges.map((range) => (
                <label key={range.label} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300"
                    checked={selectedPriceRanges.includes(range.label)}
                    onChange={(e) => {
                      setSelectedPriceRanges((prev) =>
                        e.target.checked ? [...prev, range.label] : prev.filter((r) => r !== range.label),
                      )
                    }}
                  />
                  <span className="flex-1">{range.label}</span>
                  <span className="text-gray-500">({range.count})</span>
                </label>
              ))}
            </div>
          </div>

          {/* Brands */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Brands</h2>
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search brands"
                value={brandSearch}
                onChange={(e) => setBrandSearch(e.target.value)}
                className="w-full px-8 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute left-2 top-2.5">🔍</span>
            </div>
            <div className="space-y-2">
              {filteredBrands.map((brand) => (
                <label key={brand.name} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300"
                    checked={selectedBrands.includes(brand.name)}
                    onChange={(e) => {
                      setSelectedBrands((prev) =>
                        e.target.checked ? [...prev, brand.name] : prev.filter((b) => b !== brand.name),
                      )
                    }}
                  />
                  <span className="flex-1">{brand.name}</span>
                  <span className="text-gray-500">({brand.count})</span>
                </label>
              ))}
            </div>
          </div>
        </div>


        {/* Main Content */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">
              Showing <span className="text-primarycolor">Result</span>
            </h1>
            <div className="relative">
              <button
                className="px-4 py-2 border rounded-lg flex items-center gap-2 hover:bg-gray-50"
                onClick={() => setShowSortDropdown(!showSortDropdown)}
              >
                Short by
                <span className="text-xs">▼</span>
              </button>
              {showSortDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-1 z-10">
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-50">Price: Low to High</button>
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-50">Price: High to Low</button>
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-50">Newest First</button>
                </div>
              )}
            </div>
          </div>

          <div className="max-h-screen overflow-x-auto no-scrollbar px-1 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 100 }).map((vehicle, index) => (
              <>
                {(index != 0 && index % 6 === 0) &&
                  <div className="h-[20vh] bg-cover col-span-full group z-10 bg-[url('@/assets/img/category/banner.webp')]"></div>
                }
                <div className="w-3xl group rounded-sm border-2 bg-white" key={index}>
                  <div className="relative">
                    {/* Truck Image Carousel */}
                    <Image
                      className="w-full"
                      src={truck1}
                      alt="Truck"
                    />
                    {/* Location Tag */}
                  </div>

                  {/* Card Content */}
                  <div className="relative h-[2vh]">
                    <div className="absolute flex justify-center items-center gap-1 font-semibold top-0 transition-all delay-75 duration-200 -right-3 bg-black text-white px-4 z-20 py-1 text-lg rounded-tr-xl rounded-bl-xl z-4 group-hover:bg-primarycolor">
                      <CiLocationOn />
                      Mumbai
                    </div>
                    <div className="absolute transition-all delay-75 duration-200 bg-black -right-2 top-7 z-0 transform rotate-45 h-[15px] w-[15px] group-hover:bg-primarycolor"></div>
                  </div>
                  <div className="my-4 mx-5">
                    <h2 className="text-xl font-semibold">Ashok Leyland</h2>
                    <p className="text-gray-500">Ashok Leyland 1920 4X2 Tipper | AL192042</p>

                    {/* Info Icons Section */}
                    <div className="flex justify-between mt-5 py-2 text-sm border-t-2 border-b-2 text-gray-600">
                      <div className="text-center flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 1024 1024">
                          <path fill="currentColor" d="m960 95.888l-256.224.001V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985m0 863.985H64v-800h255.776v32.24c0 17.679 14.32 32 32 32s32-14.321 32-32v-32.224h256v32.24c0 17.68 14.32 32 32 32s32-14.32 32-32v-32.24H960zM736 511.888h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32m0 255.984h64c17.664 0 32-14.32 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.696 14.336 32 32 32m-192-128h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32m0-255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32m-256 0h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32m0 255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32" />
                        </svg>
                        <p>2020</p>
                      </div>
                      <div className="text-center flex flex-col items-center">
                        <Image src={ton} width={13} height={13} alt="no image" />
                        <p>12 Ton</p>
                      </div>
                      <div className="text-center flex flex-col items-center">
                        <Image src={cargo} width={13} height={13} alt="no image" />
                        <p>Cargo</p>
                      </div>
                      <div className="text-center flex flex-col items-center">
                        <Image src={available} width={13} height={13} alt="no image" />
                        <p>Available</p>
                      </div>
                    </div>

                    {/* Pricing and Action */}
                    <div className="flex justify-between items-center my-5">
                      <div>
                        <p className="text-sm font-meduim text-gray-500">EMI Starts from</p>
                        <p className="text-xl font-bold text-primarycolor">₹15,000 <span className='text-sm text-black font-light'>/months</span></p>
                      </div>
                      <button className="flex items-center gap-2 font-medium">
                        See details <FaArrowRight />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

