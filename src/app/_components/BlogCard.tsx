import React from "react";
import Image from "next/image";

import Link from "next/link";
import { RxAvatar } from "react-icons/rx";

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

const BlogCard = ({ blog }: any) => (
  <div className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer">
    <Image
      src={blog.image || "/placeholder-blog.jpg"}
      alt={blog.title}
      width={400}
      height={250}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
        {blog.title}
      </h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {blog.excerpt || "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
      </p>
      <Link href={`/blog/${blog.id}`}
        className="text-primarycolor font-medium text-sm hover:underline"
      >
        Read More
      </Link>
    </div>
  </div>
);


export default BlogCard
