"use client"

import { useEffect } from "react"
import Aos from "aos"
import { Poppins } from "next/font/google"
import Image from "next/image"

import Shape from "@/assets/shape.svg"
import Wave from "@/assets/wave_1.png"
import Wave1 from "@/assets/wave_8.png"
import Light from "@/assets/light.png"
import Earth from "@/assets/earth.png"
import Dots from "@/assets/dots_vert.svg"
import Runner from "@/assets/runner.png"

const poppins = Poppins({ weight: "700", subsets: ["latin"] })

const ToobFinance = () => {
  useEffect(() => {
    Aos.init({
      duration: 600,
      offset: 100,
      once: true,
    })
  }, [])

  return (
    <div className="flex justify-center relative mr-7 lg:mr-20 bg-black text-white pt-9 lg:pt-12 pb-10 lg:pb-20 rounded-ee-[30px] rounded-se-[30px]">
      <Image
        src={Shape.src}
        width={Shape.width}
        height={Shape.height}
        alt="shape"
        priority
        className="absolute w-[112px] top-2 right-6 z-0 max-lg:hidden"
      />
      <Image
        src={Wave.src}
        width={Wave.width}
        height={Wave.height}
        alt="wave"
        priority
        className="absolute top-0 left-0 w-full z-0 object-cover h-full max-lg:hidden opacity-15"
      />
      <Image
        src={Wave1.src}
        width={Wave1.width}
        height={Wave1.height}
        alt="wave"
        priority
        className="absolute top-0 right-0 z-0 h-full opacity-15 max-lg:hidden"
      />
      <Image
        src={Dots.src}
        width={Dots.width}
        height={Dots.height}
        alt="dots"
        priority
        className="absolute -top-7 lg:-top-24 left-5 lg:left-1/2 max-lg:w-[40px]"
      />
      <Image
        src={Earth.src}
        width={Earth.width}
        height={Earth.height}
        alt="earth"
        priority
        className="absolute -bottom-8 lg:-bottom-28 -right-9 lg:-right-14 w-[100px] lg:w-[200px]"
      />
      <div
        data-aos="fade-right"
        className="absolute bottom-0 right-10 xl:right-96"
      >
        <Image
          src={Runner.src}
          width={Runner.width}
          height={Runner.height}
          alt="runner"
          priority
          className="translate-y-[54.6%] max-md:w-[140px] w-[240px]"
        />
      </div>
      <div className="container lg:px-[150px] 3xl:px-0 flex justify-between items-center z-[1] px-5 max-md:pb-[100px] max-lg:pb-[200px]">
        <div className="lg:mr-10 w-full lg:pr-[200px] xl:pr-[300px]">
          <h3
            data-aos="fade-right"
            className={`${poppins.className} text-2xl md:text-4xl font-bold max-lg:text-center`}
          >
            Why Toob Finance?
          </h3>

          <h3
            data-aos="fade-left"
            className={`${poppins.className} text-xl md:text-3xl max-lg:pt-4 max-lg:pb-6 lg:mt-[25px] max-lg:inline-block`}
          >
            Innovation
          </h3>
          <p
            data-aos="fade-right"
            className="text-xs md:text-xl font-medium leading-[160%] lg:mt-9"
          >
            At Toob Finance, we&apos;re not just bridging the gap between
            TradFi and DeFi; we&apos;re empowering developers by providing them
            with free access to the Fiat and TradFi worlds. As the first
            venture to close this divide, we revolutionize the landscape by
            democratizing access to financial markets, fostering creativity, and
            driving innovation in the decentralized finance space.
          </p>
        </div>
        <Image
          data-aos="fade-left"
          src={Light.src}
          width={Light.width}
          height={Light.height}
          alt="light"
          priority
          className="absolute -right-10 lg:-right-20 max-md:w-[140px] max-lg:w-[240px] max-xl:w-[400px] w-[480px] max-md:bottom-12 max-lg:bottom-20"
        />
      </div>
    </div>
  )
}

export default ToobFinance
