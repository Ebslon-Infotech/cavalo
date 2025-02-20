import DonutChart from '@/components/DonutChart'
import React from 'react'

export default function page() {
  return (
    <div className='mx-auto w-4/5'>
      <div className='rounded-lg my-10 p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.1)]'>
        <div className='flex flex-col gap-2 justify-start items-start'>
          <h1 className="text-3xl font-semibold">EMI <span className="text-primarycolor">Calculator</span></h1>
          <p className='font-medium text-xl text-gray-500'>The Calculator ammount is approximate. The exact term of the loan are determined individually.</p>
          <div className='grid w-full mt-5 grid-cols-2 md:grid-cols-3 gap-4'>
            <div className='bg-secondarycolor rounded-lg'>
              <DonutChart principal={200000} interest={200000} />
            </div>
            <div className='col-span-2 rounded-md bg-gray-300'>
              <div className='flex flex-col gap-2 p-4'>
                <div className='grid'>

                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
