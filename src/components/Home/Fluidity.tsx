"use client"

import { useEffect } from "react"
import Aos from "aos"
import Image from "next/image"

import Words from "@/assets/fluidity.png"

const Fluidity = () => {
  useEffect(() => {
    Aos.init({
      duration: 600,
      offset: 100,
      once: true,
    })
  }, [])

  return (
    <div className="relative overflow-hidden flex justify-center pt-24 lg:pt-32 pb-7 lg:pb-14">
      <div className="container px-5 md:px-10 lg:px-[150px] 3xl:px-0 flex justify-between items-center relative z-[1]">
        <div className="min-w-fit lg:w-1/2 lg:flex lg:justify-center">
          <Image
            src={Words.src}
            data-aos="fade-right"
            width={Words.width}
            height={Words.height}
            alt="fluidity"
            priority
            className="w-[120px] md:w-[200px] lg:w-fit lg:max-w-[300px]"
          />
        </div>
        <div className="lg:w-1/2 ml-5 md:ml-20">
          <h3
            data-aos="fade-down"
            className="text-right text-xl md:text-3xl font-bold"
          >
            Fluidity & Usage
          </h3>
          <p
            data-aos="fade-left"
            className="text-xs md:text-xl font-medium mt-6 lg:mt-9"
          >
            At Toob Finance, we understand that the technology world is moving
            at a rapid pace. We are committed to adapting ourselves along our
            journey to the latest technologies in the DeFi and TradFi worlds.
            <br />
            <br />
            We prioritize user experience with the lowest fees on the market,
            eliminating barriers with no KYC requirements for transactions under
            $1,000 and ensuring fast and easy checkout processes. Say goodbye to
            listing fees – all tokens on our supported networks are available
            for free, making the traditional practice of paying listing fees a
            thing of the past.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Fluidity
