import blog from "@/assets/img/blog.webp"
import Image from "next/image"

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      image: blog,
      category: "TRUCKS",
      date: { day: "28", month: "May" },
      title: "Lorem Ipsum is simply dummy text",
      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du...",
    },
    // Repeated data for other cards
    {
      id: 2,
      image: blog,
      category: "TRUCKS",
      date: { day: "28", month: "May" },
      title: "Lorem Ipsum is simply dummy text",
      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du...",
    },
    {
      id: 3,
      image: blog,
      category: "TRUCKS",
      date: { day: "28", month: "May" },
      title: "Lorem Ipsum is simply dummy text",
      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard du...",
    },
    {
      id: 4,
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
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm border transition-shadow duration-300"
            >
              <div className="relative">
                <Image
                  src={blog.image || "/placeholder.svg"}
                  alt="Truck driver standing in front of trucks"
                  className="w-full aspect-[4/3] object-cover"
                />
                {/* <span className="absolute top-3 right-3 bg-gray-900 text-white text-xs px-3 py-1 rounded">
                {blog.category}
              </span> */}
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
                <a
                  href="#"
                  className="text-primarycolor pb-3 hover:text-primarycolor transition-colors flex items-center gap-1 text-lg font-semibold"
                >
                  Read more
                  <span className="text-lg">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

