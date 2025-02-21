import React from 'react'
import Image from 'next/image'
import img from "@/assets/img/blog/background.webp"
import Link from 'next/link'
export default function page() {
  return (
    <>
      <div className="min-h-screen flex w-11/12 mx-auto gap-5">
        <div className='basis-3/4'>
          <div className='bg-[url("@/assets/img/blog/background.webp")] bg-cover bg-center h-96'>
          </div>
          <div className='px-4 py-5 border'>
            <div className='flex justify-between'>
              <p>By daniel</p>
              <div>
                oct 01,2024 | Bussiness
              </div>
            </div>
            <p className='mt-5 text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At tenetur doloribus cumque architecto culpa iure eum, soluta explicabo odio laboriosam aut cupiditate quisquam aliquid repudiandae asperiores assumenda voluptatum facere quibusdam officia sunt voluptatem amet vel? Suscipit blanditiis repellendus veniam ut porro itaque dolorum provident minus, voluptas fuga facilis dignissimos expedita possimus magni doloremque quidem, quod cum incidunt doloribus inventore. Blanditiis aliquid dolorum ullam vel adipisci minima in accusantium molestias, totam dolorem tempora alias nisi, quisquam quo asperiores nesciunt corporis distinctio quam voluptatem maiores ad! Delectus, id eligendi? Minus dicta sed ipsum unde eos suscipit? Eligendi non beatae necessitatibus dolorum illo voluptatibus quod sunt saepe aliquam quia obcaecati, asperiores cum accusantium harum provident omnis quas quaerat cumque minus nihil? Corrupti dolore delectus quod aperiam ex voluptate sequi dignissimos quas est dicta fuga molestiae sunt, pariatur tempora nulla at, in similique, omnis distinctio. Assumenda, perferendis esse expedita excepturi inventore mollitia tenetur nobis, numquam veritatis animi asperiores culpa exercitationem autem nesciunt repudiandae alias natus! Sed, debitis repudiandae eos minus error qui esse cupiditate, amet quidem minima inventore dolor quo optio dolorem facere distinctio! Veritatis, neque! Distinctio sunt magnam, natus officia maiores recusandae deleniti sapiente consequuntur optio! Eveniet mollitia autem provident dolore debitis modi.
            </p>
          </div>
        </div>
        {/* Realted articles */}
        <div className="flex-1">
          <div className="bg-black p-4 rounded-md">
            <h1 className="text-primarycolor text-xl font-semibold">Related Articles</h1>
          </div>
          <div className="flex flex-col pt-2 gap-2 border">
            {
              Array.from({ length: 5 }).map((_, index) => (
                <div key={index}>
                  <div className="border relative shadow-[0_1px_1px_0px_rgba(0,0,0,0.1)] flex rounded-lg mx-1 gap-2">
                    <Image src={img} alt="blog" height={30} className="rounded-l-md" />
                    <div className='absolute text-xl w-[5.4vw] font-semibold h-full top-0 left-0 bg-[rgba(0,0,0,0.8)] flex items-center justify-center text-white p-1 '>
                      <div className="flex items-center flex-col justify-center">
                        <p className='text-3xl'>01</p>
                        <p className='text-sm'>Oct</p>
                      </div>

                    </div>
                    <div className="flex flex-col p-2 gap-1">
                      <p className="text-sm font-medium">Lorem adipisicing elit. Repudiandae, minus!</p>
                      <p className="text-[.7rem] font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, amet!</p>
                      <a className="font-medium text-sm text-blue-500">View Details</a>
                    </div>
                  </div>
                </div>
              ))
            }
            <Link href="/blog" className="py-3 text-white w-full bg-primarycolor rounded-md text-center">View All</Link>
          </div>
        </div>
      </div>
    </>
  )
}
