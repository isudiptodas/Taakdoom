'use client'

import { motion } from "motion/react";
import { FaYoutube } from "react-icons/fa";

interface props {
    name: string,
    link: string;
    type: string;
    videoId: string
}

function WorkCard(data: props) {

    const thumbnail = `https://img.youtube.com/vi/${data.videoId}/maxresdefault.jpg`

    const openLink = (link: string) => {
        window.open(link, "_blank");
    }

    return (
        <>
            <motion.div initial={{x: -50, opacity: 0, filter: "blur(20px)"}} whileInView={{y: 0, opacity: 1, filter: "blur(0px)"}} viewport={{once: true}} transition={{delay:0.2, duration: 0.4, ease: "easeInOut"}} className={`w-full md:w-[55vw] lg:w-[40vw] xl:w-[35vw] shrink-0 h-auto bg-linear-to-bl from-gray-500 to-white px-[4px] pt-[4px] pb-5 rounded-3xl flex flex-col justify-start items-center relative overflow-hidden`}>
                <div className={`w-full h-52 bg-red-500 overflow-hidden rounded-3xl relative`}>
                    <span className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white h-[10%] w-[10%] z-20`}></span>
                    <span onClick={() => openLink(data.link as string)} className={`absolute  cursor-pointer hover:text-red-800 duration-200 ease-in-out z-20 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-7xl text-red-500`}><FaYoutube /></span>
                    <img src={thumbnail} className={`h-full w-full z-10 object-cover scale-105`} />
                </div>

                <p className={`w-full text-start text-black font-semibold text-xl mt-5 px-5`}>{data.name}</p>
            </motion.div>
        </>
    )
}

export default WorkCard
