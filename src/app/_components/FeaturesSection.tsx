import Image from "next/image";
import achivement from "@/assets/img/achivement.webp";
import award from "@/assets/img/award.webp";
import customer from "@/assets/img/customer.webp";
import finance from "@/assets/img/finance.webp";
const FeaturesSection = () => {
  return (
    <>
      {/* Background Image */}
      <div className="relative pb-32">
        <div className="bg-[url('@/assets/img/background.webp')] h-[42vh] bg-cover bg-center">
          <div className="max-w-7xl mx-auto p-10">
            <h2 className="text-center text-white text-3xl font-bold mb-4">
              Why choose us to <span className="text-yellow-600">buy your vehicle?</span>
            </h2>
            <p className="text-center max-w-xl mx-auto text-white mb-12">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>

        {/* Content Section */}

        {/* Feature Cards */}
        <div className="grid grid-cols-4 absolute top-44 h-[35vh] left-1/2 transform -translate-x-1/2 w-4/5 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 shadow-lg flex flex-col justify-around items-center text-center">
              <div className="flex justify-center flex-col items-center gap-4">
                <Image src={feature.icon} height={60} width={60} alt="po image" />
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
              </div>
              <p className="font-xl font-light">{feature.description}</p>
              <hr className="bg-primarycolor h-1 w-5/12 rounded-xl mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const features = [
  {
    icon: achivement,
    title: "Unmatched Quality and Reliability",
    description: "Every vehicle undergoes rigorous inspections to ensure top-notch performance and safety.",
  },
  {
    icon: award,
    title: "Competitive Pricing",
    description: "We offer the best prices in the market without compromising on quality.",
  },
  {
    icon: customer,
    title: "Exceptional Customer Service",
    description: "Our friendly team guides you through every step of the purchasing process.",
  },
  {
    icon: finance,
    title: "Flexible Financing Options",
    description: "We provide tailored financing solutions to make vehicle ownership accessible.",
  },
];

export default FeaturesSection;
