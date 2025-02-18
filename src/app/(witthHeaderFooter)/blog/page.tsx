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
  ];

  return (
    <>
      <div className="flex w-11/12 mx-auto gap-5">
        {/* Latest blog */}
        <div className="basis-3/4 p-4">
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl font-semibold">
              Latest <span className="text-primarycolor">Blogs</span>
            </h1>
            <p className="text-xl">
              We're here to help! Contact us with any questions, concerns, or feedback for top-notch service.
            </p>
            <div className="grid grid-cols-3 gap-10">
              {blogs.map((blog, index) => (
                <BlogCard blog={blog} key={index} />
              ))}
            </div>
          </div>
        </div>
        {/* Recent Blog - Takes remaining space */}
        <div className="flex-1">
          <div className="bg-black p-4 rounded-md">
            <h1 className="text-primarycolor text-xl font-semibold">Recent Blogs</h1>
          </div>
          <div className="flex flex-col mt-2 gap-2">
            {
              Array.from({ length: 5 }).map((_, index) => (
                <div key={index}>
                  <div className="border shadow-[0_1px_1px_0px_rgba(0,0,0,0.1)] flex rounded-lg mx-2 gap-2">
                    <Image src={blog} alt="blog" height={70} className="rounded-l-md" />
                    <div className="flex flex-col p-2 gap-1">
                      <p className="text-sm font-medium">Lorem adipisicing elit. Repudiandae, minus!</p>
                      <p className="text-[.7rem] font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, amet!</p>
                      <a className="font-medium text-sm text-blue-500">View Details</a>
                    </div>
                  </div>
                </div>
              ))
            }
            <button className="py-3 text-white w-full bg-primarycolor rounded-md">View All</button>
          </div>
        </div>
      </div>
    </>
  );
}
