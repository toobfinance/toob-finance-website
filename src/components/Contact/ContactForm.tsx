"use client"

import { Poppins } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import toast from "react-hot-toast"
import { useEffect, useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import ReCAPTCHA from "react-google-recaptcha"
import { useMediaQuery } from "react-responsive"

import Wave from "@/assets/wave_1.png"
import Dots from "@/assets/dots_hori.svg"
import Shape from "@/assets/shape.svg"
import Hex from "@/assets/hex.png"
import Telegram from "@/assets/telegram.svg"
import X from "@/assets/x.svg"
import Mail from "@/assets/mail.svg"
import Reddit from "@/assets/reddit.svg"
import Github from "@/assets/github.svg"

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
})

const EMAILJS_SERVICE_ID = "service_rul4a3o"
const EMAILJS_TEMPLATE_ID = "template_immi0ln"

const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [captcha, setCaptcha] = useState(false)
  const captchaRef = useRef<any>()
  const isSM = useMediaQuery({
    query: "(min-width: 480px)",
  })

  const socials = [
    {
      image: Reddit,
      title: "toob.dog",
      link: "https://toob.dog",
    },
    {
      image: Github,
      title: "github.com/Toobdog",
      link: "https://github.com/Toobdog",
      desktop: false,
    },
    {
      image: X,
      title: "x.com/ToobFinance",
      link: "https://x.com/ToobFinance",
    },
    {
      image: Telegram,
      title: "t.me/ToobFinance",
      link: "https://t.me/ToobFinance",
    },
    {
      image: Mail,
      title: "team@toob.finance",
      link: "mailto:team@toob.finance",
      blue: true,
      mobile: false,
    },
  ]

  useEffect(() => {
    emailjs.init("LPcZ-ovGrWfh7-vBr")
  }, [])

  const nameError = !name.length
  const emailError = !email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
  const messageError = message.length <= 100

  const onSendMessage = async () => {
    if (nameError) {
      toast.error("Invalid Name")
      return
    }
    if (emailError) {
      toast.error("Invalid Email")
      return
    }
    if (messageError) {
      toast.error("Message should be at least 100 characters")
      return
    }

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name,
        email,
        message,
      })
      toast.success("Sent contact successfully")
    } catch (err) {
      console.log(err)
      toast.error("Failed to send email")
    }
    captchaRef.current.reset()
  }

  const onRecaptcha = (token: any) => {
    setCaptcha(true)
  }

  return (
    <div className="flex justify-center overflow-hidden relative text-white bg-black pb-10 lg:pb-60 pt-9 lg:pt-20">
      <Image
        src={Wave.src}
        width={Wave.width}
        height={Wave.height}
        alt="wave"
        priority
        className="absolute top-0 left-0 w-full h-full z-0 object-cover object-[15%_top] lg:object-[30%_top] opacity-10"
      />
      <Image
        src={Hex.src}
        width={Hex.width}
        height={Hex.height}
        alt="hex"
        priority
        className="absolute top-10 right-0 z-0 translate-x-[45%] max-lg:hidden"
      />
      <Image
        src={Hex.src}
        width={Hex.width}
        height={Hex.height}
        alt="hex"
        priority
        className="absolute bottom-0 left-0 z-0 -translate-x-[45%] translate-y-[55%] w-[200px] max-lg:hidden"
      />
      <Image
        src={Dots.src}
        width={Dots.width}
        height={Dots.height}
        alt="dots"
        priority
        className="absolute top-48 -left-11 max-lg:hidden"
      />
      <Image
        src={Dots.src}
        width={Dots.width}
        height={Dots.height}
        alt="dots"
        priority
        className="absolute -bottom-10 -right-20 max-lg:hidden"
      />
      <div className="container px-5 md:px-10 lg:px-[150px] 3xl:px-0 z-[1]">
        <h2
          className={`text-2xl md:text-[64px] font-semibold text-center ${poppins.className}`}
        >
          Contact Us
        </h2>
        <div className="flex max-lg:flex-col justify-center mt-6 md:mt-20 lg:mt-56 max-lg:space-y-8 lg:space-x-20">
          <div>
            <h4 className="text-xl md:text-4xl font-semibold leading-[120%]">
              Send Us A Message
            </h4>
            <p className="text-xs md:text-xl mt-2 md:mt-3 leading-8 lg:max-w-[500px]">
              Fill out the form and our team will get back to you as quickly as
              we can.
            </p>
            <div className="flex flex-col max-lg:hidden mt-6">
              <span className="mb-3 text-lg">
                Or Contact Us on the Socials:
              </span>
              {socials
                .filter((item) => item.desktop !== false)
                .map((item) => (
                  <Link
                    key={item.title}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center w-fit mt-3 hover:brightness-90 active:brightness-95 transition-all"
                  >
                    <Image
                      src={item.image.src}
                      width={item.image.width}
                      height={item.image.height}
                      alt={item.title}
                      priority
                      className="w-9 h-9"
                    />
                    <h4
                      className={`text-lg ml-4 ${
                        item.blue ? "text-[#0085FF]" : ""
                      }`}
                    >
                      {item.title}
                    </h4>
                  </Link>
                ))}
            </div>
          </div>
          <div className="relative">
            <Image
              src={Shape.src}
              width={Shape.width}
              height={Shape.height}
              alt="shape"
              priority
              className="absolute z-0 -top-10 -right-32 max-lg:hidden"
            />
            <div className="flex flex-col py-6 lg:py-14 px-5 lg:px-11 border border-white/20 bg-[linear-gradient(180deg,#000,#272E3500_100%)] rounded-[14px] z-[1] relative">
              <div className="flex max-lg:flex-col lg:space-x-6 max-lg:space-y-4">
                <input
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white p-4 lg:py-5 lg:px-7 placeholder:text-[#12141D] outline-none rounded-[6px] text-black lg:w-1/2"
                />
                <input
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white p-4 lg:py-5 lg:px-7 placeholder:text-[#12141D] outline-none rounded-[6px] text-black lg:w-1/2"
                />
              </div>
              <textarea
                rows={8}
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-white p-4 lg:py-5 lg:px-7 placeholder:text-[#12141D] outline-none rounded-[6px] text-black w-full mt-4"
              />
              <div className="flex justify-center mt-4">
                <ReCAPTCHA
                  sitekey="6LcpkIUpAAAAAH2laYghmo5ysUEnAAQCe2GlfmXy"
                  size={isSM ? "normal" : "compact"}
                  onChange={onRecaptcha}
                  ref={captchaRef}
                />
              </div>
              <button
                className="bg-white w-full py-5 text-black font-bold rounded-[6px] mt-4 enabled:hover:brightness-90 enabled:active:brightness-95 transition-all disabled:bg-[#B1B1B1]/80"
                onClick={onSendMessage}
                disabled={nameError || emailError || messageError || !captcha}
              >
                Send Message
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center lg:hidden px-4">
            <span className="mr-4 text-sm md:text-base">
              Or reach us on the socials:
            </span>
            <div className="flex space-x-2">
              {socials
                .filter((item) => item.mobile !== false)
                .map((item) => (
                  <Link
                    key={item.title}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center w-fit hover:brightness-90 active:brightness-95 transition-all"
                  >
                    <Image
                      src={item.image.src}
                      width={item.image.width}
                      height={item.image.height}
                      alt={item.title}
                      priority
                      className="min-w-9 w-9 h-9"
                    />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
