import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/Logo/cavalo.webp"
import mail from '@/assets/img/mail.webp'

import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <>
      {/* Newsletter Section */}
      <div className=" bg-[#404041] text-white p-4">
        <div className="flex items-center gap-5 justify-center mx-auto text-center">
          <Image src={mail} alt='no image' width={40} />
          <div className='flex justify-normal flex-col items-start'>
            <h3 className="text-2xl font-bold ">JOIN OUR NEWSLETTER</h3>
            <p className='text-left'>Get Exclusive offer and News</p>
          </div>
          <form className="flex gap-5">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 w-[20vw] rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
              required
            />
            <button type="submit" className="px-6 py-2 border border-white text-white rounded hover:bg-gray-800 transition-colors">
              Subscribe →
            </button>
          </form>
        </div>
      </div>
      <footer className="bg-[#1C1C1C] bg-[url('@/assets/img/footerBanner.webp')] bg-contain text-white py-5">
        <div className="w-[80%] mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Image
                src={logo}
                alt="Cavalo Logo"
                width={120}
                className=" text-white"
              />
              <p className="leading-7 mt-4 w-3/4 text-sm font-medium">
                Welcome to Cavalo, your go-to platform for buying and selling refurbished trucks. Find or sell trucks
                easily with our user-friendly site. Whether you're experienced or new, Cavalo makes the process simple.
                Start today!
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-[#FFB800] font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about-us" className="hover:text-[#FFB800]">
                    About Us
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FFB800]">
                    Finance
                  </a>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-[#FFB800]">
                    Blog
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FFB800]">
                    Faqs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FFB800]">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <Link href="/terms-and-conditions" className="hover:text-[#FFB800]">
                    Term & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Category */}
            <div>
              <h3 className="text-[#FFB800] font-semibold mb-4">Category</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-[#FFB800]">
                    Trucks
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FFB800]">
                    Buses
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FFB800]">
                    3 Wheelers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FFB800]">
                    Tractors
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FFB800]">
                    Machinery
                  </a>
                </li>
              </ul>
            </div>

            {/* other links */}
            <div>
              <h3 className="text-[#FFB800] font-semibold mb-4">Other Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-[#FFB800]">
                    Become a Partner
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FFB800]">
                    RC Transfer Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FFB800]">
                    Customer Care
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FFB800]">
                    Vehicle Requirement
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FFB800]">
                    EMI Calculator
                  </a>
                </li>
              </ul>
            </div>
            {/* Contact Info */}
            <div>
              <h3 className="text-[#FFB800] font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span>📞</span>
                  <a href="tel:+917021411346" className="hover:text-[#FFB800]">
                    +91 7021411346
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span>✉️</span>
                  <a href="mailto:info@cavalo.in" className="hover:text-[#FFB800]">
                    info@cavalo.in
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span>📍</span>
                  <span>Location</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="mt-12 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">Copyright © 2024, CAVALO, Design & Developed by Epsilon Infotech</p>
            <div className="flex gap-4">
              <span className="text-[#FFB800]">Follow Us</span>
              <a href="#" className="hover:text-[#FFB800]">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-[#FFB800]">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-[#FFB800]">
                <FaXTwitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

