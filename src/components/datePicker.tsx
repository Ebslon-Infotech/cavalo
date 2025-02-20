"use client"

import { useState, useEffect, useRef } from "react"
import { IoCalendarOutline } from "react-icons/io5";

interface DatePickerProps {
  value: string
  onChange: (value: string) => void
  format?: "DD/MM/YYYY" | "MM/DD/YYYY"
  placeholder?: string
}

export function DatePicker({ value, onChange, format = "DD/MM/YYYY", placeholder }: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentDate, setCurrentDate] = useState(new Date())
  const containerRef = useRef<HTMLDivElement>(null)

  // Close calendar when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, "0")
    const month = (date.getMonth() + 1).toString().padStart(2, "0")
    const year = date.getFullYear()
    const shortYear = year.toString().slice(-2)

    return format === "DD/MM/YYYY" ? `${day}/${month}/${year}` : `${month}/${day}/${shortYear}`
  }

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getMonthDays = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const daysInMonth = getDaysInMonth(year, month)
    const firstDay = new Date(year, month, 1).getDay()

    const days = []
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(null)
    }
    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i)
    }
    return days
  }

  const handleDateSelect = (day: number) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    onChange(formatDate(newDate))
    setIsOpen(false)
  }

  const changeMonth = (increment: number) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + increment, 1))
  }

  return (
    <div ref={containerRef} className="relative">
      <div className="relative w-full px-4 py-3 rounded-[0.35rem] bg-white text-black text-[1rem] border border-gray-300 focus:border-yellow-500 focus:outline-none">
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          onClick={() => setIsOpen(true)}
          readOnly
          className="w-full bg-white rounded-[0.35rem] pr-10 cursor-pointer focus:outline-none"
        />
        <IoCalendarOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none w-5 h-5" />
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-1 p-4 bg-white rounded-[0.35rem] shadow-lg border border-gray-200 w-full">
          <div className="flex justify-between items-center mb-4">
            <button onClick={() => changeMonth(-1)} className="p-1 hover:bg-gray-100 rounded">
              ←
            </button>
            <div className="font-semibold">
              {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
            </div>
            <button onClick={() => changeMonth(1)} className="p-1 hover:bg-gray-100 rounded">
              →
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="font-semibold p-2">
                {day.toLocaleUpperCase()}
              </div>
            ))}
            {getMonthDays().map((day, index) => (
              <div key={index}>
                {day && (
                  <button onClick={() => handleDateSelect(day)} className="w-full p-2 hover:bg-gray-100 rounded-full">
                    {day}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

