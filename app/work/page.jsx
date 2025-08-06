"use client"
import React from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Fuzzo's",
    images: [
      "/assets/work/proj1/thumb-1.png",
      "/assets/work/proj1/thumb-1-2.png",
      "/assets/work/proj1/thumb-1-3.png",
      "/assets/work/proj1/thumb-1-4.png",
      "/assets/work/proj1/thumb-1-5.png",
      "/assets/work/proj1/thumb-1-6.png",
      "/assets/work/proj1/thumb-1-7.png",
      "/assets/work/proj1/thumb-1-8.png",
      "/assets/work/proj1/thumb-1-9.png",
      "/assets/work/proj1/thumb-1-10.png",
      "/assets/work/proj1/thumb-1-11.png",
      "/assets/work/proj1/thumb-1-12.png",
      "/assets/work/proj1/thumb-1-13.png",
      "/assets/work/proj1/thumb-1-14.png",
      "/assets/work/proj1/thumb-1-15.png",
      "/assets/work/proj1/thumb-1-16.png",
      "/assets/work/proj1/thumb-1-17.png",
      "/assets/work/proj1/thumb-1-18.png",
    ],
  },
  {
    id: 2,
    title: "Glitch Rise",
    images: [
      `/assets/work/proj2/thumb-2.png`,
      "/assets/work/proj2/thumb-2-2.png",
      "/assets/work/proj2/thumb-2-3.png",
      "/assets/work/proj2/thumb-2-4.png",
      "/assets/work/proj2/thumb-2-5.png",
      "/assets/work/proj2/thumb-2-6.png",
      "/assets/work/proj2/thumb-2-7.png",
      "/assets/work/proj2/thumb-2-8.png",
      "/assets/work/proj2/thumb-2-9.png",
      "/assets/work/proj2/thumb-2-10.png",
      "/assets/work/proj2/thumb-2-11.png",
      "/assets/work/proj2/thumb-2-12.png",
      "/assets/work/proj2/thumb-2-13.png",
      "/assets/work/proj2/thumb-2-14.png",
      "/assets/work/proj2/thumb-2-15.png",
      "/assets/work/proj2/thumb-2-16.png",
      "/assets/work/proj2/thumb-2-17.png",
      "/assets/work/proj2/thumb-2-18.png",
      "/assets/work/proj2/thumb-2-19.png",
      "/assets/work/proj2/thumb-2-20.png",
      "/assets/work/proj2/thumb-2-21.png",
      "/assets/work/proj2/thumb-2-22.png",
      "/assets/work/proj2/thumb-2-23.png",
      "/assets/work/proj2/thumb-2-24.png",
      "/assets/work/proj2/thumb-2-25.png",
      "/assets/work/proj2/thumb-2-26.png",
      "/assets/work/proj2/thumb-2-27.png",
      "/assets/work/proj2/thumb-2-28.png",


    ],
  },
  {
    id: 3,
    title: "Duospot",
    images: [
      "/assets/work/proj3/thumb-3.png",
      "/assets/work/proj3/thumb-3-2.png",
      "/assets/work/proj3/thumb-3-3.png",
      "/assets/work/proj3/thumb-3-4.png",
      "/assets/work/proj3/thumb-3-5.png",
      "/assets/work/proj3/thumb-3-6.png",
      "/assets/work/proj3/thumb-3-7.png",
      "/assets/work/proj3/thumb-3-8.png",
      "/assets/work/proj3/thumb-3-9.png",
      
    ]
  },
  {
    id: 4,
    title: "Fouet",
    images: [
      "/assets/work/proj4/thumb-4.png",
      "/assets/work/proj4/thumb-4-2.png",
    ],
  },
  {
    id: 5,
    title: "Jupa",
    images: [
      "/assets/work/proj5/thumb-5.png",
      "/assets/work/proj5/thumb-5-2.png",
      "/assets/work/proj5/thumb-5-3.png",
      "/assets/work/proj5/thumb-5-4.png",
      "/assets/work/proj5/thumb-5-5.png",
      "/assets/work/proj5/thumb-5-6.png",
      "/assets/work/proj5/thumb-5-7.png",
      "/assets/work/proj5/thumb-5-8.png",
      "/assets/work/proj5/thumb-5-9.png",
      "/assets/work/proj5/thumb-5-10.png",
      "/assets/work/proj5/thumb-5-11.png",
      "/assets/work/proj5/thumb-5-12.png",
    ],
  },
  {
    id: 6,
    title: "Livreto",
    images: [
      "/assets/work/proj6/thumb-6.png",
      "/assets/work/proj6/thumb-6-2.png",
      "/assets/work/proj6/thumb-6-3.png",
      "/assets/work/proj6/thumb-6-4.png",
      "/assets/work/proj6/thumb-6-5.png",
      "/assets/work/proj6/thumb-6-6.png",
      "/assets/work/proj6/thumb-6-7.png",
    ],
  },

  {
    id: 7,
    title: "RPG",
    images: [
      "/assets/work/proj7/thumb-7.png",
      "/assets/work/proj7/thumb-7-2.png",
      "/assets/work/proj7/thumb-7-3.png",
      "/assets/work/proj7/thumb-7-4.png",
      "/assets/work/proj7/thumb-7-5.png",
    ],
  },

  {
    id: 8,
    title: "Tipografias",
    images: [
      "/assets/work/proj8/thumb-8.png",
      "/assets/work/proj8/thumb-8-2.png",
      "/assets/work/proj8/thumb-8-3.png",
    ],
  },

]

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col justify-center">
        <h2 className="h2 mb-6 xl:mb-12 max-w-[600px]">
          <span className="text-accent">Portfólio</span> de Projetos
        </h2>

        <Tabs defaultValue={projects[0].title} className="w-full flex flex-col gap-6 xl:gap-12">
          <TabsList className="flex flex-wrap justify-center items-center gap-4 h-full mb-4 xl:mb-0">
            {projects.map((project) => (
              <TabsTrigger
                key={project.id}
                value={project.title}
                className="capitalize border border-white/10 data-[state=active]:bg-accent data-[state=active]:border-accent h-[48px] px-6 rounded-full cursor-pointer"
              >
                {project.title}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="h-[600px] s-[300px] overflow-y-scroll scrollbar scrollbar-thumb-accent scrollbar-track-accent/5">
            {projects.map((project) => (
              <TabsContent key={project.id} value={project.title}>
                <div className="space-y-6">
                  {project.images.map((img, index) => (
                    <div
                      key={index}
                      className="w-full h-[300px] md:h-[400px] xl:h-[600px] relative bg-pink-50/10 rounded-lg overflow-hidden"
                    >
                      <Image
                        src={img}
                        alt={`${project.title} - imagem ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </motion.section>
  )
}

export default Work