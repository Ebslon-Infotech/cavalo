"use client"
import React, { useState } from 'react'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';

export default function Page() {
  const [checked, setChecked] = useState<boolean[]>(Array(10).fill(false));

  const handleCheckboxChange = (index: number) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };
  const progress = 20

  return (
    <>
      <div className='flex min-h-screen items-start bg-[url("@/assets/img/quizBackground.webp")] bg-cover justify-center relative'>
        {/* Progress Bar */}
        <div className='absolute top-0 left-0 w-full h-0.5 bg-gray-200'>
          <div
            className='h-full bg-primarycolor'
            style={{ width: `${progress}%` }} // Dynamically set width based on progress
          ></div>
        </div>

        <div className="bg-white rounded-lg shadow-2xl text-center mt-10">
          <div className='px-10'>
            <div className='py-10 text-center'>
              <h1 className='text-xl font-bold'>Lorem ipsum dolor sit amet.</h1>
              <p className='text-sm w-5/6 mx-auto font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, harum accusantium. Cumque, iusto a magnam debitis quia sequi totam pariatur.</p>
            </div>

            <div className='grid grid-cols-2 mx-auto place-items-center gap-5'>
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className={`border-2 w-full rounded-md flex justify-normal items-center gap-2 p-4 ${checked[index] ? 'border-primarycolor' : ''}`}>
                  <input type="checkbox" color='white' name="check" className='accent-primarycolor w-4 h-4 text-white' id={`check-${index}`} checked={checked[index]} onChange={() => handleCheckboxChange(index)} />
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              ))}
            </div>

            <div className='my-10 text-center'>
              <a href='#' className='text-blue-700'>Skip for now</a>
            </div>
          </div>
          <div className='mt-16 flex font-medium justify-center gap-10 py-10 w-full border-t'>
            <button className='flex border capitalize items-center text-primarycolor border-primarycolor py-3 px-5 rounded-lg gap-2'>
              <IoIosArrowRoundBack className='text-primarycolor' size={20} />
              back
            </button>
            <button className='flex text-white items-center capitalize bg-primarycolor py-3 px-5 rounded-lg gap-2'>
              next
              <IoIosArrowRoundForward className='' size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
