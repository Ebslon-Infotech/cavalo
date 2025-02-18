import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Language from "@/assets/Logo/Language.webp";
import { MdOutlineLocalPhone, MdOutlineMailOutline } from "react-icons/md";
export default function FollowUs() {
  return (

    <div className="flex bg-yellow-500 items-center justify-between py-3 px-20">
      <ul className="flex gap-3 justify-center items-center">
        <li className="text-lg font-semibold">Follow Us :-</li>
        <li className=""><FaInstagram size={20}/></li>
        <li className=""><FaFacebookF size={20} /></li>
        <li className="text-lg font-bold"><FaXTwitter size={20} /></li>
      </ul>
      <ul className="flex gap-4">
        <li className="flex justify-center font-semibold items-center gap-1"><MdOutlineMailOutline/>Info@cavalo.in</li>
        <li className="flex justify-center font-semibold items-center gap-1"><MdOutlineLocalPhone />+91 7021411346</li>
        <li className='rounded-md px-5 py-1 font-semibold border-2 border-black flex justify-center items-center gap-2'><Image className="text-black" height={18} src={Language} alt='no image' />English</li>
      </ul>
    </div>
  );
}
