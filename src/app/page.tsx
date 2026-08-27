'use client'

import Footer from "@/components/Footer";
import MemberCard from "@/components/MemberCard";
import Navbar from "@/components/Navbar"
import ServiceCard from "@/components/ServiceCard";
import WorkCard from "@/components/WorkCard";
import { coreValues } from "@/data/coreValues";
import { members } from "@/data/members";
import { navLinks } from "@/data/navlinks";
import { services } from "@/data/services";
import { works } from "@/data/works";
import Link from "next/link";
import { useEffect, useState } from "react"
import Marquee from "react-fast-marquee";
import { FaStarOfLife } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { motion } from 'motion/react'

function page() {

  const [menuVisible, setMenuVisible] = useState(false);
  const [current, setCurrent] = useState('/');

  useEffect(() => {
    if (menuVisible) {
      document.body.style.overflow = 'hidden'
    }
    else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuVisible]);


  return (
    <>
      <div className={`w-full min-h-screen flex flex-col justify-start items-center bg-black relative overflow-hidden`}>

        <Navbar menuVisible={() => setMenuVisible(!menuVisible)} />

        {/* mobile menu */}
        <div className={`xl:hidden w-full h-screen fixed z-40 ${menuVisible ? "translate-y-0" : "-translate-y-full"} duration-500 ease-in-out left-1/2 -translate-x-1/2 bg-linear-to-bl from-zinc-950 to-[#000000] flex flex-col justify-center items-center`}>
          {navLinks.map((item, index) => {
            return <Link onClick={() => { setCurrent(item.url); setMenuVisible(false) }} href={item.url} key={index} className={`w-full text-start pl-6 text-4xl py-2 text-white ${current === item.url ? "font-bold" : "font-light"}`}>{item.name}</Link>
          })}
        </div>

        {/* hero section */}
        <video
          className={`h-screen object-cover w-full z-10 select-none`}
          autoPlay
          loop
          muted
          src={`https://cdn.pixabay.com/video/2025/02/01/255788_large.mp4`} />

        <div className={`absolute w-full bottom-0 h-[70%] xl:h-[40%] bg-linear-to-t from-black via-[#000000b0] to-transparent z-20`} />

        <section id="/" className={`w-full flex flex-col justify-center items-center absolute top-[50%] xl:top-[35%] z-20`}>
          <div className={`w-full z-30 flex flex-col justify-center items-center gap-3`}>
            <motion.h1 initial={{opacity: 0, filter: "blur(20px)"}} animate={{opacity: 1, filter: "blur(0px)"}} transition={{duration: 0.8, ease: "easeInOut"}} className={`w-full text-white text-5xl md:text-6xl xl:text-8xl text-center font-semibold font-Lemon`}>Where Ideas</motion.h1>
            <motion.h1 initial={{opacity: 0, filter: "blur(20px)"}} animate={{opacity: 1, filter: "blur(0px)"}} transition={{ duration: 0.8, ease: "easeInOut"}} className={`w-full text-white text-5xl md:text-6xl xl:text-8xl text-center font-semibold font-Lemon`}>Find Rhythm</motion.h1>
            <motion.p initial={{opacity: 0, filter: "blur(20px)"}} animate={{opacity: 1, filter: "blur(0px)"}} transition={{delay: 0.6, duration: 0.4, ease: "easeInOut"}} className={`w-[80%] text-center text-[10px] md:text-sm xl:text-lg mt-5 text-white`}>Creating stories that help businesses become brands, brands become memories, and memories become movements.</motion.p>
          </div>
          <Marquee speed={70} className={`z-30 bg-white/20 text-white mt-4`}>
            <motion.span initial={{opacity: 0, filter: "blur(20px)"}} animate={{opacity: 1, filter: "blur(0px)"}} transition={{delay: 0.5, duration: 0.2, ease: "easeInOut"}} className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}>Music</motion.span>
            <motion.span initial={{opacity: 0, filter: "blur(20px)"}} animate={{opacity: 1, filter: "blur(0px)"}} transition={{delay: 0.5, duration: 0.2, ease: "easeInOut"}} className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}><FaStarOfLife /></motion.span>
            <motion.span initial={{opacity: 0, filter: "blur(20px)"}} animate={{opacity: 1, filter: "blur(0px)"}} transition={{delay: 0.5, duration: 0.2, ease: "easeInOut"}} className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}>Film</motion.span>
            <motion.span initial={{opacity: 0, filter: "blur(20px)"}} animate={{opacity: 1, filter: "blur(0px)"}} transition={{delay: 0.5, duration: 0.2, ease: "easeInOut"}} className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}><FaStarOfLife /></motion.span>
            <motion.span initial={{opacity: 0, filter: "blur(20px)"}} animate={{opacity: 1, filter: "blur(0px)"}} transition={{delay: 0.5, duration: 0.2, ease: "easeInOut"}} className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}>Content</motion.span>
            <motion.span initial={{opacity: 0, filter: "blur(20px)"}} animate={{opacity: 1, filter: "blur(0px)"}} transition={{delay: 0.5, duration: 0.2, ease: "easeInOut"}} className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}><FaStarOfLife /></motion.span>
            <motion.span initial={{opacity: 0, filter: "blur(20px)"}} animate={{opacity: 1, filter: "blur(0px)"}} transition={{delay: 0.5, duration: 0.2, ease: "easeInOut"}} className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}>Culture</motion.span>
            <motion.span initial={{opacity: 0, filter: "blur(20px)"}} animate={{opacity: 1, filter: "blur(0px)"}} transition={{delay: 0.5, duration: 0.2, ease: "easeInOut"}} className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}><FaStarOfLife /></motion.span>
            <motion.span initial={{opacity: 0, filter: "blur(20px)"}} animate={{opacity: 1, filter: "blur(0px)"}} transition={{delay: 0.5, duration: 0.2, ease: "easeInOut"}} className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}>Music</motion.span>
            <motion.span initial={{opacity: 0, filter: "blur(20px)"}} animate={{opacity: 1, filter: "blur(0px)"}} transition={{delay: 0.5, duration: 0.2, ease: "easeInOut"}} className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}><FaStarOfLife /></motion.span>
            <motion.span initial={{opacity: 0, filter: "blur(20px)"}} animate={{opacity: 1, filter: "blur(0px)"}} transition={{delay: 0.5, duration: 0.2, ease: "easeInOut"}} className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}>Film</motion.span>
            <motion.span initial={{opacity: 0, filter: "blur(20px)"}} animate={{opacity: 1, filter: "blur(0px)"}} transition={{delay: 0.5, duration: 0.2, ease: "easeInOut"}} className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}><FaStarOfLife /></motion.span>
            <motion.span initial={{opacity: 0, filter: "blur(20px)"}} animate={{opacity: 1, filter: "blur(0px)"}} transition={{delay: 0.5, duration: 0.2, ease: "easeInOut"}} className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}>Content</motion.span>
            <motion.span initial={{opacity: 0, filter: "blur(20px)"}} animate={{opacity: 1, filter: "blur(0px)"}} transition={{delay: 0.5, duration: 0.2, ease: "easeInOut"}} className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}><FaStarOfLife /></motion.span>
            <motion.span initial={{opacity: 0, filter: "blur(20px)"}} animate={{opacity: 1, filter: "blur(0px)"}} transition={{delay: 0.5, duration: 0.2, ease: "easeInOut"}} className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}>Culture</motion.span>
            <motion.span initial={{opacity: 0, filter: "blur(20px)"}} animate={{opacity: 1, filter: "blur(0px)"}} transition={{delay: 0.5, duration: 0.2, ease: "easeInOut"}} className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}><FaStarOfLife /></motion.span>
            <motion.span initial={{opacity: 0, filter: "blur(20px)"}} animate={{opacity: 1, filter: "blur(0px)"}} transition={{delay: 0.5, duration: 0.2, ease: "easeInOut"}} className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}>Film</motion.span>
            <motion.span initial={{opacity: 0, filter: "blur(20px)"}} animate={{opacity: 1, filter: "blur(0px)"}} transition={{delay: 0.5, duration: 0.2, ease: "easeInOut"}} className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}><FaStarOfLife /></motion.span>
            <motion.span initial={{opacity: 0, filter: "blur(20px)"}} animate={{opacity: 1, filter: "blur(0px)"}} transition={{delay: 0.5, duration: 0.2, ease: "easeInOut"}} className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}>Content</motion.span>
            <motion.span initial={{opacity: 0, filter: "blur(20px)"}} animate={{opacity: 1, filter: "blur(0px)"}} transition={{delay: 0.5, duration: 0.2, ease: "easeInOut"}} className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}><FaStarOfLife /></motion.span>
            <motion.span initial={{opacity: 0, filter: "blur(20px)"}} animate={{opacity: 1, filter: "blur(0px)"}} transition={{delay: 0.5, duration: 0.2, ease: "easeInOut"}} className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}>Culture</motion.span>
            <motion.span initial={{opacity: 0, filter: "blur(20px)"}} animate={{opacity: 1, filter: "blur(0px)"}} transition={{delay: 0.5, duration: 0.2, ease: "easeInOut"}} className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}><FaStarOfLife /></motion.span>
          </Marquee>
        </section>
      </div>

      {/* about section */}
      <section id="about" className={`w-full h-[75vh] bg-black flex flex-col justify-start items-center relative overflow-hidden`}>
        <motion.p initial={{y: -50, opacity: 0, filter: "blur(20px)"}} whileInView={{y: 0, opacity: 1, filter: "blur(0px)"}} viewport={{once: true}} transition={{delay:0.1, duration: 0.4, ease: "easeInOut"}} className=" w-full px-7 text-white text-[10px] md:text-sm xl:text-lg md:px-20 mt-10 leading-5 xl:leading-9">At Taakdoom, we believe every challenge holds a possibility. <span className={`font-bold italic`}>"We will find a way, and if there is no way, we will create one"</span></motion.p>
        <motion.p initial={{y: -50, opacity: 0, filter: "blur(20px)"}} whileInView={{y: 0, opacity: 1, filter: "blur(0px)"}} viewport={{once: true}} transition={{delay:0.1, duration: 0.4, ease: "easeInOut"}} className=" w-full px-7 text-white text-[10px] md:text-sm xl:text-lg md:px-20 mt-10 leading-5 xl:leading-9">We bring together creative thinking, innovative technology and high-quality production to transform ideas into stories that inform, inspire and connect. By eliminating unnecessary noise, we craft clear and meaningful narratives that resonate emotionally, travel across platforms and remain in people’s minds. We strive to make every creative journey enjoyable and fulfilling for all our stakeholders.</motion.p>
        <motion.p initial={{y: -50, opacity: 0, filter: "blur(20px)"}} whileInView={{y: 0, opacity: 1, filter: "blur(0px)"}} viewport={{once: true}} transition={{delay:0.1, duration: 0.4, ease: "easeInOut"}} className=" w-full px-7 text-white text-[10px] md:text-sm xl:text-lg md:px-20 mt-10 leading-5 xl:leading-9">Driven by optimism, innovation, quality, decency and a strong sense of community, we strive to make every creative journey joyful and fulfilling for all our stakeholders.</motion.p>
        <motion.p initial={{y: -50, opacity: 0, filter: "blur(20px)"}} whileInView={{y: 0, opacity: 1, filter: "blur(0px)"}} viewport={{once: true}} transition={{delay:0.1, duration: 0.4, ease: "easeInOut"}} className=" w-full px-7 text-white text-[10px] md:text-sm xl:text-lg md:px-20 mt-10 xl:mt-0 leading-5 xl:leading-9 font-bold italic">"At Taakdoom, we don’t simply tell stories, we create experiences that inspire joy and make people believe in magic"</motion.p>
      </section>

      {/* directors section */}
      <section id="directors" className={`w-full min-h-screen flex flex-col justify-start items-center bg-linear-to-b bg-black overflow-hidden`}>
        <motion.h1 initial={{y: 50, opacity: 0, filter: "blur(20px)"}} whileInView={{y: 0, opacity: 1, filter: "blur(0px)"}} viewport={{once: true}} transition={{delay:0.1, duration: 0.4, ease: "easeInOut"}} className={`w-full text-3xl xl:text-4xl text-center text-white font-light`}>Meet our</motion.h1>
        <motion.h1 initial={{y:-50, opacity: 0, filter: "blur(20px)"}} whileInView={{y: 0, opacity: 1, filter: "blur(0px)"}} viewport={{once: true}} transition={{delay:0.1, duration: 0.4, ease: "easeInOut"}} className={`w-full text-6xl xl:text-8xl text-center font-Modern tracking-wide text-white font-semibold`}>Directors</motion.h1>

        {/* founder 1 section */}
        <div className={`w-full mt-10 md:mt-20 md:px-10 flex flex-col md:flex-row justify-center md:justify-between items-center md:gap-8`}>
          <motion.div initial={{y: 50, opacity: 0, filter: "blur(20px)"}} whileInView={{y: 0, opacity: 1, filter: "blur(0px)"}} viewport={{once: true}} transition={{delay:0.1, duration: 0.4, ease: "easeInOut"}} className={`w-[80%] md:w-[50%] h-auto rounded-tl-[50px] rounded-br-[50px] overflow-hidden relative`}>
            {/* <div className={`w-full h-[70%] absolute z-20 bg-linear-to-t from-black to-transparent bottom-0`} /> */}
            <img src="/assets/founder-1.jpeg" className={`h-full z-10 w-full object-cover hover:scale-110 duration-500 ease-in-out`} />
          </motion.div>

          <div className={`w-full py-10 md:py-4 flex flex-col justify-center items-center md:items-start gap-5`}>
            <motion.h1 initial={{x: 50, opacity: 0, filter: "blur(20px)"}} whileInView={{x: 0, opacity: 1, filter: "blur(0px)"}} viewport={{once: true}} transition={{delay:0.1, duration: 0.4, ease: "easeInOut"}} className={`w-full text-center md:text-start text-white font-semibold font-Lemon text-2xl xl:text-4xl`}>Banibrata Goswami</motion.h1>
            <div className={`my-2 h-px bg-linear-to-r from-transparent via-white to-transparent w-[80%] md:hidden`} />
            <div className={`my-2 h-px bg-linear-to-r from-white to-transparent w-[80%] hidden md:block`} />
            <motion.p initial={{x: 50, opacity: 0, filter: "blur(20px)"}} whileInView={{x: 0, opacity: 1, filter: "blur(0px)"}} viewport={{once: true}} transition={{delay:0.1, duration: 0.4, ease: "easeInOut"}} className={`w-full text-center md:text-start text-white text-[10px] xl:text-sm px-8 md:px-0 xl:pr-32 font-light leading-6 italic`}>The carefree 70’s child. Tends to remember faces & forget names. 25 Years as Creative Professional. Never without an idea. Or facial hair. Can be found cracking campaigns out of thin air. Or meddling with everyone else’s work.
              <br />He is Co-founder & Chief Creative Officer at BetheBee, an Advertising Agency with clients across 10 Indian States and the Founder of TaakDoom an audio video production house.</motion.p>
          </div>
        </div>

        {/* founder 2 section */}
        <div className={`w-full mt-10 md:mt-20 md:px-10 flex flex-col md:flex-row-reverse justify-center md:justify-between items-center md:gap-8`}>
          <motion.div initial={{y: 50, opacity: 0, filter: "blur(20px)"}} whileInView={{y: 0, opacity: 1, filter: "blur(0px)"}} viewport={{once: true}} transition={{delay:0.1, duration: 0.4, ease: "easeInOut"}} className={`w-[80%] md:w-[50%] h-auto rounded-tl-[50px] rounded-br-[50px] overflow-hidden relative`}>
            {/* <div className={`w-full h-[70%] absolute z-20 bg-linear-to-t from-black to-transparent bottom-0`} /> */}
            <img src="/assets/founder-2.jpeg" className={`h-full z-10 w-full object-cover hover:scale-110 duration-500 ease-in-out`} />
          </motion.div>

          <div className={`w-full py-10 md:py-4 flex flex-col justify-center items-center md:items-end gap-5`}>
            <motion.h1 initial={{x: -50, opacity: 0, filter: "blur(20px)"}} whileInView={{x: 0, opacity: 1, filter: "blur(0px)"}} viewport={{once: true}} transition={{delay:0.1, duration: 0.4, ease: "easeInOut"}} className={`w-full text-center md:text-end text-white font-semibold font-Lemon text-2xl xl:text-4xl`}>Yuthi Guin</motion.h1>
            <div className={`my-2 h-px bg-linear-to-r from-transparent via-white to-transparent w-[80%] md:hidden`} />
            <div className={`my-2 h-px bg-linear-to-l from-white to-transparent w-[80%] hidden md:block`} />
            <motion.p initial={{x: -50, opacity: 0, filter: "blur(20px)"}} whileInView={{x: 0, opacity: 1, filter: "blur(0px)"}} viewport={{once: true}} transition={{delay:0.1, duration: 0.4, ease: "easeInOut"}} className={`w-full text-center md:text-end text-white text-[10px] xl:text-sm px-8 md:px-0 xl:pl-32 font-light leading-6 italic`}>Suspendisse potenti. Nam eget facilisis velit. Quisque convallis malesuada quam ac vehicula. Curabitur ut felis diam. Aenean efficitur odio ante, et bibendum nulla mollis in. Praesent consequat facilisis urna in ultrices. Pellentesque ac laoreet dui. </motion.p>
          </div>
        </div>
      </section>

      {/* services section */}
      <section id="services" className={`w-full py-20 bg-zinc-950 h-auto flex flex-col justify-start items-center relative overflow-hidden`}>
        <motion.h1 initial={{y: -50, opacity: 0, filter: "blur(20px)"}} whileInView={{y: 0, opacity: 1, filter: "blur(0px)"}} viewport={{once: true}} transition={{delay:0.1, duration: 0.4, ease: "easeInOut"}} className={`w-full text-3xl xl:text-4xl text-center text-white font-light`}>Explore our</motion.h1>
        <motion.h1 initial={{y: -50, opacity: 0, filter: "blur(20px)"}} whileInView={{y: 0, opacity: 1, filter: "blur(0px)"}} viewport={{once: true}} transition={{delay:0.1, duration: 0.4, ease: "easeInOut"}} className={`w-full text-6xl xl:text-8xl text-center font-Modern tracking-wide text-white font-semibold`}>Services</motion.h1>

        <div className={`w-full mt-20 h-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-10 px-6 lg:px-10`}>
          {services.map((item, index) => {
            return <ServiceCard key={index} icon={item.icon} desc={item.desc} title={item.title} id={item.id} />
          })}
        </div>
      </section>

      {/* members section */}
      <section id="members" className={`w-full h-auto bg-zinc-950 py-20 relative overflow-hidden`}>
        <motion.h1 initial={{y: -50, opacity: 0, filter: "blur(20px)"}} whileInView={{y: 0, opacity: 1, filter: "blur(0px)"}} viewport={{once: true}} transition={{delay:0.2, duration: 0.4, ease: "easeInOut"}} className={`w-full text-3xl xl:text-4xl text-center text-white font-light`}>Meet our</motion.h1>
        <motion.h1 initial={{y: -50, opacity: 0, filter: "blur(20px)"}} whileInView={{y: 0, opacity: 1, filter: "blur(0px)"}} viewport={{once: true}} transition={{delay:0.2, duration: 0.4, ease: "easeInOut"}} className={`w-full text-6xl xl:text-8xl text-center font-Modern tracking-wide text-white font-semibold`}>Members</motion.h1>

        <div className={`w-full mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-10 px-6`}>
          {members.map((item, index) => {
            return <MemberCard key={index} name={item.name} image={item.image} points={item.points} />
          })}
        </div>
      </section>

      {/* mission section */}
      <section id="mission" className={`bg-zinc-950 h-auto w-full pt-16 pb-24 flex flex-col items-center`}>
        <motion.h1 initial={{y: -50, opacity: 0, filter: "blur(20px)"}} whileInView={{y: 0, opacity: 1, filter: "blur(0px)"}} viewport={{once: true}} transition={{delay:0.2, duration: 0.4, ease: "easeInOut"}} className={`w-full text-3xl xl:text-4xl text-center text-white font-light`}>Our</motion.h1>
        <motion.h1 initial={{y: -50, opacity: 0, filter: "blur(20px)"}} whileInView={{y: 0, opacity: 1, filter: "blur(0px)"}} viewport={{once: true}} transition={{delay:0.2, duration: 0.4, ease: "easeInOut"}} className={`w-full text-6xl xl:text-8xl text-center font-Modern tracking-wide text-white font-semibold`}>Mission</motion.h1>

        <motion.div initial={{y: -50, opacity: 0, filter: "blur(20px)"}} whileInView={{y: 0, opacity: 1, filter: "blur(0px)"}} viewport={{once: true}} transition={{delay:0.2, duration: 0.4, ease: "easeInOut"}} className={`w-full xl:w-auto flex justify-between items-center gap-3 px-6 md:px-24 mt-4`}>
          <span><RiDoubleQuotesL className={`text-4xl text-[#ffffff]`} /></span>
          <p className={`w-auto text-center italic font-Modern bg-linear-to-r from-white to-[#e0006c] bg-clip-text text-transparent font-semibold text-sm md:text-lg`}>Making the world happier, more informed, and more inspired through the power of storytelling.</p>
          <span><RiDoubleQuotesR className={`text-5xl text-[#e0006c]`} /></span>
        </motion.div>
        <motion.p initial={{y: -50, opacity: 0, filter: "blur(20px)"}} whileInView={{y: 0, opacity: 1, filter: "blur(0px)"}} viewport={{once: true}} transition={{delay:0.2, duration: 0.4, ease: "easeInOut"}} className={`w-full mt-10 px-6 md:px-20 text-white text-center text-[10px] md:text-sm leading-6`}>Our mission is to make communication simple, meaningful, and impactful. We believe a good story does more than communicate information — it connects with people, creates understanding, and inspires emotion.
          <br />Through strong storytelling, thoughtful communication, and creative production, we aim to remove unnecessary noise and deliver messages that people can truly understand, feel, and remember.</motion.p>
      </section>

      {/* vision section */}
      <section id="vision" className={`bg-zinc-950 h-auto w-full pt-16 pb-24 flex flex-col items-center`}>
        <motion.h1 initial={{y: -50, opacity: 0, filter: "blur(20px)"}} whileInView={{y: 0, opacity: 1, filter: "blur(0px)"}} viewport={{once: true}} transition={{delay:0.2, duration: 0.4, ease: "easeInOut"}} className={`w-full text-3xl xl:text-4xl text-center text-white font-light`}>Our</motion.h1>
        <motion.h1 initial={{y: -50, opacity: 0, filter: "blur(20px)"}} whileInView={{y: 0, opacity: 1, filter: "blur(0px)"}} viewport={{once: true}} transition={{delay:0.2, duration: 0.4, ease: "easeInOut"}} className={`w-full text-6xl xl:text-8xl text-center font-Modern tracking-wide text-white font-semibold`}>Vision</motion.h1>

        <motion.div initial={{y: -50, opacity: 0, filter: "blur(20px)"}} whileInView={{y: 0, opacity: 1, filter: "blur(0px)"}} viewport={{once: true}} transition={{delay:0.2, duration: 0.4, ease: "easeInOut"}} className={`w-full xl:w-auto flex justify-between items-center gap-3 px-6 md:px-24 mt-4`}>
          <span><RiDoubleQuotesL className={`text-4xl text-[#ffffff]`} /></span>
          <p className={`w-auto text-center italic font-Modern bg-linear-to-r from-white to-[#e0006c] bg-clip-text text-transparent font-semibold text-sm md:text-lg`}>To create stories that inform, connect, inspire, and bring happiness to people everywhere.</p>
          <span><RiDoubleQuotesR className={`text-5xl text-[#e0006c]`} /></span>
        </motion.div>

        <motion.p initial={{y: -50, opacity: 0, filter: "blur(20px)"}} whileInView={{y: 0, opacity: 1, filter: "blur(0px)"}} viewport={{once: true}} transition={{delay:0.2, duration: 0.4, ease: "easeInOut"}} className={`w-full mt-10 px-6 md:px-20 text-white text-center text-[10px] md:text-sm leading-6`}>Our vision is to become a globally recognized production company known for creating high-quality, meaningful, and emotionally powerful stories.
          <br /><br />We want to bring together information, creativity, technology, and emotion to create productions that do more than look good, they make people feel something.
          <br /><br />From a single frame to a complete story, our vision is to create work that travels across platforms, reaches people everywhere, and leaves a lasting positive impression.</motion.p>
      </section>

      {/* values section */}
      <section id="values" className={`bg-zinc-950 h-auto w-full pt-16 pb-24 flex flex-col items-center relative`}>
        <motion.h1 initial={{y: -50, opacity: 0, filter: "blur(20px)"}} whileInView={{y: 0, opacity: 1, filter: "blur(0px)"}} viewport={{once: true}} transition={{delay:0.2, duration: 0.4, ease: "easeInOut"}} className={`w-full text-3xl xl:text-4xl text-center text-white font-light`}>Our</motion.h1>
        <motion.h1 initial={{y: -50, opacity: 0, filter: "blur(20px)"}} whileInView={{y: 0, opacity: 1, filter: "blur(0px)"}} viewport={{once: true}} transition={{delay:0.2, duration: 0.4, ease: "easeInOut"}} className={`w-full text-6xl xl:text-8xl text-center font-Modern tracking-wide text-white font-semibold`}>Core Values</motion.h1>

        <div className={`w-[95%] md:w-[80%] mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center`}>
          {/* <div className={`w-[30%] h-full bg-linear-to-r from-zinc-950 to-transparent absolute left-0`} /> */}
          {coreValues.map((item, idx) => {
            return <motion.div initial={{opacity: 0, filter: "blur(20px)"}} whileInView={{opacity: 1, filter: "blur(0px)"}} viewport={{once: true}} transition={{delay:0.2, duration: 0.5, ease: "easeInOut"}} key={idx} className={`w-full h-auto flex flex-col justify-center items-center border-2 border-gray-500 px-4 py-5`}>
              <p className={`w-full text-start font-Lemon text-white text-lg md:text-lg px-5`}>{item.title}</p>
              <p className={`w-full text-start italic font-semibold text-white text-[10px] md:text-sm my-5 px-5`}>"{item.quote}"</p>
              <p className={`w-full text-start font-light text-white text-[8px] md:text-[12px] px-5`}>"{item.desc}"</p>
            </motion.div>
          })}
          {/* <div className={`w-[30%] h-full bg-linear-to-l from-zinc-950 to-transparent absolute right-0`} /> */}
        </div>
      </section>

      {/* clients section */}
      <section id="clients" className={`bg-zinc-950 h-auto w-full pt-16 pb-24`}>
        <motion.h1 initial={{y: -50, opacity: 0, filter: "blur(20px)"}} whileInView={{y: 0, opacity: 1, filter: "blur(0px)"}} viewport={{once: true}} transition={{delay:0.2, duration: 0.4, ease: "easeInOut"}} className={`w-full text-3xl xl:text-4xl text-center text-white font-light`}>Our</motion.h1>
        <motion.h1 initial={{y: -50, opacity: 0, filter: "blur(20px)"}} whileInView={{y: 0, opacity: 1, filter: "blur(0px)"}} viewport={{once: true}} transition={{delay:0.2, duration: 0.4, ease: "easeInOut"}} className={`w-full text-6xl xl:text-8xl text-center font-Modern tracking-wide text-white font-semibold`}>Clients</motion.h1>

        <Marquee className={`mt-10`} direction="left" pauseOnHover>
          {Array.from({ length: 13 }, (_, i) => {
            const index = i + 1;
            return <motion.div initial={{x: 50, opacity: 0, filter: "blur(20px)"}} whileInView={{x: 0, opacity: 1, filter: "blur(0px)"}} viewport={{once: true}} transition={{delay:0.2, duration: 0.4, ease: "easeInOut"}} key={index} className={`border-2 px-5 py-4 mx-1 border-gray-500 flex justify-center items-center overflow-hidden`}>
              <img src={`/assets/clients/${index}.png`} className={`h-10 xl:h-20`} />
            </motion.div>
          })}
        </Marquee>
        <Marquee className={`mt-10`} direction="right" pauseOnHover>
          {Array.from({ length: 13 }, (_, i) => {
            const index = i + 1;
            return <motion.div initial={{x: -50, opacity: 0, filter: "blur(20px)"}} whileInView={{x: 0, opacity: 1, filter: "blur(0px)"}} viewport={{once: true}} transition={{delay:0.2, duration: 0.4, ease: "easeInOut"}} key={index} className={`border-2 px-5 py-4 mx-1 border-gray-500 flex justify-center items-center overflow-hidden`}>
              <img src={`/assets/clients/${index}.png`} className={`h-10 xl:h-20`} />
            </motion.div>
          })}
        </Marquee>
      </section>

      {/* works section */}
      <section id="works" className={`bg-zinc-950 h-auto w-full pt-16 pb-24`}>
        <motion.h1 initial={{y: -50, opacity: 0, filter: "blur(20px)"}} whileInView={{y: 0, opacity: 1, filter: "blur(0px)"}} viewport={{once: true}} transition={{delay:0.2, duration: 0.4, ease: "easeInOut"}} className={`w-full text-3xl xl:text-4xl text-center text-white font-light`}>Our</motion.h1>
        <motion.h1 initial={{y: -50, opacity: 0, filter: "blur(20px)"}} whileInView={{y: 0, opacity: 1, filter: "blur(0px)"}} viewport={{once: true}} transition={{delay:0.2, duration: 0.4, ease: "easeInOut"}} className={`w-full text-6xl xl:text-8xl text-center font-Modern tracking-wide text-white font-semibold`}>Works</motion.h1>

        {/* music section */}
        <div className={`w-full mt-10 h-auto flex flex-col justify-start items-start relative`}>
          {/* <h1 className={`w-auto text-start bg-linear-to-r from-white to-[#e30075] bg-clip-text text-transparent font-semibold text-3xl px-4 md:px-6 xl:px-8`}>Music</h1> */}
          <div className={`w-[20%] h-full absolute left-0 z-20 bg-linear-to-r from-zinc-950 to-transparent`} />
          <div className={`w-[20%] h-full absolute right-0 z-20 bg-linear-to-l from-zinc-950 to-transparent`} />

          <div className={`w-full px-5 pl-24 mt-10 h-auto flex items-start justify-start overflow-x-auto gap-8 hide-scrollbar`}>
            {works
              .filter((item) => item.type === "Music")
              .map((item, index) => (
                <WorkCard
                  key={index}
                  name={item.name}
                  link={item.link}
                  type={item.type}
                  videoId={item.videoId}
                />
              ))}
          </div>
        </div>
      </section>

      {/* footer section */}
      <Footer />

    </>
  )
}

export default page
