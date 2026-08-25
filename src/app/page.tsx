'use client'

import MemberCard from "@/components/MemberCard";
import Navbar from "@/components/Navbar"
import ServiceCard from "@/components/ServiceCard";
import { members } from "@/data/members";
import { navLinks } from "@/data/navlinks";
import { services } from "@/data/services";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react"
import Marquee from "react-fast-marquee";
import { FaStarOfLife } from "react-icons/fa";

function page() {

  const [menuVisible, setMenuVisible] = useState(false);
  const pathname = usePathname();

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
            return <Link href={item.url} key={index} className={`w-full text-start pl-6 text-4xl py-2 text-white ${pathname === item.url ? "font-bold" : "font-light"}`}>{item.name}</Link>
          })}
        </div>

        {/* hero section */}
        <video
          className={`h-screen object-cover w-full z-10 select-none`}
          autoPlay
          loop
          muted
          src={`https://cdn.pixabay.com/video/2025/02/01/255788_large.mp4`} />

        <div className={`absolute w-full bottom-0 h-[70%] xl:h-[50%] bg-linear-to-t from-[#550026] via-pink-700 to-transparent z-20`} />

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
        <p className=" w-full px-7 text-white text-[10px] md:text-sm xl:text-lg md:px-20 leading-5 xl:leading-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id sodales magna. Duis sagittis nunc id maximus bibendum. Quisque fringilla lacinia lobortis. Suspendisse auctor interdum purus eu convallis. Nam hendrerit, sapien id luctus pulvinar, elit nunc auctor metus, nec sodales erat justo in ligula. Sed dictum varius tempor. Morbi tincidunt nulla nec elit dapibus facilisis. Morbi sed orci pretium, dignissim urna id, molestie nulla. Vestibulum a pulvinar tellus. Aliquam sed nisl id velit vehicula faucibus. Morbi vulputate ipsum vitae dui varius molestie. Proin luctus, ex id lacinia fringilla, lectus elit vestibulum arcu, a volutpat lacus lacus eget urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer odio libero, hendrerit ac elit at, suscipit rutrum lacus.</p>
        <p className=" w-full px-7 text-white text-[10px] md:text-sm xl:text-lg md:px-20 mt-10 leading-5 xl:leading-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id sodales magna. Duis sagittis nunc id maximus bibendum. Quisque fringilla lacinia lobortis. Suspendisse auctor interdum purus eu convallis. Nam hendrerit, sapien id luctus pulvinar, elit nunc auctor metus, nec sodales erat justo in ligula. Sed dictum varius tempor. Morbi tincidunt nulla nec elit dapibus facilisis.</p>
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
            <p className={`w-full text-center md:text-start text-white text-[10px] xl:text-sm px-8 md:px-0 xl:pr-32 font-light`}>Suspendisse potenti. Nam eget facilisis velit. Quisque convallis malesuada quam ac vehicula. Curabitur ut felis diam. Aenean efficitur odio ante, et bibendum nulla mollis in. Praesent consequat facilisis urna in ultrices. Pellentesque ac laoreet dui. </p>
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
            <p className={`w-full text-center md:text-end text-white text-[10px] xl:text-sm px-8 md:px-0 xl:pl-32 font-light`}>Suspendisse potenti. Nam eget facilisis velit. Quisque convallis malesuada quam ac vehicula. Curabitur ut felis diam. Aenean efficitur odio ante, et bibendum nulla mollis in. Praesent consequat facilisis urna in ultrices. Pellentesque ac laoreet dui. </p>
          </div>
        </div>
      </section>

      {/* services section */}
      <section id="services" className={`w-full py-20 bg-zinc-950 h-auto flex flex-col justify-start items-center relative overflow-hidden`}>
        <h1 className={`w-full text-3xl xl:text-4xl text-center text-white font-light`}>Explore our</h1>
        <h1 className={`w-full text-6xl xl:text-8xl text-center font-Modern tracking-wide text-white font-semibold`}>Services</h1>

        <div className={`w-full mt-20 h-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-10 px-6 lg:px-10`}>
          {services.map((item, index) => {
            return <ServiceCard key={index} desc={item.desc} title={item.title} id={item.id} />
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
      
      {/* members section */}
      <section id="mission" className={`bg-zinc-950 h-auto w-full pt-16 pb-24`}>
        <h1 className={`w-full text-3xl xl:text-4xl text-center text-white font-light`}>Our</h1>
        <h1 className={`w-full text-6xl xl:text-8xl text-center font-Modern tracking-wide text-white font-semibold`}>Mission</h1>

        <p className={`w-full mt-10 px-6 md:px-20 text-white text-center text-[10px] md:text-sm leading-6`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id sodales magna. Duis sagittis nunc id maximus bibendum. Quisque fringilla lacinia lobortis. Suspendisse auctor interdum purus eu convallis. Nam hendrerit, sapien id luctus pulvinar, elit nunc auctor metus, nec sodales erat justo in ligula. Sed dictum varius tempor. Morbi tincidunt nulla nec elit dapibus facilisis. Morbi sed orci pretium, dignissim urna id, molestie nulla. Vestibulum a pulvinar tellus. Aliquam sed nisl id velit vehicula faucibus. Morbi vulputate ipsum vitae dui varius molestie.</p>
      </section>

      {/* clients section */}
      <section id="clients" className={`bg-zinc-950 h-auto w-full pt-16 pb-24`}>
        <h1 className={`w-full text-3xl xl:text-4xl text-center text-white font-light`}>Our</h1>
        <h1 className={`w-full text-6xl xl:text-8xl text-center font-Modern tracking-wide text-white font-semibold`}>Clients</h1>

        <Marquee className={`mt-10`} direction="left" pauseOnHover>
          {Array.from({ length: 13}, (_, i) => {
            const index = i+1;
            return <div key={index} className={`border-2 px-5 py-4 mx-1 border-gray-500 flex justify-center items-center overflow-hidden`}>
              <img src={`/assets/clients/${index}.png`} className={`h-10 xl:h-20`} />
            </div>
          })}
        </Marquee>
        <Marquee className={`mt-10`} direction="right" pauseOnHover>
          {Array.from({ length: 13}, (_, i) => {
            const index = i+1;
            return <div key={index} className={`border-2 px-5 py-4 mx-1 border-gray-500 flex justify-center items-center overflow-hidden`}>
              <img src={`/assets/clients/${index}.png`} className={`h-10 xl:h-20`} />
            </div>
          })}
        </Marquee>
      </section>

    </>
  )
}

export default page
