"use client"
import Logo from '@/assets/Logo/Logo.webp'
import Link from 'next/link'
import Image from 'next/image'
import { CiLocationOn } from 'react-icons/ci'
import { MdOutlineLocalPhone } from 'react-icons/md'
import truck from '@/assets/Logo/New Truck.webp'
import buses from "@/assets/Logo/New Bus.webp"
import threeWheelers from "@/assets/Logo/New Auto.webp"
import tractors from "@/assets/Logo/New Tractor.webp"
import machinery from "@/assets/Logo/New JCB.webp"
import { IoIosArrowDown } from 'react-icons/io'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import SignInModal from '@/app/_components/authModal'
import { useState } from 'react'

export default function Header2() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <nav className='flex capitalize justify-around items-center py-4 bg-zinc-100 px-20'>
      <Link href="/"><Image height={100} width={100} src={Logo} alt="No image" /></Link>
      <ul className='flex space-x-2'>
        <li className='rounded-3xl px-4 py-1 hover:bg-slate-300 cursor-pointer bg-opacity-25 transition-all duration-500 ease-in-out flex justify-center items-center gap-2'><Image height={20} src={truck} alt='no image' /> truck</li>
        <li className='rounded-3xl px-4 py-1 hover:bg-slate-300 cursor-pointer bg-opacity-25 transition-all duration-75 delay-75 flex justify-center items-center gap-2'><Image height={20} src={buses} alt='no image' /> buses</li>
        <li className='rounded-3xl px-4 py-1 hover:bg-slate-300 cursor-pointer bg-opacity-25 transition-all duration-75 delay-75 flex justify-center items-center gap-2'><Image height={20} src={threeWheelers} alt='no image' /> 3Wheelers</li>
        <li className='rounded-3xl px-4 py-1 hover:bg-slate-300 cursor-pointer bg-opacity-25 transition-all duration-75 delay-75 flex justify-center items-center gap-2'><Image height={20} src={tractors} alt='no image' /> tractors</li>
        <li className='rounded-3xl px-4 py-1 hover:bg-slate-300 cursor-pointer bg-opacity-25 transition-all duration-75 delay-75 flex justify-center items-center gap-2'><Image height={20} src={machinery} alt='no image' /> Machinery</li>
      </ul>
      <ul className='flex space-x-4'>
        <li className='rounded-3xl px-4 py-1  border-2 flex justify-center items-center gap-2'> <CiLocationOn /> Delhi NCR</li>
        <li className='rounded-3xl px-4 py-1  border-2 flex justify-center items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.056 12h-2a1 1 0 0 0 0 2v2H17.87a3 3 0 0 0 .185-1a3 3 0 0 0-5.598-1.5a1 1 0 1 0 1.732 1a1 1 0 0 1 .866-.5a1 1 0 0 1 0 2a1 1 0 0 0 0 2a1 1 0 1 1 0 2a1 1 0 0 1-.866-.5a1 1 0 1 0-1.732 1a3 3 0 0 0 5.598-1.5a3 3 0 0 0-.185-1h1.185v3a1 1 0 0 0 2 0v-7a1 1 0 1 0 0-2m-11.97-.757a1 1 0 1 0 1.94-.486l-1.757-7.03a2.28 2.28 0 0 0-4.425 0l-1.758 7.03a1 1 0 1 0 1.94.486L5.585 9h2.94ZM6.086 7l.697-2.787a.292.292 0 0 1 .546 0L8.026 7Zm7.97 0h1a1 1 0 0 1 1 1v1a1 1 0 0 0 2 0V8a3.003 3.003 0 0 0-3-3h-1a1 1 0 0 0 0 2m-4 9h-1a1 1 0 0 1-1-1v-1a1 1 0 0 0-2 0v1a3.003 3.003 0 0 0 3 3h1a1 1 0 0 0 0-2" /></svg> English</li>
        <li className='rounded-3xl px-4 py-1  border-2 flex justify-center items-center gap-2'><MdOutlineLocalPhone /> 24/7 support</li>
      </ul>
    </nav>
     <nav className='flex capitalize justify-between items-center py-3 pl-[9rem] pr-[8.8rem] shadow-slate-200 shadow-xl'>
            <ul className="flex justify-center text-center items-center gap-12">
              <li className='flex justify-normal items-center gap-2'>new Truck <IoIosArrowDown /></li>
              <li className='flex justify-normal items-center gap-2'>used Truck <IoIosArrowDown /></li>
              <li className='flex justify-normal items-center gap-2'>sell a Truck <IoIosArrowDown /></li>
              <li className='flex justify-normal items-center gap-2'>finance</li>
            </ul>
            <ul className="flex justify-center gap-2 items-center">
              <li className='rounded-3xl w-3/4 border-2 flex justify-normal items-center px-[24px] py-[8px] gap-1'><input name="search" className='outline-none' type="text" placeholder='search' width={100} /><HiMagnifyingGlass size={20} /></li>
              <li className='rounded-3xl bg-primarycolor px-[20px] py-[8px] text-white font-medium cursor-pointer ' onClick={()=> setIsOpen(true)}>login/signup</li>
              {isOpen && <SignInModal onClose={() => setIsOpen(false)} />}
            </ul>
          </nav>
          </>
  )
}

