"use client"
import DonutChart from '@/components/DonutChart'
import React from 'react'
import Select from 'react-select'

export default function page() {
  const [formData, setFormData] = React.useState({
    loanAmount: '',
    interestRate: '',
    loanTerm: '',
  })
  const years = [
    { value: '2021', label: '2021' },
    { value: '2022', label: '2022' },
    { value: '2023', label: '2023' },
    { value: '2024', label: '2024' },
    { value: '2025', label: '2025' }
  ]
  const handleChange = (e: any, field?: string) => {
    if (field) {
      setFormData({ ...formData, [field]: e.value });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
  return (
    <div className='mx-auto w-4/5' >
      <div className='rounded-lg my-10 p-8 shadow-[0_0_0_1px_rgba(0,0,0,0.1)]'>
        <div className='flex flex-col gap-2 justify-start items-start'>
          <h1 className="text-3xl font-semibold">EMI <span className="text-primarycolor">Calculator</span></h1>
          <p className='font-medium text-xl text-gray-500'>The Calculator ammount is approximate. The exact term of the loan are determined individually.</p>
          <div className='flex w-full gap-8 my-5'>
            <div className='bg-secondarycolor w-[40%] col-span-2 rounded-lg'>
              <DonutChart principal={200000} interest={200000} />
            </div>
            {/* Emi calculator form */}
            <div className='rounded-lg w-[60%] bg-[#ececec]'>
              <form className='flex flex-col rounded-t-lg bg-secondarycolor rounded-b-3xl gap-2 p-4'>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='col-span-full'>
                    <label
                      htmlFor="fullName"
                      className="block text-[1rem] font-medium mb-2"
                    >
                      Loan Amount
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      // value={formData.fullName}
                      // onChange={handleChange}
                      className="w-full px-4 py-3 rounded-[0.35rem] bg-white text-black text-[1rem] border border-gray-300 focus:border-yellow-500 focus:outline-none"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-[1rem] font-medium mb-2"
                    >
                      Loan Amount
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      // value={formData.fullName}
                      // onChange={handleChange}
                      className="w-full px-4 py-3 rounded-[0.35rem] bg-white text-black text-[1rem] border border-gray-300 focus:border-yellow-500 focus:outline-none"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="state"
                      className="block text-[1rem] font-medium mb-2"
                    >
                      State
                    </label>
                    <Select
                      options={years}
                      placeholder="Select years"
                      value={
                        years.find((s) => s.value === formData.loanTerm) ||
                        null
                      }
                      onChange={(selectedOption) =>
                        handleChange(selectedOption, "state")
                      }
                      required
                      className="block w-full py-[0.35rem] rounded-[0.35rem] border border-gray-300 bg-white text-[1rem] text-gray-900 focus:border-[#f0a75b] focus:outline-none"
                      styles={{
                        control: (styles) => ({
                          ...styles,
                          backgroundColor: "transparent",
                          border: "none",
                          boxShadow: "none",
                        }),
                        option: (styles, { isFocused, isSelected }) => ({
                          ...styles,
                          backgroundColor: isSelected
                            ? "#f8b738"
                            : isFocused
                              ? "#f8b738"
                              : "transparent",
                          color: isSelected ? "black" : "inherit",
                          fontSize: "0.9rem",
                          fontWeight: "500",
                        }),
                        menu: (styles) => ({
                          ...styles,
                          backgroundColor: "white",
                        }),
                        menuList: (styles) => ({
                          ...styles,
                          overflowY: "auto",
                          scrollbarWidth: "none",
                          msOverflowStyle: "none",
                        }),
                        placeholder: (styles) => ({
                          ...styles,
                          color: "darkslategrey",
                          fontSize: "0.9rem",
                          fontWeight: "600",
                        }),
                        singleValue: (styles) => ({
                          ...styles,
                          color: "darkslategrey",
                          fontSize: "1rem",
                          fontWeight: "600",
                        }),
                      }}
                    />
                  </div>
                  <div className='col-span-full text-center '>
                    <button className='bg-primarycolor rounded-md text-white outline-none border-none font-semibold p-2.5 px-6'>Calculate</button>
                  </div>
                </div>
              </form>

              <div className='flex flex-col w-11/12 mx-auto py-4 gap-5'>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center gap-2'>
                    <span className='bg-blue-400 h-4 p-2 w-4 block rounded-full'></span> Total Interest Payement
                  </div>
                  <p className='font-semibold'>₹10,00,000</p>
                </div>
                <div className='flex pb-5 border-b border-gray-600 justify-between items-center'>
                  <div className='flex items-center gap-2'>
                    <span className='bg-blue-400 h-4 p-2 w-4 block rounded-full'></span> Total Interest Payement
                  </div>
                  <p className='font-semibold'>₹10,00,000</p>
                </div>
                <div className='flex flex-1 justify-between items-center'>
                  <div className='flex items-start justify-start flex-col'>
                    <p className='text-sm font-medium'>EMI</p>
                    <p className='text-xs'>Monthly Payment</p>
                  </div>
                  <div className='flex items-end justify-end flex-col'>
                    <p className='text-green-600 font-semibold'>₹10,00,00 /<span className='font-light text-xs '>months</span></p>
                    <p className='text-xs'>Calculated on road price</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
