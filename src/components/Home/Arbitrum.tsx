"use client"

import { useEffect } from "react"
import Aos from "aos"
import Image from "next/image"

import Arb from "@/assets/arbitrum.svg"
import DigitalLines from "@/assets/digital_line.png"
import LinkedDots from "@/assets/dots_link.svg"

const Arbitrum = () => {
  useEffect(() => {
    Aos.init({
      duration: 600,
      offset: 100,
      once: true,
    })
  }, [])

  return (
    <div
      id="arbitrum"
      className="relative overflow-hidden flex justify-center pt-14 lg:pt-36 pb-16 lg:pb-44"
    >
      <Image
        src={DigitalLines.src}
        width={DigitalLines.width}
        height={DigitalLines.height}
        alt="lines"
        priority
        className="absolute bottom-6 lg:bottom-24 left-0 -translate-x-[45%] max-lg:w-[200px]"
      />
      <Image
        src={DigitalLines.src}
        width={DigitalLines.width}
        height={DigitalLines.height}
        alt="lines"
        priority
        className="absolute top-10 lg:top-16 right-0 max-lg:w-[200px] translate-x-[33%] lg:translate-x-[44%]"
      />
      <div className="container px-5 md:px-10 lg:px-[150px] 3xl:px-0 flex max-lg:flex-col-reverse justify-between items-center relative z-[1]">
        <div className="w-full max-w-[327px] max-lg:mt-[30px]">
          <Image
            src={Arb.src}
            width={Arb.width}
            height={Arb.height}
            alt="arbitrum"
            priority
            data-aos="zoom-in-up"
            className="w-full max-md:w-[150px] max-lg:mx-auto"
          />
        </div>
        <div className="w-full lg:ml-20">
          <h4
            data-aos="fade-up"
            className="font-bold text-center lg:text-right text-2xl md:text-4xl"
          >
            Why Arbitrum?
          </h4>
          <p
            data-aos="fade-up"
            className="text-xs md:text-xl leading-[160%] font-medium mt-6"
          >
            Arbitrum stands as the leading Layer 2 solution within the Ethereum
            ecosystem, boasting unmatched speed, scalability, and privacy
            enhancements for smart contracts. At Toob Finance, our mission
            extends beyond mere integration; we aim to drive increased adoption
            of Arbitrum and amplify its impact within the crypto space. With its
            robust security, decentralization, and status as Ethereum&apos;s
            premier L2 solution, we prioritize guiding new users to onboard onto
            Arbitrum, ensuring they experience the full benefits of its features
            and contribute to its growing ecosystem. While our current focus is
            on enhancing its usage, our roadmap includes plans to integrate with
            additional networks, ensuring comprehensive coverage across all
            available options in the future.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Arbitrum
