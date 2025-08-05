"use client"
import React from "react";

import {motion} from "framer-motion"


// variants
const retangleVariants = {
    initial: {
        y: "-100%",
        height: "100%"
    },
    animate: {
        y: "0%",
        height: "0%"
    },
    exit: {
        y: ["0%", "-100%"],
        height: ["0%", "100%"],
    }

}


const Retangle = () => {
    return (
        <>
<motion.section 
    variants={retangleVariants} 
    initial="initial" 
    animate="animate" 
    exit="exit" 
    transition={{
        delay: 0, 
        duration: 0.6, 
        ease: [0.63, 0, 0.17, 1]
    }}
    className="fixed top-full w-screen h-screen z-30 bg-[#121529]"
/>

<motion.section 
    variants={retangleVariants} 
    initial="initial" 
    animate="animate" 
    exit="exit" 
    transition={{
        delay: 0.25, 
        duration: 0.8, 
        ease: [0.63, 0, 0.17, 1],
    }}
    className="fixed top-full w-screen h-screen z-20 bg-[#1a1e39]"
/>

<motion.section 
    variants={retangleVariants} 
    initial="initial" 
    animate="animate" 
    exit="exit" 
    transition={{
        delay: 0.35, 
        duration: 1, 
        ease: [0.63, 0, 0.17, 1],
    }}
    className="fixed top-full w-screen h-screen z-10 bg-[#232849]"
/>

<motion.section 
    variants={retangleVariants} 
    initial="initial" 
    animate="animate" 
    exit="exit" 
    transition={{
        delay: 0.45, 
        duration: 1, 
        ease: [0.63, 0, 0.17, 1],
    }}
    className="fixed top-full w-screen h-screen z-10 bg-[#2f3160]"
/>

    
        </>
    )
};

export default Retangle
