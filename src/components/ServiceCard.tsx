'use client'

import { motion } from "motion/react"

interface props {
    id: number
    title: string
    desc: string
    icon: React.ReactNode
}

function ServiceCard(data: props) {

    const exception = ['Cinematography', 'AI Film Making']
    return (
        <>
            <motion.div initial={{opacity: 0, filter: "blur(20px)"}} whileInView={{opacity: 1, filter: "blur(0px)"}} viewport={{once: true}} transition={{delay:0.3, duration: 0.4, ease: "easeInOut"}} className={`w-full px-4 pt-5 pb-10 h-auto flex flex-col justify-start items-center relative overflow-hidden rounded-4xl bg-[#a6a6a6]`}>
                
                <span className={`w-auto text-7xl xl:text-8xl text-black/50 absolute ${exception.includes(data.title) ? "rotate-180" : "rotate-0"} bottom-0 z-20 -right-5`}>{data.icon}</span>
                
                <div className={`w-full h-[500px] z-10 absolute bg-[#414141] rounded-full -top-72 blur-[80px]`} />
                <h1 className={`w-full z-20 text-start text-7xl font-Lemon text-black/50 font-black`}>{data.id}</h1>
                <p className={`w-full text-start z-20 text-black/70 text-3xl font-semibold mt-5 font-Lemon`}>{data.title}</p>
                <p className={`w-full text-start z-20 text-black text-sm font-light pr-24 mt-5`}>{data.desc}</p>
            </motion.div>
        </>
    )
}

export default ServiceCard
