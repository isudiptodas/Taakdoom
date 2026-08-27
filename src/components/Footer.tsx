'use client'

import { footerLinks } from "@/data/footerLinks"
import axios from "axios"
import { motion } from "motion/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";

export default function Footer() {

    const [submitting, setSubmitting] = useState(false);
    const router = useRouter();
    const [data, setData] = useState({
        name: "",
        email: "",
        company: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setData((prev) => ({
            ...prev,
            [name]: value
        }));

    }

    const submitMessage = async () => {
        if (submitting) return;

        if (!data.email.includes("@outlook.com") && !data.email.includes("@gmail.com")) {
            toast.error("Please add your personal email");
            return;
        }

        if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
            toast.error("Please fill required details");
            return;
        }

        const id = toast.loading("Submitting your message...");

        try {
            const res = await axios.post(`/api/send-message`, {
                data
            });
            console.log(res.data);

            if (res.status === 200) {
                toast.dismiss(id);
                toast.success("Message Submitted");
            }
        } catch (error: any) {
            console.log(error);
            const message = error?.response?.data?.message || "Something went wrong";
            toast.error(message);
        }
        finally {
            toast.dismiss(id);
            setData({
                name: "",
                email: "",
                company: "",
                message: ""
            })
        }
    }

    const openLink = (link: string) => {
        if (link.startsWith("https")) {
            window.open(link, "_blank")
        }
        else {
            router.push(link)
        }
    }

    return (
        <>
            <section id="footer" className={`bg-white h-auto w-full pt-10 pb-14`}>
                <motion.h1 initial={{ y: 50, opacity: 0, filter: "blur(20px)" }} whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }} className={`w-full text-center font-Lemon text-black text-4xl`}>Let's Get In Touch</motion.h1>
                <div className={`w-full h-px bg-zinc-500 my-4`} />

                <div className={`w-full mt-10 flex flex-col xl:flex-row justify-center items-center xl:justify-between xl:pr-8`}>
                    <div className={`w-full flex flex-col justify-start items-center gap-3`}>
                        <div className={`w-full grid grid-cols-2 md:grid-cols-4 justify-items-start gap-5 px-5 pl-16`}>
                            {footerLinks.map((item, index) => {
                                return <motion.div initial={{ y: 50, opacity: 0, filter: "blur(20px)" }} whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }} key={index} className={`w-auto flex flex-col justify-start items-center`}>
                                    <p className={`w-full text-start text-black font-bold text-xl mb-5`}>{item.name}</p>
                                    {item.points.map((foot, idx) => {
                                        return <span onClick={() => openLink(foot.link)} key={idx} className={`w-full text-start text-[12px] xl:text-sm pb-2 cursor-pointer`}>{foot.name}</span>
                                    })}
                                </motion.div>
                            })}
                        </div>

                        <div className={`w-full mt-5 flex flex-col justify-start items-center px-5 pl-16`}>
                            <motion.p initial={{ y: 50, opacity: 0, filter: "blur(20px)" }} whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }} onClick={() => {
                                window.open("https://maps.google.com/?q=22.454918,88.378143", "_blank")
                            }} className={`w-full text-start text-[10px] md:text-sm font-bold cursor-pointer flex justify-start items-center gap-2 mb-3 pr-16`}><FaLocationDot /> D - 48, Atabagan, Boral Main Road, Tirupati Bhawan Phase II, 3rd Floor,Kolkata - 700084</motion.p>
                            <motion.p initial={{ y: 50, opacity: 0, filter: "blur(20px)" }} whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }} onClick={() => {window.open("tel:919831117549", "_blank")}} className={`w-full font-bold cursor-pointer text-start text-[10px] md:text-sm flex justify-start items-center gap-2`}><IoMdCall />+91 9831117549 </motion.p>
                        </div>
                    </div>

                    <motion.div initial={{ y: -50, opacity: 0, filter: "blur(20px)" }} whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }} className={`w-full md:w-[70%] rounded-3xl mt-16 xl:mt-0 px-5 shadow-2xl h-auto flex flex-col justify-center items-center py-5 gap-3`}>
                        
                        <motion.p initial={{ y: 50, opacity: 0, filter: "blur(20px)" }} whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }} className={`w-full text-center text-xl font-bold my-5`}>Contact Us</motion.p>
                        
                        <input value={data.name} name="name" onChange={(e) => handleChange(e)} type="text" className={`w-full px-5 py-3 rounded-full bg-gray-200 outline-none`} placeholder="Enter your name*" />
                        <input value={data.email} name="email" onChange={(e) => handleChange(e)} type="text" className={`w-full px-5 py-3 rounded-full bg-gray-200 outline-none`} placeholder="Enter your email*" />
                        <input value={data.company} name="company" onChange={(e) => handleChange(e)} type="text" className={`w-full px-5 py-3 rounded-full bg-gray-200 outline-none`} placeholder="Enter your company" />
                        <textarea value={data.message} name="message" onChange={(e) => handleChange(e)} className={`w-full h-44 px-5 py-3 rounded-3xl bg-gray-200 outline-none`} placeholder="Enter your message*" />
                        <p onClick={submitMessage} className={`w-full py-3 rounded-full text-white text-center active:opacity-70 duration-300 ease-in-out cursor-pointer bg-linear-to-br from-zinc-950 to-[#5a5a5a]`} >Submit</p>
                    </motion.div>

                </div>

            </section>
        </>
    )
}
