'use client'

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
import { RiAlignItemBottomFill, RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

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
        <div className={`xl:hidden w-full h-screen fixed z-40 ${menuVisible ? "translate-y-0" : "-translate-y-full"} duration-500 ease-in-out left-1/2 -translate-x-1/2 bg-linear-to-bl from-zinc-950 to-[#ff1462] flex flex-col justify-center items-center`}>
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

        <div className={`absolute w-full bottom-0 h-[70%] xl:h-[40%] bg-linear-to-t from-[#550026] via-pink-700 to-transparent z-20`} />

        <section id="/" className={`w-full flex flex-col justify-center items-center absolute top-[50%] xl:top-[35%] z-20`}>
          <div className={`w-full z-30 flex flex-col justify-center items-center gap-3`}>
            <h1 className={`w-full text-white text-5xl md:text-6xl xl:text-8xl text-center font-semibold font-Lemon`}>Where Ideas</h1>
            <h1 className={`w-full text-white text-5xl md:text-6xl xl:text-8xl text-center font-semibold font-Lemon`}>Find Rhythm</h1>
            <p className={`w-[80%] text-center text-[10px] md:text-sm xl:text-lg mt-5 text-white`}>Creating stories that help businesses become brands, brands become memories, and memories become movements.</p>
          </div>
          <Marquee speed={70} className={`z-30 bg-white/20 text-white mt-4`}>
            <span className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}>Music</span>
            <span className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}><FaStarOfLife /></span>
            <span className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}>Film</span>
            <span className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}><FaStarOfLife /></span>
            <span className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}>Content</span>
            <span className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}><FaStarOfLife /></span>
            <span className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}>Culture</span>
            <span className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}><FaStarOfLife /></span>
            <span className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}>Music</span>
            <span className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}><FaStarOfLife /></span>
            <span className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}>Film</span>
            <span className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}><FaStarOfLife /></span>
            <span className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}>Content</span>
            <span className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}><FaStarOfLife /></span>
            <span className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}>Culture</span>
            <span className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}><FaStarOfLife /></span>
            <span className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}>Film</span>
            <span className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}><FaStarOfLife /></span>
            <span className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}>Content</span>
            <span className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}><FaStarOfLife /></span>
            <span className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}>Culture</span>
            <span className={`w-auto px-6 text-sm lg:text-lg xl:text-xl`}><FaStarOfLife /></span>
          </Marquee>
        </section>
      </div>

      {/* about section */}
      <section id="about" className={`w-full h-[75vh] bg-[#550026] flex flex-col justify-start items-center relative`}>
        <p className=" w-full px-7 text-white text-[10px] md:text-sm xl:text-lg md:px-20 leading-5 xl:leading-9">At Taakdoom, we believe every challenge holds a possibility. *We will find a way—and if there is no way, we will create one.</p>
        <p className=" w-full px-7 text-white text-[10px] md:text-sm xl:text-lg md:px-20 mt-10 leading-5 xl:leading-9">We bring together creative thinking, innovative technology and high-quality production to transform ideas into stories that inform, inspire and connect. By eliminating unnecessary noise, we craft clear and meaningful narratives that resonate emotionally, travel across platforms and remain in people’s minds.</p>
        <p className=" w-full px-7 text-white text-[10px] md:text-sm xl:text-lg md:px-20 mt-10 leading-5 xl:leading-9">Driven by optimism, innovation, quality, decency and a strong sense of community, we strive to make every creative journey joyful and fulfilling for all our stakeholders.</p>
        <p className=" w-full px-7 text-white text-[10px] md:text-sm xl:text-lg md:px-20 mt-10 xl:mt-0 leading-5 xl:leading-9">At Taakdoom, we don’t simply tell stories, we create experiences that inspire joy and make people believe in magic.</p>
      </section>

      {/* directors section */}
      <section id="directors" className={`w-full min-h-screen flex flex-col justify-start items-center bg-linear-to-b from-[#550026] to-zinc-950`}>
        <h1 className={`w-full text-3xl xl:text-4xl text-center text-white font-light`}>Meet our</h1>
        <h1 className={`w-full text-6xl xl:text-8xl text-center font-Modern tracking-wide text-white font-semibold`}>Directors</h1>

        {/* founder 1 section */}
        <div className={`w-full mt-10 md:mt-20 md:px-10 flex flex-col md:flex-row justify-center md:justify-between items-center md:gap-8`}>
          <div className={`w-[80%] md:w-[50%] h-auto rounded-tl-[50px] rounded-br-[50px] overflow-hidden relative`}>
            {/* <div className={`w-full h-[70%] absolute z-20 bg-linear-to-t from-black to-transparent bottom-0`} /> */}
            <img src="/assets/founder-1.jpeg" className={`h-full z-10 w-full object-cover hover:scale-110 duration-500 ease-in-out`} />
          </div>

          <div className={`w-full py-10 md:py-4 flex flex-col justify-center items-center md:items-start gap-5`}>
            <h1 className={`w-full text-center md:text-start text-white font-semibold font-Lemon text-2xl xl:text-4xl`}>Banibrata Goswami</h1>
            <div className={`my-2 h-px bg-linear-to-r from-transparent via-white to-transparent w-[80%] md:hidden`} />
            <div className={`my-2 h-px bg-linear-to-r from-white to-transparent w-[80%] hidden md:block`} />
            <p className={`w-full text-center md:text-start text-white text-[10px] xl:text-sm px-8 md:px-0 xl:pr-32 font-light leading-6 italic`}>The carefree 70’s child. Tends to remember faces & forget names. 25 Years as Creative Professional. Never without an idea. Or facial hair. Can be found cracking campaigns out of thin air. Or meddling with everyone else’s work.
              <br />He is Co-founder & Chief Creative Officer at BetheBee, an Advertising Agency with clients across 10 Indian States and the Founder of TaakDoom an audio video production house.</p>
          </div>
        </div>

        {/* founder 2 section */}
        <div className={`w-full mt-10 md:mt-20 md:px-10 flex flex-col md:flex-row-reverse justify-center md:justify-between items-center md:gap-8`}>
          <div className={`w-[80%] md:w-[50%] h-auto rounded-tl-[50px] rounded-br-[50px] overflow-hidden relative`}>
            {/* <div className={`w-full h-[70%] absolute z-20 bg-linear-to-t from-black to-transparent bottom-0`} /> */}
            <img src="/assets/founder-2.jpeg" className={`h-full z-10 w-full object-cover hover:scale-110 duration-500 ease-in-out`} />
          </div>

          <div className={`w-full py-10 md:py-4 flex flex-col justify-center items-center md:items-end gap-5`}>
            <h1 className={`w-full text-center md:text-end text-white font-semibold font-Lemon text-2xl xl:text-4xl`}>Yuthi Guin</h1>
            <div className={`my-2 h-px bg-linear-to-r from-transparent via-white to-transparent w-[80%] md:hidden`} />
            <div className={`my-2 h-px bg-linear-to-l from-white to-transparent w-[80%] hidden md:block`} />
            <p className={`w-full text-center md:text-end text-white text-[10px] xl:text-sm px-8 md:px-0 xl:pl-32 font-light leading-6 italic`}>Suspendisse potenti. Nam eget facilisis velit. Quisque convallis malesuada quam ac vehicula. Curabitur ut felis diam. Aenean efficitur odio ante, et bibendum nulla mollis in. Praesent consequat facilisis urna in ultrices. Pellentesque ac laoreet dui. </p>
          </div>
        </div>
      </section>

      {/* services section */}
      <section id="services" className={`w-full py-20 bg-zinc-950 h-auto flex flex-col justify-start items-center relative overflow-hidden`}>
        <h1 className={`w-full text-3xl xl:text-4xl text-center text-white font-light`}>Explore our</h1>
        <h1 className={`w-full text-6xl xl:text-8xl text-center font-Modern tracking-wide text-white font-semibold`}>Services</h1>

        <div className={`w-full mt-20 h-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-10 px-6 lg:px-10`}>
          {services.map((item, index) => {
            return <ServiceCard key={index} icon={item.icon} desc={item.desc} title={item.title} id={item.id} />
          })}
        </div>
      </section>

      {/* members section */}
      <section id="members" className={`w-full h-auto bg-zinc-950 py-20 relative overflow-hidden`}>
        <h1 className={`w-full text-3xl xl:text-4xl text-center text-white font-light`}>Meet our</h1>
        <h1 className={`w-full text-6xl xl:text-8xl text-center font-Modern tracking-wide text-white font-semibold`}>Members</h1>

        <div className={`w-full mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-10 px-6`}>
          {members.map((item, index) => {
            return <MemberCard key={index} name={item.name} image={item.image} points={item.points} />
          })}
        </div>
      </section>

      {/* mission section */}
      <section id="mission" className={`bg-zinc-950 h-auto w-full pt-16 pb-24 flex flex-col items-center`}>
        <h1 className={`w-full text-3xl xl:text-4xl text-center text-white font-light`}>Our</h1>
        <h1 className={`w-full text-6xl xl:text-8xl text-center font-Modern tracking-wide text-white font-semibold`}>Mission</h1>

        <div className={`w-full xl:w-auto flex justify-between items-center gap-3 px-6 md:px-24 mt-4`}>
          <span><RiDoubleQuotesL className={`text-4xl text-[#ffffff]`} /></span>
          <p className={`w-auto text-center italic font-Modern bg-linear-to-r from-white to-[#e0006c] bg-clip-text text-transparent font-semibold text-sm md:text-lg`}>Making the world happier, more informed, and more inspired through the power of storytelling.</p>
          <span><RiDoubleQuotesR className={`text-5xl text-[#e0006c]`} /></span>
        </div>
        <p className={`w-full mt-10 px-6 md:px-20 text-white text-center text-[10px] md:text-sm leading-6`}>Our mission is to make communication simple, meaningful, and impactful. We believe a good story does more than communicate information — it connects with people, creates understanding, and inspires emotion.
          <br />Through strong storytelling, thoughtful communication, and creative production, we aim to remove unnecessary noise and deliver messages that people can truly understand, feel, and remember.</p>
      </section>

      {/* vision section */}
      <section id="vision" className={`bg-zinc-950 h-auto w-full pt-16 pb-24 flex flex-col items-center`}>
        <h1 className={`w-full text-3xl xl:text-4xl text-center text-white font-light`}>Our</h1>
        <h1 className={`w-full text-6xl xl:text-8xl text-center font-Modern tracking-wide text-white font-semibold`}>Vision</h1>

        <div className={`w-full xl:w-auto flex justify-between items-center gap-3 px-6 md:px-24 mt-4`}>
          <span><RiDoubleQuotesL className={`text-4xl text-[#ffffff]`} /></span>
          <p className={`w-auto text-center italic font-Modern bg-linear-to-r from-white to-[#e0006c] bg-clip-text text-transparent font-semibold text-sm md:text-lg`}>To create stories that inform, connect, inspire, and bring happiness to people everywhere.</p>
          <span><RiDoubleQuotesR className={`text-5xl text-[#e0006c]`} /></span>
        </div>

        <p className={`w-full mt-10 px-6 md:px-20 text-white text-center text-[10px] md:text-sm leading-6`}>Our vision is to become a globally recognized production company known for creating high-quality, meaningful, and emotionally powerful stories.
          <br /><br />We want to bring together information, creativity, technology, and emotion to create productions that do more than look good, they make people feel something.
          <br /><br />From a single frame to a complete story, our vision is to create work that travels across platforms, reaches people everywhere, and leaves a lasting positive impression.</p>
      </section>

      {/* values section */}
      <section id="values" className={`bg-zinc-950 h-auto w-full pt-16 pb-24 flex flex-col items-center relative`}>
        <h1 className={`w-full text-3xl xl:text-4xl text-center text-white font-light`}>Our</h1>
        <h1 className={`w-full text-6xl xl:text-8xl text-center font-Modern tracking-wide text-white font-semibold`}>Core Values</h1>

        <div className={`w-[95%] md:w-[80%] mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center`}>
          <div className={`w-[30%] h-full bg-linear-to-r from-zinc-950 to-transparent absolute left-0`} />
          {coreValues.map((item, idx) => {
            return <div key={idx} className={`w-full h-auto flex flex-col justify-center items-center border-2 border-gray-500 px-4 py-5`}>
              <p className={`w-full text-start font-Lemon text-white text-lg md:text-lg px-5`}>{item.title}</p>
              <p className={`w-full text-start italic font-semibold text-white text-[10px] md:text-sm my-5 px-5`}>"{item.quote}"</p>
              <p className={`w-full text-start font-light text-white text-[8px] md:text-[12px] px-5`}>"{item.desc}"</p>
            </div>
          })}
          <div className={`w-[30%] h-full bg-linear-to-l from-zinc-950 to-transparent absolute right-0`} />
        </div>
      </section>

      {/* clients section */}
      <section id="clients" className={`bg-zinc-950 h-auto w-full pt-16 pb-24`}>
        <h1 className={`w-full text-3xl xl:text-4xl text-center text-white font-light`}>Our</h1>
        <h1 className={`w-full text-6xl xl:text-8xl text-center font-Modern tracking-wide text-white font-semibold`}>Clients</h1>

        <Marquee className={`mt-10`} direction="left" pauseOnHover>
          {Array.from({ length: 13 }, (_, i) => {
            const index = i + 1;
            return <div key={index} className={`border-2 px-5 py-4 mx-1 border-gray-500 flex justify-center items-center overflow-hidden`}>
              <img src={`/assets/clients/${index}.png`} className={`h-10 xl:h-20`} />
            </div>
          })}
        </Marquee>
        <Marquee className={`mt-10`} direction="right" pauseOnHover>
          {Array.from({ length: 13 }, (_, i) => {
            const index = i + 1;
            return <div key={index} className={`border-2 px-5 py-4 mx-1 border-gray-500 flex justify-center items-center overflow-hidden`}>
              <img src={`/assets/clients/${index}.png`} className={`h-10 xl:h-20`} />
            </div>
          })}
        </Marquee>
      </section>

      {/* works section */}
      <section id="works" className={`bg-zinc-950 h-auto w-full pt-16 pb-24`}>
        <h1 className={`w-full text-3xl xl:text-4xl text-center text-white font-light`}>Our</h1>
        <h1 className={`w-full text-6xl xl:text-8xl text-center font-Modern tracking-wide text-white font-semibold`}>Works</h1>

        {/* music section */}
        <div className={`w-full mt-10 h-auto flex flex-col justify-start items-start relative`}>
          {/* <h1 className={`w-auto text-start bg-linear-to-r from-white to-[#e30075] bg-clip-text text-transparent font-semibold text-3xl px-4 md:px-6 xl:px-8`}>Music</h1> */}
          <div className={`w-[20%] h-full absolute left-0 z-20 bg-linear-to-r from-zinc-950 to-transparent`} />
          <div className={`w-[20%] h-full absolute right-0 z-20 bg-linear-to-l from-zinc-950 to-transparent`} />

          <div className={`w-full px-5 mt-10 h-auto flex overflow-x-auto gap-8 hide-scrollbar`}>
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

    </>
  )
}

export default page
