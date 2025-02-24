import BlogCard from "@/app/_components/BlogCard";
import blog from "@/assets/img/blog.webp"
import Image from "next/image";

export default function page() {
  const blogs = [
    {
      id: "1",
      image: blog,
      category: "TRUCKS",
      date: { day: "28", month: "May" },
      title: "Lorem Ipsum is simply dummy text",
      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du...",
    },
    {
      id: "2",
      image: blog,
      category: "TRUCKS",
      date: { day: "28", month: "May" },
      title: "Lorem Ipsum is simply dummy text",
      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du...",
    },
    {
      id: "3",
      image: blog,
      category: "TRUCKS",
      date: { day: "28", month: "May" },
      title: "Lorem Ipsum is simply dummy text",
      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du...",
    },
    {
      id: "4",
      image: blog,
      category: "TRUCKS",
      date: { day: "28", month: "May" },
      title: "Lorem Ipsum is simply dummy text",
      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du...",
    },
    {
      id: "4",
      image: blog,
      category: "TRUCKS",
      date: { day: "28", month: "May" },
      title: "Lorem Ipsum is simply dummy text",
      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du...",
    },
    {
      id: "4",
      image: blog,
      category: "TRUCKS",
      date: { day: "28", month: "May" },
      title: "Lorem Ipsum is simply dummy text",
      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du...",
    },
    {
      id: "4",
      image: blog,
      category: "TRUCKS",
      date: { day: "28", month: "May" },
      title: "Lorem Ipsum is simply dummy text",
      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du...",
    },
    {
      id: "4",
      image: blog,
      category: "TRUCKS",
      date: { day: "28", month: "May" },
      title: "Lorem Ipsum is simply dummy text",
      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du...",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        {/* Latest Blogs Section */}
        <div className="flex flex-col gap-8">
          <div className="text-left">
            <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
              Latest <span className="text-primarycolor">Blogs</span>
            </h1>
            <p className="mt-3 text-xl text-gray-600 ">
              We're here to help! Contact us with any questions, concerns, or feedback for top-notch service.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <BlogCard blog={blog} key={index} />
            ))}
          </div>
          <div className="text-center mt-6">
            <button className="px-6 py-3 text-white bg-primarycolor rounded-full font-semibold hover:bg-opacity-90 transition-colors">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
