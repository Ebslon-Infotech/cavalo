import React from 'react'

export default function page() {
  return (
    <div className='mx-auto w-4/5'>
      <div className='rounded-lg my-10 p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.1)]'>
        <div className='flex flex-col gap-3 justify-start items-start'>
          <h1 className="text-3xl font-semibold">Frequently Asked <span className="text-primarycolor">Questions</span></h1>
          <p className='font-medium text-xl text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, voluptatum!</p>
          <div className='flex gap-5'>
            <div className='basis-4/12 flex flex-col py-4 h-max'>
              {
                Array.from((new Array(5)).keys()).map((_, i) => (
                  <div key={i} className='py-2 w-full bg-primarycolor'>
                    General Questions
                  </div>
                ))
              }
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
