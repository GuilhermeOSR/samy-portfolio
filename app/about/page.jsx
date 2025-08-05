"use client"
import React from 'react'
import { motion } from "framer-motion"
import { ScrollArea} from "@/components/ui/scroll-area"
import Image from "next/image"

//import Stats from '@/components/Stats'
//import Testimonial from '@/components/Testimonial'
import Info from '@/components/Info'
import Journey from '@/components/Journey'
//import Skills from '@/components/Skills'
import Blob from '@/components/Blob'
import Socials from '@/components/Socials'
// Components


const About = () => {
    return (
        <motion.section
        initial={{opacity: 0}} 
        animate={{opacity: 1, 
        transition: {delay: 2.4, 
        duration: 0.4, ease: 
        "easeIn"}, 

    }}
    className="h-screen flex items-center"
        >
        <div className="container mx-auto px-0">
            <div className="flex flex-col xl:flex-row items-center gap-24 w-full h-[680px]">
                {/*img e social icons */}
                <div className='hidden xl:flex flex-col w-full h-full pt-14 max-w-[430px] relative
                 '>

                {/* overlay */}
                
                {/* blob */}
                <div className="absolute top-[-10px] -left-[80px] z-10">
                    <Blob containerStyles="w-[420px] h-[420]" />
                </div>

                <Socials containerStyles="flex gap-4 z-40 w-max transform translate-x-[30px]"
                iconStyles="w-[48px] h-[48px] text-[22px] text-accent hover:text-accent-hover transition-all flex items-center justify-center rounded-full cursor-pointer"
                />

                </div>
                {/* scroll area */}
                <ScrollArea className='w-full h-[680px]'>
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-2 h-2 bg-accent rounded-full"></div>
                                <p>Sobre mim</p>
                            </div>
                           <h2 className="h2 mb-6">
                            <span className="text-accent">Samyra</span> Andrade
                           </h2>
                           <p className="max-w-[540px] mb-12">Foco em criar soluções completas, do visual ao funcional. Gosto de desenvolver  sistemas web personalizados, sempre pensando na autonomia do cliente. Aprendo rápido novas tecnologias e me adapto ao estilo de cada projeto.
                           </p>
                           <div className="flex flex-col items-start gap-16">
                                <Info />
                                <Journey />
                           </div>
                        </div>
                </ScrollArea>
                </div>
            </div>
        </motion.section>
    )
}

export default About