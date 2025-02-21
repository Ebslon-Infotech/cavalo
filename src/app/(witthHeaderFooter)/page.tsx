"use client"
import { Machinery, Pickup, Trailor, Tripper, Truck } from './../../components/svg';
import Banner from '../_components/Banner'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa6'
import Logo1 from '@/assets/logo/logo1.webp'
import Logo2 from '@/assets/logo/logo2.webp'
import Logo3 from '@/assets/logo/logo3.webp'
import Logo4 from '@/assets/logo/logo4.webp'
import Logo5 from '@/assets/logo/logo5.webp'
import Logo6 from '@/assets/logo/logo6.webp'
import Logo7 from '@/assets/logo/logo7.webp'
import Logo8 from '@/assets/logo/logo8.webp'
import Logo9 from '@/assets/logo/logo9.webp'
import Logo10 from '@/assets/logo/logo10.webp'
import CompareCard from '../_components/ComapreTruck'
import BlogSection from '../_components/Blog'
import FeaturesSection from '../_components/FeaturesSection'
import VehicleCategory from '../_components/Category'
import Testimonials from '../_components/Testimonials'
import FAQ from '../_components/Faq'
import TruckCard from '@/components/TruckCard'
export default function page() {

  const company = [
    Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9, Logo10, Logo7, Logo8
  ]
  return (
    <>
      <Banner />
      {/* Best Selling */}
      <section className="flex flex-col p-10 items-center gap-4 bg-gray-100 py-20">
        <div className='flex items-center justify-between gap-4 w-11/12'>
          <div className="text-white w-[95px]"></div>
          <h1 className="text-4xl font-bold">Best <span className="text-primarycolor">Selling</span></h1>
          <p className='text-center'>See All <FaArrowRight className='inline-block' /></p>
        </div>
        <ul className="flex justify-around mt-10 w-11/12 rounded-md bg-gray-200 px-[144px] py-[16px]">
          <li className="flex justify-center rounded-3xl text-xl items-center text-gray-500 hover:bg-black px-5 delay-100 duration-200 ease-in cursor-pointer gap-2 py-2 hover:text-white">
            <Truck />
            Trucks
          </li>
          <li className="flex justify-center rounded-3xl text-xl items-center text-gray-500 hover:bg-black px-5 delay-100 duration-200 ease-in cursor-pointer gap-2 py-2 hover:text-white">
            <Pickup />
            Pickup Trucks</li>
          <li className="flex justify-center rounded-3xl text-xl items-center text-gray-500 hover:bg-black px-5 delay-100 duration-200 ease-in cursor-pointer gap-2 py-2 hover:text-white">
            <Tripper />
            Tipper</li>
          <li className="flex justify-center rounded-3xl text-xl items-center text-gray-500 hover:bg-black px-5 delay-100 duration-200 ease-in cursor-pointer gap-2 py-2 hover:text-white">
            <Trailor />
            Trailer</li>
          <li className="flex justify-center rounded-3xl text-xl items-center text-gray-500 hover:bg-black px-5 delay-100 duration-200 ease-in cursor-pointer gap-2 py-2 hover:text-white">
            <Machinery />
            Machinery</li>
        </ul>
        <div className="grid grid-cols-4 mt-7 w-11/12 gap-10">
          {Array.from({ length: 4 }).map((_, index) => (
            <TruckCard key={index} />
          ))}
        </div>
      </section>

      {/* Browser all vehicles */}
      <section className='py-20'>
        <h1 className='text-center text-4xl font-bold'>Browse used vehicles <span className='text-primarycolor'>by brands</span></h1>
        <div className="grid grid-cols-6 gap-5 w-2/3 self-center mx-auto mt-10 place-items-center">
          {company.map((src, index) => (
            <div key={index} className="w-max">
              <Image src={src} height={200} width={200} alt={`logo-${index}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Compare vehicle */}
      <section className=" bg-gray-100 py-20">
        <div className="container mx-auto">
          <h1 className="text-4xl w-max mx-auto text-center font-bold">Compare <span className="text-primarycolor">Vehicle</span></h1>
          <ul className="flex justify-around mt-10 rounded-md bg-gray-200 px-[144px] py-[16px]">
            <li className="flex justify-center rounded-3xl text-xl items-center text-gray-500 hover:bg-black px-5 delay-100 duration-200 ease-in cursor-pointer gap-2 py-2 hover:text-white">
              <Truck />
              Trucks
            </li>
            <li className="flex justify-center rounded-3xl text-xl items-center text-gray-500 hover:bg-black px-5 delay-100 duration-200 ease-in cursor-pointer gap-2 py-2 hover:text-white">
              <Pickup />
              Pickup Trucks</li>
            <li className="flex justify-center rounded-3xl text-xl items-center text-gray-500 hover:bg-black px-5 delay-100 duration-200 ease-in cursor-pointer gap-2 py-2 hover:text-white">
              <Tripper />
              Tipper</li>
            <li className="flex justify-center rounded-3xl text-xl items-center text-gray-500 hover:bg-black px-5 delay-100 duration-200 ease-in cursor-pointer gap-2 py-2 hover:text-white">
              <Trailor />
              Trailer</li>
            <li className="flex justify-center rounded-3xl text-xl items-center text-gray-500 hover:bg-black px-5 delay-100 duration-200 ease-in cursor-pointer gap-2 py-2 hover:text-white">
              <Machinery />
              Machinery</li>
          </ul>
          <div className="grid grid-cols-12 mt-7 place-items-center gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div className="col-span-4" key={index}>

                <CompareCard />
              </div>
            ))}
          </div></div>
      </section>

      {/* Why choose us */}
      <FeaturesSection />
      {/* by Category vehicle  */}
      <VehicleCategory />
      {/* Testimonials */}
      <Testimonials />
      {/* Blog */}
      <BlogSection />
      {/* Faq */}
      <FAQ />

    </>
  )
}

