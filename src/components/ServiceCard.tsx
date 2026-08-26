'use client'

import React from "react"

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
            <div className={`w-full px-4 pt-5 pb-10 h-auto flex flex-col justify-start items-center relative overflow-hidden rounded-4xl bg-[#e10069]`}>
                
                <span className={`w-auto text-9xl text-white/10 absolute ${exception.includes(data.title) ? "rotate-180" : "rotate-0"} bottom-0 z-20 -right-5`}>{data.icon}</span>
                
                <div className={`w-full h-[500px] z-10 absolute bg-black rounded-full -top-72 blur-[80px]`} />
                <h1 className={`w-full z-20 text-start text-7xl font-Lemon text-white opacity-25 font-black`}>{data.id}</h1>
                <p className={`w-full text-start z-20 text-white text-3xl font-semibold mt-5`}>{data.title}</p>
                <p className={`w-full text-start z-20 text-white text-sm font-light mt-5`}>{data.desc}</p>
            </div>
        </>
    )
}

export default ServiceCard
