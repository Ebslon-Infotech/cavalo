import React from "react";
import Image from "next/image";

interface Blog {
  id: string;
  image: any;
  category: string;
  date: {
    day: string;
    month: string;
  };
  title: string;
  excerpt: string;
}

export default function BlogCard({ blog }: { blog: Blog }) {
  return <article key={blog.id} className="bg-white rounded-xl overflow-hidden shadow-sm border transition-shadow duration-300">
    <div className="relative">
      <Image src={blog.image || "/placeholder.svg"} alt="Truck driver standing in front of trucks" className="w-full aspect-[4/3] object-cover" />
      {
        /* <span className="absolute top-3 right-3 bg-gray-900 text-white text-xs px-3 py-1 rounded">
        {blog.category}
        </span> */
      }
    </div>

    <div className="px-6 pt-4">
      <div className="flex gap-2 pb-2 items-end justify-end mb-3">
        <div className="border-r-2 pr-4">
          <span className="block text-4xl font-bold text-primarycolor">{blog.date.day}</span>
          <span className="block font-semibold text-primarycolor">{blog.date.month}</span>
        </div>
        <h3 className=" font-semibold px-2 text-2xl">{blog.title}</h3>
      </div>
      <p className="text-gray-600  mb-4 text-base font-light">{blog.excerpt}</p>
      <a href="#" className="text-primarycolor pb-3 hover:text-primarycolor transition-colors flex items-center gap-1 text-lg font-semibold">
        Read more
        <span className="text-lg">→</span>
      </a>
    </div>
  </article>;
}
