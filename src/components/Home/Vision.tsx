"use client"

import { useEffect } from "react"
import Aos from "aos"
import Image from "next/image"

import Shape from "@/assets/shape.svg"
import Bridge from "@/assets/bridge_2.png"
import Wave from "@/assets/wave_2.png"
import Wave1 from "@/assets/wave_10.png"
import Dots from "@/assets/dots_vert.svg"

const Vision = () => {
  useEffect(() => {
    Aos.init({
      duration: 600,
      offset: 100,
      once: true,
    })
  }, [])

  return (
    <div
      id="vision"
      className="flex overflow-hidden flex-col items-center relative lg:ml-20 bg-black text-white pt-4 lg:pt-14 lg:pb-44 lg:rounded-ss-[30px] lg:rounded-es-[30px]"
    >
      <Image
        src={Shape.src}
        width={Shape.width}
        height={Shape.height}
        alt="shape"
        priority
        className="absolute -top-6 lg:-top-16 right-0 lg:right-7 z-0 max-lg:w-[60px]"
      />
      <Image
        src={Wave.src}
        width={Wave.width}
        height={Wave.height}
        alt="wave"
        priority
        className="absolute top-0 left-0 w-full lg:h-full z-0 object-cover object-left opacity-10 max-md:object-center"
      />
      <Image
        src={Wave1.src}
        width={Wave1.width}
        height={Wave1.height}
        alt="wave"
        priority
        className="absolute bottom-0 left-0 w-full z-0 object-cover object-left opacity-10 md:hidden"
      />
      <Image
        src={Bridge.src}
        width={Bridge.width}
        height={Bridge.height}
        alt="bridge"
        data-aos="zoom-in"
        priority
        className="absolute right-0 bottom-0 max-w-[60%] max-lg:hidden w-[500px] xl:w-[550px]"
      />
      <Image
        src={Dots.src}
        width={Dots.width}
        height={Dots.height}
        alt="dots"
        priority
        className="absolute top-3 lg:top-0 max-lg:left-5 lg:right-[270px] -translate-y-1/2 max-lg:w-[40px]"
      />
      <Image
        src={Dots.src}
        width={Dots.width}
        height={Dots.height}
        alt="dots"
        priority
        className="absolute bottom-[136px] lg:-bottom-[60px] left-8 lg:left-[54px] max-lg:w-[40px]"
      />
      <div className="relative container px-5 md:px-10 lg:px-[150px] 3xl:px-0 z-[1] ">
        <h3
          data-aos="zoom-in"
          className="font-bold text-2xl md:text-4xl max-lg:text-center"
        >
          The Vision
        </h3>
        <p
          data-aos="fade-up"
          className="text-xs md:text-xl font-medium leading-[160%] mt-[22px] lg:mt-16 lg:w-[70%] lg:max-w-[700px] xl:max-w-[1100px]"
        >
          Our vision at Toob Finance is to lower the entry barrier into the
          cryptocurrency and DeFi space, driving widespread adoption of crypto
          assets and specifically the Arbitrum network. By seamlessly connecting
          TradeFi with DeFi, we aim to empower individuals globally to easily
          access and participate in the burgeoning world of digital finance,
          ultimately catalyzing the mainstream adoption of cryptocurrencies and
          blockchain technologies.
        </p>
      </div>
      <Image
        src={Bridge.src}
        width={Bridge.width}
        height={Bridge.height}
        alt="bridge"
        data-aos="zoom-in"
        priority
        className="!translate-y-[14%] lg:hidden max-w-[500px] ml-auto w-full pl-5"
      />
    </div>
  )
}

export default Vision
