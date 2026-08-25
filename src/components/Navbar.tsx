'use client'

import { navLinks } from "@/data/navlinks";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

interface props {
    menuVisible: () => void
}

function Navbar({ menuVisible }: props) {

    const [isScrolled, setIsScrolled] = useState(false);
    const[currentSection, setCurrentSection] = useState('/');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    console.log(currentSection)

    return (
        <>
            <div className={`w-[95%] transition-all duration-500 ${isScrolled ? "xl:w-[85%]" : ""} rounded-full fixed top-7 z-50 h-auto backdrop-blur-3xl bg-white/20 flex justify-between items-center`}>
                <span className={`w-auto px-4 lg:px-7 py-5 font-black text-white select-none`}>TAAKDOOM</span>

                <div className={`w-auto pr-5 flex justify-center items-center`}>
                    <span onClick={menuVisible} className={`bg-white xl:hidden p-2 rounded-full`}><HiOutlineMenuAlt4 className={`text-xl select-none`} /></span>

                    {/* laptop menus */}
                    <div className={`w-full hidden px-4 xl:flex justify-center items-center`}>
                        {navLinks.map((item, index) => {
                            return <div key={index} className={`w-auto flex flex-col justify-center items-center gap-2`}>
                                <Link href={item.url} onClick={() => setCurrentSection(item.url.split('#')[1])} className={`w-auto ${currentSection === item.url ? "font-bold" : "font-light"} text-white px-7`}>{item.name}</Link>
                                <div className={`w-full ${currentSection === item.url.split('#')[1] ? "bg-linear-to-r from-transparent via-white to-transparent h-px" : ""} `} />
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
