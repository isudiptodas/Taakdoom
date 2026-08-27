'use client'

import { motion } from "motion/react";
import { GoNorthStar } from "react-icons/go";

interface props {
    name: string,
    points: string[],
    image: string
}

export default function MemberCard(data: props) {
    return (
        <>
            <motion.div initial={{opacity: 0, filter: "blur(20px)"}} whileInView={{opacity: 1, filter: "blur(0px)"}} viewport={{once: true}} transition={{delay:0.1, duration: 0.4, ease: "easeInOut"}} className={`w-full h-auto rounded-3xl flex flex-col justify-start items-center px-[2px] pt-[4px] pb-5 bg-linear-to-bl from-zinc-600 to-white`}>
                <div className={`w-full h-auto bg-zinc-950 relative rounded-3xl overflow-hidden flex justify-center items-center`}>
                    <div className={`w-[200px] h-[200px] bg-[#8b8b8b] bottom-0 z-10 absolute rounded-full blur-[75px]`} />
                    <img src={data.image} className={`h-64 z-20 object-bottom hover:scale-110 duration-500 ease-in-out`} />
                </div>

                <p className={`w-full text-start pt-5 text-black font-bold px-3 text-2xl`}>{data.name}</p>
                <div className={`w-full flex flex-wrap justify-start items-center gap-4 mt-5 px-4`}>
                    {data.points.map((item, index) => {
                        return <span key={index} className={`w-auto text-white font-semibold flex justify-center items-center gap-2 px-4 text-[10px] bg-linear-to-br from-[#020202] to-[#979797] py-2`}><GoNorthStar className={`motion-preset-spin motion-duration-2000 text-sm xl:text-lg`} />{item}</span>
                    })}
                </div>
            </motion.div>
        </>
    )
}
