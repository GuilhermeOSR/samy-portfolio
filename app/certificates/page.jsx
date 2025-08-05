"use client"
import React from "react"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import Image from "next/image"

const certificates = [
  {
    title: "Certificado de React Avançado",
    image: "/assets/certificates/react.png",
  },
  {
    title: "Certificado de Backend com Node.js",
    image: "/assets/certificates/node.png",
  },
  {
    title: "Certificado de UX/UI Design",
    image: "/assets/certificates/uiux.png",
  },
  {
    title: "Certificado Full Stack Web",
    image: "/assets/certificates/fullstack.png",
  },
  // Adicione mais certificados conforme quiser
]


const Certificates = () => {
    return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.6, ease: "easeIn" },
      }}
      className="min-h-screen flex items-center py-16"
    >
      <div className="container mx-auto w-full flex flex-col gap-16">
        {/* título */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8">
          <h2 className="h2 max-w-[480px] text-left xl:mb-0">
            <span className="text-accent">Certificados</span> 
          </h2>
        </div>

        {/* slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination]}
          pagination={{ clickable: true, dynamicBullets: true }}
          className="h-[420px]"
        >
          {certificates.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-secondary/90 w-full h-[380px] rounded-[20px]
              px-[20px] py-[30px] flex flex-col justify-between items-center text-center"
              >
                <div className="w-full h-[220px] relative rounded-md overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h5 className="text-[20px] font-medium mt-6">{item.title}</h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  )
}


export default Certificates