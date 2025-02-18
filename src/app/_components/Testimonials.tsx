import truck from "@/assets/img/turck img1.webp"
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { FaPlay } from "react-icons/fa";

export default function Testimonials() {


  return (
    <section className="py-14 text-white bg-[#262626]">
      <h1 className="py-4 font-bold text-4xl text-center">Customer <span className="text-primarycolor">Testimonials</span></h1>
      <p className="pb-5 text-lg font-medium text-center">What our happy customers have to say about us</p>
      <Swiper navigation={true} pagination={{ clickable: true }} modules={[Navigation, Pagination]} className="mySwiper testimonials">
        {Array.from({ length: 5 }).map((_, index) => (<SwiperSlide key={index}>
          <div className='flex items-center bg-[#404041] justify-center w-[70%] mx-auto p-12 rounded-xl'>
            <div className='w-2/3 pr-10'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minima consequatur, dicta hic facilis reprehenderit eius libero? Accusantium quos nesciunt, facilis facere voluptatem atque deleniti veniam recusandae enim dolorum iste doloremque possimus dolor. Velit.</p>
            </div>
            <div className="w-4/6 relative">
              <Image src={truck} className="aspect-[16/9] rounded-lg object-cover" alt='no image' />
              <div className="absolute inset-0 flex items-center justify-center">
                <FaPlay className="text-white text-4xl" />
              </div>
            </div>
          </div>
        </SwiperSlide>))}
      </Swiper>
    </section>
  )
}
