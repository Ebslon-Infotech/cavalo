"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import dot1 from "@/assets/img/terms-condition/Dot Pattern 2.webp";
import dot2 from "@/assets/img/terms-condition/Dot Pattern 3.webp";
import { FaAngleRight } from "react-icons/fa6";

export default function page() {
  return (
    <div className="min-h-screen relative pb-32">
      {/* Hero Section */}
      <div className="bg-[#FFF7DF] py-16 overflow-hidden h-[40vh]">
        <div className="absolute top-0 left-0">
          <Image src={dot1} alt="dot1" height={200} width={200} />
        </div>
        <div className="absolute bottom-[80%] right-0">
          <Image src={dot2} alt="dot2" height={200} width={200} />
        </div>

        <div className="flex flex-col items-center justify-center gap-4 ">
          <h1 className="text-[2.7rem] font-semibold text-black uppercase">
            Terms and <span className="text-primarycolor">Conditions</span>
          </h1>

          {/* Breadcrumb */}
          <div className="flex items-center mb-6">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2">
                <li className="inline-flex items-center">
                  <Link
                    href="/"
                    className="inline-flex items-center text-lg font-medium text-black hover:text-primarycolor"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <FaAngleRight />

                    <Link
                      href={`/about-us`}
                      className="ml-1 text-lg font-medium text-black hover:text-primarycolor md:ml-2"
                    >
                      Terms and Conditions
                    </Link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-[6rem] -mt-40">
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl flex flex-col gap-6 mb-16">
          <h2 className="font-semibold text-black text-3xl text-start uppercase">
            Terms and Conditions - Cavalo
          </h2>
          <p className="text-start text-gray-500 font-medium text-[1rem]">
            Welcome to Cavalo, your trusted online platform for buying and
            selling refurbished trucks. The following terms and conditions
            govern your use of our website and the services provided by Cavalo.
            By accessing or using our platform, you agree to comply with and be
            bound by these terms. If you do not agree with any part of these
            terms, please refrain from using our services
          </p>

          <h3 className="font-semibold text-black text-xl text-start uppercase">
            1. Acceptance of Terms
          </h3>
          <p className="text-start text-gray-500 font-medium text-[1rem]">
            By using Cavalo, you acknowledge that you have read, understood, and
            agree to be bound by these terms and conditions. These terms apply
            to all users of the site, including buyers, sellers, and browsers.
          </p>

          <h3 className="font-semibold text-black text-xl text-start uppercase">
            2. Services Provided
          </h3>
          <p className="text-start text-gray-500 font-medium text-[1rem]">
            Cavalo offers an online marketplace for the purchase and sale of refurbished trucks. We connect buyers with reliable sellers, providing a platform to showcase and discover a diverse range of refurbished trucks. Our services include but are not limited to browsing listings, posting trucks for sale, and facilitating transactions.
          </p>

          <h3 className="font-semibold text-black text-xl text-start uppercase">
            3. User Accounts
          </h3>
          <p className="text-start text-gray-500 font-medium text-[1rem]">
            To access certain features of Cavalo, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account information, including your username and password. Any activity that occurs under your account is your sole responsibility. If you suspect unauthorized use of your account, please notify us immediately.
          </p>

          <h3 className="font-semibold text-black text-xl text-start uppercase">
            4. Listing and Selling
          </h3>
          <p className="text-start text-gray-500 font-medium text-[1rem]">
            If you choose to list a truck for sale on Cavalo, you agree to provide accurate and up-to-date information about the truck. You are solely responsible for the content of your listings and for ensuring that your trucks comply with applicable laws and regulations.
          </p>

          <h3 className="font-semibold text-black text-xl text-start uppercase">
            5. Buying
          </h3>
          <p className="text-start text-gray-500 font-medium text-[1rem]">
            As a buyer on Cavalo, you agree to carefully review listings, ask any necessary questions, and make informed purchasing decisions. All transactions are solely between buyers and sellers, and Cavalo is not responsible for the condition, legality, or quality of the trucks listed.
          </p>

          <h3 className="font-semibold text-black text-xl text-start uppercase">
            6. Prohibited Activities
          </h3>
          <p className="text-start text-gray-500 font-medium text-[1rem]">
            You agree not to engage in any activities that violate these terms or applicable laws. Prohibited activities include but are not limited to fraud, harassment, misrepresentation, and infringement of intellectual property rights.
          </p>

          <h3 className="font-semibold text-black text-xl text-start uppercase">
            7. Privacy Policy
          </h3>
          <p className="text-start text-gray-500 font-medium text-[1rem]">
            Your use of Cavalo is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information. Please review our Privacy Policy to understand our practices.
          </p>

          <h3 className="font-semibold text-black text-xl text-start uppercase">
            8. Modifications to Terms
          </h3>
          <p className="text-start text-gray-500 font-medium text-[1rem]">
            Cavalo reserves the right to update or modify these terms and conditions at any time without prior notice. Continued use of the platform after such modifications constitutes acceptance of the updated terms.
          </p>

          <h3 className="font-semibold text-black text-xl text-start uppercase">
            9. Termination of Services
          </h3>
          <p className="text-start text-gray-500 font-medium text-[1rem]">
            Cavalo reserves the right to terminate or suspend access to our services for any user at our discretion, without prior notice or explanation.
          </p>

          <h3 className="font-semibold text-black text-xl text-start uppercase">
            10. Governing Law
          </h3>
          <p className="text-start text-gray-500 font-medium text-[1rem]">
            These terms and conditions are governed by and construed following the laws. Any disputes arising from or in connection with these terms shall be subject to the exclusive jurisdiction of the courts.
          </p>

          <p className="text-start text-gray-500 font-medium text-[1rem]">
            By using Cavalo, you agree to abide by these terms and conditions. If you have any questions or concerns, please contact us at info@cavalo.in.
          </p>
        </div>
      </div>
    </div>
  );
}
