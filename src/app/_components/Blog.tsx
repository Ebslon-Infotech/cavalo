import BlogCard from './BlogCard';
import blog from "@/assets/img/blog.webp"

export default function BlogSection() {
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
    // Repeated data for other cards
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
  ]

  return (
    <section className="bg-[#F6F6F6] ">
      <div className="w-11/12 mx-auto px-4 py-12">
        <div className="flex justify-center items-center mb-8">
          <div className=" w-[95px]"></div>
          <h2 className="text-4xl font-bold flex-1 w-full text-center">
            Latest <span className="text-[#F4B223]">Blog</span>
          </h2>
          <a href="#" className="text-gray-600 font-medium flex items-center gap-2">
            See All
            <span className="text-xl">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog, index) => (
            <BlogCard blog={blog} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

