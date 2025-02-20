"use client"

import { useEffect, useState } from "react"

interface DonutChartProps {
  principal: number
  interest: number
}

export default function DonutChart({ principal = 600000, interest = 200000 }: DonutChartProps) {
  const [mounted, setMounted] = useState(false)
  const total = principal + interest

  // Adjusted for a slightly larger circle
  const radius = 28 // Slightly larger radius for a balanced look
  const strokeWidth = 12 // Thicker stroke for better visibility
  const circumference = 2 * Math.PI * radius
  const principalPercent = (principal / total) * circumference
  const interestPercent = (interest / total) * circumference

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    })
      .format(amount)
      .replace(/^([^\d]+)/, "₹")
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="w-full max-w-sm mx-auto p-5">
      <div className="relative">
        {/* SVG Donut Chart */}
        <svg viewBox="0 0 100 100" className="w-full transform -rotate-90">
          {/* Principal Circle (Yellow) */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#F6C344"
            strokeWidth={strokeWidth}
            strokeDasharray={`${principalPercent} ${circumference}`}
            className="transition-all duration-1000 ease-in-out"
          />
          {/* Interest Circle (Blue) */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#4361EE"
            strokeWidth={strokeWidth}
            strokeDasharray={`${interestPercent} ${circumference}`}
            strokeDashoffset={-principalPercent}
            className="transition-all duration-1000 ease-in-out"
          />
        </svg>

        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-gray-600 text-sm">In Total</span>
          <span className="text-2xl font-semibold">{formatCurrency(total)}</span>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#F6C344]"></div>
          <span className="text-gray-600">Breakup of total Principal</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#4361EE]"></div>
          <span className="text-gray-600">Total Interest</span>
        </div>
      </div>
    </div>
  )
}
