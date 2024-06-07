"use client"

import Image from "next/image"
import { useEffect } from "react"
import AOS from "aos"

import Bridges from "@/assets/bridge_3.png"
import DigitalLines from "@/assets/digital_line.png"

const Bridge = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      offset: 100,
      once: true,
    })
  }, [])

  return (
    <div className="relative overflow-hidden">
      <Image
        src={DigitalLines.src}
        width={DigitalLines.width}
        height={DigitalLines.height}
        alt="lines"
        priority
        className="absolute top-0 right-0 translate-x-[30%] w-[200px] lg:hidden"
      />
      <div className="w-[140%] max-md:-ml-[20%] md:w-full py-[60px] md:py-[120px]">
        <Image
          src={Bridges.src}
          width={Bridges.width}
          height={Bridges.height}
          alt="bridge"
          priority
          data-aos="fade-up"
          className="w-full"
        />
      </div>
    </div>
  )
}

export default Bridge
