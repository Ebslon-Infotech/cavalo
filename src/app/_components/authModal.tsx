"use client"

import { useState, useEffect } from "react"
import { LuUserRound } from "react-icons/lu"
import { MdOutlineLocalPhone } from "react-icons/md"

export default function SignInModal({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState("sign-in")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [fullName, setFullName] = useState("")
  const [optsent, setOptsent] = useState(false)
  // Add scroll lock effect
  useEffect(() => {
    // Prevent scrolling
    document.body.style.overflow = 'hidden';

    // Cleanup function to re-enable scrolling
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`)
        nextInput?.focus()
      }
    }
  }

  const handleResendOtp = () => {
    // Implement OTP resend logic
    console.log("Resending OTP...")
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setOptsent(true)
    // Implement login logic
    console.log("Logging in with OTP:", otp.join(""))
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center overflow-y-auto">
      <div className="min-h-screen w-full py-8 px-4 relative ">
        <div className="bg-white py-5 pt-10 px-8 rounded-sm w-full max-w-md absolute top-[8%] right-32">
          {/* Tabs */}
          <div className="flex border-b relative">
            <button
              onClick={onClose}
              className="right-4  absolute rounded-full border bg-gray-200 p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <button
              className={`py-3 font-semibold font-sm w-3/12 text-left ${activeTab === "sign-in" ? "border-b-2 border-black" : "text-gray-500"
                }`}
              onClick={() => setActiveTab("sign-in")}
            >
              Sign in
            </button>
            <button
              className={`py-3 font-semibold font-sm w-3/12 text-left ${activeTab === "sign-up" ? "border-b-2 border-black" : "text-gray-500"
                }`}
              onClick={() => setActiveTab("sign-up")}
            >
              Sign up
            </button>
          </div>

          <div className="pt-4">
            <h1 className="text-2xl py-2 font-bold mb-6">SIGN IN</h1>

            <form onSubmit={handleLogin} className="space-y-6 flex flex-col gap-2">
              {optsent && <div>
                <h2 className="text-xl font-medium mb-2">We&apos;ve Sent You an OTP</h2>
                <p className="text-gray-600 text-sm font-medium w-4/6">Please Enter the 6 Digit OTP sent to {phoneNumber}</p>
              </div>}

              {activeTab === "sign-up" && <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Full Name<span className="text-red-600">*</span></label>
                <div className="flex justify-normal gap-2 pr-2 items-center border rounded-md">
                  <input
                    type="text"
                    placeholder="Enter full name"
                    value={fullName}
                    autoCapitalize="off"
                    required
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3  py-2 focus:outline-none outline-none border-none"
                  />
                  <LuUserRound size={20} />
                </div>
              </div>}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Phone No.<span className="text-red-600">*</span></label>
                <div className="flex justify-normal gap-2 pr-2 items-center border rounded-md">
                  <input
                    type="text"
                    value={phoneNumber}
                    autoCapitalize="off"
                    required
                    placeholder="Enter phone number"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-3  py-2 focus:outline-none outline-none border-none"
                  />
                  <MdOutlineLocalPhone size={20} />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">OTP <span className="text-red-600">*</span></label>
                <div className="flex justify-between">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      required
                      maxLength={1}
                      value={digit}
                      autoComplete="off"
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      className="w-12 h-12 text-center text-lg border border-gray-300 rounded-sm focus:outline-none "
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center text-sm underline font-2xl font-medium">
                <span className="text-gray-600">Didn&apos;t Receive OTP?</span>
                <button type="button" onClick={handleResendOtp} className="text-red-600 hover:text-red-700">
                  Resend OTP
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-3 font-medium px-4 bg-yellow-500 hover:bg-yellow-600 text-black rounded-sm transition-colors"
              >
                Login
              </button>

              <div className="text-center text-sm text-gray-600">
                Don&apos;t Have an Account Yet?{" "}
                <a href="#" className="underline">
                  Sign-Up here
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
