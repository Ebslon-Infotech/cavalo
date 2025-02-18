export default function EMIcalculator() {
  // Calculate the circumference of the semi-circle
  const radius = 80
  const circumference = radius * Math.PI

  // Set the fill to 15% as an example (adjust as needed)
  const fillPercentage = 35
  const dashOffset = circumference - (circumference * fillPercentage) / 100

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="relative">
        {/* SVG for the gauge */}
        <svg viewBox="0 0 180 90" className="w-full">
          {/* Single arc path for both background and fill */}
          <path d="M 10 90 A 80 80 0 0 1 170 90" fill="none" stroke="#FFF9C4" strokeWidth="20" strokeLinecap="round" />
          <path
            d="M 10 90 A 80 80 0 0 1 170 90"
            fill="none"
            stroke="#FFD54F"
            strokeWidth="20"
            strokeLinecap="butt"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            className="transition-all duration-1000 ease-in-out"
          />
        </svg>

        {/* Content overlay */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center text-center mb-4">
          <p className="text-xs text-gray-600 mb-1 font-medium">EMI starting from</p>
          <p className="text-2xl font-bold text-primarycolor">
            <span className="text-2xl">₹</span>16,236
          </p>
          <p className="text-sm text-gray-600">per month</p>
        </div>

        {/* Range markers */}
        <div className="flex justify-between mt-2">
          <span className="text-sm text-gray-600">₹0</span>
          <span className="text-sm text-gray-600">₹10,00,000</span>
        </div>
      </div>
    </div>
  )
}

