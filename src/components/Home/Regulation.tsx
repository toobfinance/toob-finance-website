"use client"

import { useEffect } from "react"
import Aos from "aos"
import { Poppins } from "next/font/google"
import Image from "next/image"

import Shape from "@/assets/shape.svg"
import Wave from "@/assets/wave_5.png"
import Wave1 from "@/assets/wave_8.png"
import Dots from "@/assets/dots_vert.svg"
import Dots1 from "@/assets/dots_hori.svg"
import Hex from "@/assets/hex.png"
import DigitalLines from "@/assets/digital_line.png"
import Hammer from "@/assets/regulation.png"

const poppins = Poppins({ weight: "700", subsets: ["latin"] })

const Regulation = () => {
  useEffect(() => {
    Aos.init({
      duration: 600,
      offset: 100,
      once: true,
    })
  }, [])

  return (
    <div
      id="regulation"
      className="flex justify-center relative ml-7 lg:ml-20 bg-black text-white pt-[30px] lg:pt-12 pb-[200px] lg:pb-24 rounded-ss-[30px] rounded-es-[30px]"
    >
      <Image
        src={Shape.src}
        width={Shape.width}
        height={Shape.height}
        alt="shape"
        priority
        className="absolute -top-6 lg:top-1 right-0 lg:right-4 z-0 w-[60px] lg:w-[110px]"
      />
      <Image
        src={Wave.src}
        width={Wave.width}
        height={Wave.height}
        alt="wave"
        priority
        className="absolute top-0 left-0 z-0 h-full object-left opacity-20"
      />
      <Image
        src={Wave1.src}
        width={Wave1.width}
        height={Wave1.height}
        alt="wave"
        priority
        className="absolute top-0 right-0 z-0 h-full object-left opacity-20 max-md:hidden"
      />
      <Image
        src={Dots.src}
        width={Dots.width}
        height={Dots.height}
        alt="dots"
        priority
        className="absolute -top-7 lg:-top-0 left-[180px] md:left-[60%] lg:-translate-y-1/2 max-lg:w-[40px]"
      />
      <Image
        src={Dots1.src}
        width={Dots1.width}
        height={Dots1.height}
        alt="dots"
        priority
        className="absolute lg:bottom-0 left-16 translate-y-2/3 w-[100px] lg:w-[200px] max-lg:hidden"
      />
      <Image
        src={Hex.src}
        width={Hex.width}
        height={Hex.height}
        alt="hex"
        priority
        className="absolute bottom-10 md:-bottom-10 left-0 -translate-x-[82%] w-[100px] lg:w-[270px]"
      />
      <Image
        src={DigitalLines.src}
        width={DigitalLines.width}
        height={DigitalLines.height}
        alt="lines"
        priority
        className="absolute -bottom-[50px] left-0 -translate-x-[51%] w-[200px] lg:hidden"
      />
      <div className="relative container px-5 md:px-10 lg:px-[150px] 3xl:px-0 z-[1]">
        <h3
          data-aos="zoom-in-up"
          className={`${poppins.className} text-xl md:text-3xl`}
        >
          Regulation
        </h3>
        <p
          data-aos="zoom-in-down"
          className="text-xs md:text-xl font-medium leading-[160%] mt-6 lg:mt-9 lg:pr-[340px]"
        >
          At Toob Finance, we prioritize regulatory compliance and user trust.
          Built on top of Wert.io, a platform regulated by authorities in the
          USA and Estonia, we ensure adherence to industry standards. Leveraging
          the industry&apos;s best infrastructure, including Sardine, WorldPay,
          Nuvei, and Finery Markets, we uphold the highest standards of security
          and reliability for our users.
        </p>
      </div>

      <Image
        src={Hammer.src}
        width={Hammer.width}
        height={Hammer.height}
        alt="regulation"
        className="absolute bottom-5 max-lg:left-0 mx-auto right-0 lg:right-20 max-w-[240px] sm:max-w-[360px] lg:max-w-[550px]"
      />
    </div>
  )
}

export default Regulation
