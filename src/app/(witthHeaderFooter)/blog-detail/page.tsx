"use client"
import React from "react";
import Image from "next/image";
import img from "@/assets/img/blog/background.webp";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import required Swiper modules
import { Navigation, Pagination } from "swiper/modules";

export default function Page() {
  // Sample related articles data
  const relatedArticles = [
    {
      id: 1,
      title: "Related Article 1",
      author: "John Doe",
      date: "05-02-2025",
      image: "/path/to/image1.jpg",
    },
    {
      id: 2,
      title: "Related Article 2",
      author: "Jane Smith",
      date: "06-02-2025",
      image: "/path/to/image2.jpg",
    },
    {
      id: 3,
      title: "Related Article 3",
      author: "Bob Johnson",
      date: "07-02-2025",
      image: "/path/to/image3.jpg",
    },
    {
      id: 3,
      title: "Related Article 3",
      author: "Bob Johnson",
      date: "07-02-2025",
      image: "/path/to/image3.jpg",
    },
    {
      id: 3,
      title: "Related Article 3",
      author: "Bob Johnson",
      date: "07-02-2025",
      image: "/path/to/image3.jpg",
    },
    {
      id: 3,
      title: "Related Article 3",
      author: "Bob Johnson",
      date: "07-02-2025",
      image: "/path/to/image3.jpg",
    },
    {
      id: 3,
      title: "Related Article 3",
      author: "Bob Johnson",
      date: "07-02-2025",
      image: "/path/to/image3.jpg",
    },
    {
      id: 3,
      title: "Related Article 3",
      author: "Bob Johnson",
      date: "07-02-2025",
      image: "/path/to/image3.jpg",
    },
    {
      id: 3,
      title: "Related Article 3",
      author: "Bob Johnson",
      date: "07-02-2025",
      image: "/path/to/image3.jpg",
    },
    {
      id: 3,
      title: "Related Article 3",
      author: "Bob Johnson",
      date: "07-02-2025",
      image: "/path/to/image3.jpg",
    },
    {
      id: 3,
      title: "Related Article 3",
      author: "Bob Johnson",
      date: "07-02-2025",
      image: "/path/to/image3.jpg",
    },
    {
      id: 3,
      title: "Related Article 3",
      author: "Bob Johnson",
      date: "07-02-2025",
      image: "/path/to/image3.jpg",
    },
    {
      id: 3,
      title: "Related Article 3",
      author: "Bob Johnson",
      date: "07-02-2025",
      image: "/path/to/image3.jpg",
    },
    {
      id: 3,
      title: "Related Article 3",
      author: "Bob Johnson",
      date: "07-02-2025",
      image: "/path/to/image3.jpg",
    },
  ];

  return (
    <>
      <div className="container flex flex-col gap-5 -z-10 my-10 rounded-lg border mx-auto">
        <div className="relative">
          <div className="triangle bg-[url('@/assets/img/blog/background.webp')] bg-cover">
            {/* <Image src={img} alt="no Image" className="w-full h-full" /> */}
          </div>
          <div className="absolute flex flex-col gap-2 right-10 bottom-20 w-3/5">
            <h1 className="font-bold text-right text-4xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, optio.
            </h1>
            <div className="justify-end flex mt-2 flex-col items-end gap-2">
              <p>By AK</p>
              <p>04-02-2002 | Truck</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 p-5">
          <p className="justify-center text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            odio eius repellendus voluptatum adipisci perferendis dolor,
            pariatur quia, id suscipit aspernatur cum omnis deleniti ex. Impedit
            soluta illo et aliquid eveniet voluptate commodi odit eligendi, amet
            ipsum fuga, sed fugit totam optio molestiae earum. Delectus veniam
            quo eveniet? Ex quo at repellendus facilis nulla repellat animi
            corrupti provident sapiente! Quibusdam error dignissimos repellat
            odit quae, nihil possimus doloribus sint exercitationem commodi
            voluptatibus tempore dolores qui ducimus blanditiis iste
            reprehenderit. Dolorem consequatur nisi in repellat exercitationem,
            earum a ipsam adipisci, blanditiis eum esse aliquam reiciendis vero,
            modi porro placeat est veniam quidem aperiam deserunt hic. Inventore
            voluptatibus ullam neque quibusdam, saepe delectus ab id temporibus
            libero suscipit possimus ipsam praesentium ad! Velit voluptatum,
            illo at odio vel voluptate itaque. Et non voluptatem voluptas
            possimus maxime itaque, aspernatur earum assumenda nostrum natus
            odit voluptate eius repudiandae cupiditate delectus iusto minima,
            temporibus voluptatibus cumque veritatis laboriosam excepturi
            sapiente. Aliquid necessitatibus in consequatur explicabo nobis
            assumenda, blanditiis culpa rem architecto maiores facilis quam
            distinctio dignissimos veritatis deleniti possimus consectetur
            reprehenderit, optio ea, et rerum eaque quia molestiae! Eveniet,
            modi debitis? Dignissimos recusandae nam natus provident dolores,
            numquam quae et illo adipisci incidunt! Quos assumenda deleniti modi
            qui similique asperiores. Placeat assumenda sapiente possimus modi
            veritatis, nihil voluptas ad nemo itaque tempora omnis rem minus a
            mollitia ipsam! Debitis quae ullam earum libero ut omnis sed atque
            nobis. Tempora numquam nemo blanditiis. Distinctio, eligendi maxime
            asperiores tenetur eos minus dolorum tempora, possimus doloremque
            ipsum deleniti inventore dicta. Excepturi suscipit ratione saepe.
            Officiis numquam, tenetur, alias quibusdam dolores vitae tempore
            provident voluptatum dolor quasi quidem eos deleniti et. Laborum
            vel, iusto numquam similique laboriosam ea magni tempora
            exercitationem, corporis maxime fugit sit pariatur impedit
            perspiciatis esse libero aut assumenda facilis modi. Nisi amet,
            similique debitis possimus inventore earum reprehenderit voluptatum
            adipisci distinctio, vel voluptates voluptate aliquam excepturi
            sequi enim, qui iure consectetur? Necessitatibus maxime, vero sint
            ex ab quas ut consequatur exercitationem rerum explicabo? Omnis
            voluptate suscipit, amet animi nemo placeat quis distinctio quos
            necessitatibus beatae perferendis nostrum sapiente officiis
            consectetur accusamus provident sunt, ut molestiae hic doloribus
            obcaecati vero ipsa atque. Corporis, in eum. Dolorum asperiores
            accusamus animi saepe laboriosam. Sapiente, quos. Magnam dolores
            impedit amet quis saepe, perspiciatis maxime quia eum possimus
            reiciendis numquam. Voluptas, consequatur incidunt dolores, ab rem
            commodi beatae accusamus iure neque aliquid velit minima tempora
            dicta officiis asperiores consectetur nostrum distinctio sed enim
            harum laborum ratione voluptate. Soluta maxime, placeat, consequatur
            architecto excepturi quae distinctio itaque maiores pariatur,
            commodi possimus reiciendis iste! Dolore magni veniam quaerat eos,
            rerum, corporis expedita id ab nisi totam aut enim sapiente modi
            molestiae quos aliquam voluptates, libero repudiandae. At earum
            aspernatur rem officia aliquam consequatur blanditiis autem saepe
            reprehenderit illum ab exercitationem veniam assumenda, vel facere
            nostrum ratione! Suscipit, vitae! Eius, a doloremque, quos quis
            voluptatem reiciendis iure at natus laborum voluptates, porro sit.
            Adipisci necessitatibus non dolore illum pariatur quasi vero. Non
            ipsum nemo veritatis ea similique! Ad ut numquam deserunt rerum
            tempore fugiat ullam nesciunt tempora. Doloribus distinctio id
            labore enim rerum natus nisi iste. Quibusdam reprehenderit odio
            necessitatibus consequatur eius aperiam labore perspiciatis.
            Veritatis quia nemo nulla perspiciatis expedita similique culpa,
            cupiditate eaque commodi. Nobis alias facere sequi incidunt minus
            porro quia consectetur itaque qui. Possimus quis voluptatibus
            impedit sapiente, enim consectetur nam eos veniam nemo assumenda ea
            cumque totam, rem aliquid animi suscipit tempore voluptatem quisquam
            voluptates qui. Obcaecati at cum alias debitis magnam! Aliquid
            dignissimos beatae molestiae labore voluptatum laborum, repellendus
            eaque non veniam sequi vel quos. Non velit dolor eaque animi
            inventore laboriosam fugiat architecto quidem atque dolorum.
            Voluptatum, officia in? Illo sed recusandae quia incidunt corrupti
            ut optio quis voluptas suscipit aperiam quidem saepe esse ducimus
            iusto minima nulla, commodi nemo est architecto facilis illum ab
            dolorum. Cumque amet, vero repudiandae voluptates, magni, ab ratione
            sunt eligendi velit unde officiis totam eveniet consequatur at
            assumenda temporibus? At hic architecto assumenda fugit? Perferendis
            quidem optio, accusantium veniam asperiores expedita, excepturi illo
            neque ducimus sapiente, veritatis reprehenderit. Magni, adipisci
            perspiciatis ea recusandae molestiae non fugit in consequuntur a
            enim. Eveniet dolore necessitatibus quidem cumque voluptate,
            deserunt consequuntur quo odit nostrum eaque iste soluta nulla
            delectus eum fugit. Nesciunt, recusandae ipsa amet culpa at atque
            temporibus, fugiat neque quaerat voluptate quo cum deserunt
            explicabo. Doloribus reiciendis dicta nobis assumenda enim molestiae
            ea ducimus aspernatur nihil, eum adipisci deserunt error dolorem
            corrupti, dolorum, porro autem sint aliquam. Cum, eligendi
            praesentium recusandae voluptatibus dolorem quaerat natus deleniti
            commodi unde iste, repudiandae non fugiat dolores, vel error
            voluptas a ea harum! Sit consectetur unde repudiandae corporis minus
            iusto similique, repellendus placeat totam quod excepturi, veritatis
            nobis voluptatum a, quae et? Quasi optio tempora repellat dolore ad
            non, dolores voluptatum voluptatibus, at delectus iusto id voluptas?
            Debitis, saepe odio sapiente voluptates repellendus eaque nostrum,
            molestias, numquam aliquam earum incidunt officiis perspiciatis
            eius. Aliquid, modi, voluptatibus dolores soluta, odit alias non eum
            doloremque excepturi eveniet sed. Voluptatum quam temporibus
            voluptatibus dicta dignissimos dolor distinctio et, incidunt, ad
            earum optio magni commodi. Quam eveniet quas quia, optio quos
            doloribus provident totam dignissimos, suscipit aspernatur
            necessitatibus quis aliquam et aut harum, culpa asperiores tempora
            voluptatum deserunt? Temporibus assumenda, eveniet nisi totam
            similique vel reprehenderit? Atque corporis sed minima eius non!
            Debitis nostrum placeat vel pariatur quo voluptatum soluta veritatis
            odio in labore molestias, accusamus nemo repellendus id sequi iusto
            amet animi beatae. Ad, repellat quibusdam. Blanditiis culpa expedita
            nam incidunt, odio minima, odit iste quis asperiores sint nulla sit
            aspernatur debitis molestiae, facere a tempore distinctio
            perspiciatis recusandae facilis alias veritatis! Nemo accusantium,
            dolores esse saepe ipsa perspiciatis et velit molestiae
            reprehenderit voluptates beatae repudiandae deleniti ducimus,
            debitis quos quae est quo libero, optio commodi dolor maxime. Porro
            id cum, nemo debitis aut eos aspernatur quibusdam, deserunt, tempore
            quaerat repudiandae error enim voluptate magni eius earum amet
            tempora! Nihil exercitationem quisquam perferendis eum voluptatem
            eius id ea quod odit nobis, laborum nam, incidunt ullam cum, sint
            quas? Unde odit autem, eligendi voluptatum voluptatem necessitatibus
            eveniet quia. Laborum officia pariatur voluptates, ratione delectus
            quis rerum quae debitis reprehenderit, nesciunt maxime enim tempore
            vitae eveniet sapiente consequatur, praesentium atque. Expedita illo
            ducimus exercitationem praesentium at aliquid natus incidunt
            quibusdam. Nihil delectus necessitatibus suscipit odio, sint vitae
            rem officia quas, ratione nostrum labore error mollitia excepturi
            similique explicabo? Est sapiente eos distinctio necessitatibus quos
            fuga delectus doloribus nobis numquam, quam nemo autem velit quasi
            accusantium dicta tempore reprehenderit voluptatibus iure magnam
            harum dolor quisquam? A culpa dolor sapiente pariatur dolorum, ab
            iusto ex odio reiciendis consequuntur minus perferendis quaerat
            deserunt adipisci! Perspiciatis, repellendus. Libero eos, veniam
            dolorem omnis molestias quos quo ipsam. Omnis corrupti itaque
            eveniet velit officiis minus laudantium reiciendis eaque ullam
            maxime illum qui cumque nihil ab porro expedita quam, odit
            dignissimos officia odio, modi facilis maiores! Harum velit sequi
            obcaecati excepturi possimus veritatis aliquam mollitia maxime in
            reiciendis commodi inventore quisquam natus, recusandae distinctio
            aut autem cupiditate officia expedita maiores. Laborum voluptates
            earum nulla repellat assumenda, placeat soluta magni iure! Ipsa,
            minima aperiam maiores labore neque reiciendis dolorem, sapiente rem
            excepturi delectus sequi deleniti omnis corrupti eius harum,
            repudiandae soluta quibusdam? Ullam cupiditate a explicabo, magnam
            consectetur dicta repellendus voluptatibus iusto vitae enim corrupti
            vero, impedit tempore molestias aspernatur eligendi? Aliquid at
            exercitationem quia est sequi laudantium dolor hic? Atque libero at
            laudantium architecto non eius perspiciatis iusto ut quae porro,
            delectus inventore unde eveniet itaque iure aut commodi laboriosam
            repudiandae mollitia velit nam earum. Ratione ipsam libero, numquam
            ducimus a expedita! Totam rem ipsam id cumque blanditiis magni esse
            dolores libero, enim nisi saepe, unde dicta, odit amet eveniet quos
            eum. Magnam quaerat provident architecto expedita nulla mollitia,
            cum alias illum aperiam odit assumenda error eos porro! Culpa
            numquam, hic obcaecati nesciunt voluptas similique ullam consectetur
            soluta voluptatem alias laboriosam aliquid necessitatibus voluptatum
            cum mollitia eveniet ipsam quidem a quam blanditiis? Facere
            perferendis voluptatem et aliquam possimus deleniti explicabo ipsam
            architecto. Nisi, iusto dolorem! Deserunt dolores sunt atque amet
            dolorum iure quibusdam maxime totam maiores velit, voluptate vel
            nemo quisquam nisi. Nulla suscipit deleniti earum. Provident veniam
            quisquam, amet explicabo distinctio voluptates iusto aliquid
            assumenda? Laudantium voluptatem sunt dolore saepe laborum quidem
            minima dolores doloribus voluptas delectus, est ipsum voluptates et
            eveniet minus laboriosam at consectetur labore perferendis. Ipsum
            dolorem laborum quos explicabo iste sit laboriosam rem consequuntur
            illum voluptas totam magni doloremque, non, culpa facilis laudantium
            atque nesciunt molestias, harum iusto saepe! Ab, unde et? Minus odio
            repellat tempore aliquam tenetur dolore porro? Molestiae veniam
            iusto dignissimos fugit, obcaecati perferendis? Minima quasi animi
            perspiciatis officia earum eum impedit veritatis repellat.
            Temporibus magnam repudiandae fuga numquam quasi eum distinctio a
            architecto earum nihil et, eius provident culpa, maxime esse ipsum
            beatae tenetur commodi! Blanditiis quaerat ipsa nemo iure sed neque
            magnam ex exercitationem molestiae doloribus, rerum adipisci amet et
            modi repudiandae commodi sapiente quos culpa mollitia natus ullam.
            Ad eligendi corrupti rem doloremque harum perferendis earum. Itaque
            doloremque ipsum quasi, nesciunt reiciendis id saepe odio quaerat ab
            reprehenderit similique magni dolore facilis, quod autem libero
            numquam sunt architecto iure minus quis corrupti, nam beatae!
            Praesentium quia magnam dolorum fugit, quasi quibusdam qui possimus
            totam provident placeat cupiditate, officiis quisquam! Officia
            laboriosam maiores earum et consequatur. Vero provident repellat
            nesciunt, quisquam quam tenetur dolorum voluptatum, tempore,
            praesentium dolor omnis esse enim repudiandae impedit consequuntur!
            Nulla dolor reiciendis sint autem rerum, in totam, ratione saepe
            quis quisquam nobis assumenda soluta atque minus culpa! Autem
            corrupti vero aut ea suscipit accusamus exercitationem excepturi
            officia quae illum, similique ullam architecto nostrum iure dolor
            laboriosam itaque tenetur facilis doloremque maxime, veniam nesciunt
            molestias at! In fugiat dolor eius impedit accusamus, enim, facilis
            ex ipsa alias unde est veniam ipsum sapiente facere debitis cumque
            inventore officiis ducimus! Neque maiores debitis, laboriosam dolore
            architecto vel optio nostrum iste hic reprehenderit ducimus unde
            fugit enim voluptatibus minus, error qui? Autem est illo deserunt,
            dolorem, labore possimus sit doloribus perspiciatis quia commodi
            nihil ut, fugit suscipit architecto veniam ea amet explicabo
            dignissimos voluptatibus inventore in. Saepe aliquam eaque fugit
            molestias similique. Quas tempora harum, odio voluptates saepe
            praesentium perferendis eum, impedit dolorem perspiciatis magnam
            vero. Vel velit laboriosam similique? Natus adipisci laborum magnam
            id facilis, perferendis placeat quibusdam ea cum minima. Officia
            harum aliquid cupiditate incidunt pariatur libero. Aliquam
            repudiandae sapiente sequi repellendus, eveniet necessitatibus
            obcaecati, pariatur labore velit amet provident sed ipsa quos saepe
            nulla laudantium cupiditate? Delectus necessitatibus porro error
            aperiam, inventore molestias ratione laudantium quidem itaque magnam
            corporis dolorem quaerat dolor. Earum, dolorem? Minima voluptatibus,
            nobis maiores tenetur numquam fugit culpa reiciendis deleniti natus
            dolore mollitia magnam dolores soluta blanditiis sequi aperiam
            officiis necessitatibus corporis ut laboriosam quam molestias
            dolorem quasi? Voluptatum laudantium fugit labore! Voluptates,
            repellat saepe! Quaerat unde quidem rem dolore, optio id nesciunt
            molestias nihil alias doloremque ut, voluptatibus magni fugit
            tenetur, velit perspiciatis nobis soluta. Iste ipsum ut laborum.
            Unde accusantium praesentium ipsam necessitatibus mollitia tempora
            ex eum voluptatibus, recusandae rem nulla ratione aperiam! Aut,
            quas! Amet at ab vel eveniet numquam aperiam tempore nisi enim
            mollitia ea iusto facilis quisquam, consequatur voluptate facere
            porro corrupti rerum cumque, dolor animi. Quam doloribus id
            excepturi nihil tempore pariatur distinctio ipsam repellat assumenda
            totam necessitatibus nemo, facere fuga ad ratione architecto
            sapiente laborum ut eaque, atque enim at suscipit, doloremque
            praesentium. Mollitia, minus deserunt ipsam at, laudantium
            voluptatibus atque libero error corporis, iure unde. Minus voluptas
            illum doloribus at quam consequatur esse ipsam ex facere dolore
            laboriosam dolorum rem non, omnis alias saepe perspiciatis numquam
            repudiandae sint a soluta quaerat consectetur! Pariatur itaque atque
            natus neque repellat minima iste voluptatum labore ad, provident
            doloribus inventore explicabo, molestias amet quos sit ducimus,
            animi cumque veritatis illum voluptatibus aperiam. Fugit corporis
            autem veniam repellendus nisi officia deleniti nam suscipit,
            excepturi earum perspiciatis impedit neque magnam quisquam
            blanditiis a deserunt non iusto numquam, doloremque obcaecati
            voluptas? Animi provident asperiores itaque temporibus corrupti
            explicabo corporis magnam ipsam? Perferendis est, accusantium
            officia delectus laudantium ex labore optio voluptates in
            repellendus saepe ducimus vero provident eligendi sint voluptatibus?
            Quisquam, saepe repellendus dolores officiis perferendis doloribus
            veniam?
          </p>
        </div>

      </div>
        {/* Related Articles Slider Section with Swiper */}
        <div className="mt-10 px-5 pb-5 container mx-auto">
          <h2 className="text-2xl font-bold mb-5">Related Articles</h2>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="mySwiper gallery"
          >
            {relatedArticles.map((article,id) => (
              <SwiperSlide key={id}>
                <div className="border rounded-lg overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={article.image}
                      alt={article.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                    <p className="text-sm text-gray-600">
                      By {article.author} | {article.date}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </>
  );
}
