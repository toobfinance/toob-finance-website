"use client"

import Image from "next/image"
import { Poppins } from "next/font/google"
import { useEffect, useState } from "react"
import Aos from "aos"

import DigitalFrame from "@/assets/digital_frame.png"
import DigitalLines from "@/assets/digital_line.png"
import Link from "next/link"
import axios from "axios"
import * as cheerio from "cheerio"
import { useQuery } from "@tanstack/react-query"
import CountUp from "react-countup"

const poppins = Poppins({ weight: ["500", "700"], subsets: ["latin"] })

const Statistics = () => {
  const [] = useState("0")
  useEffect(() => {
    Aos.init({
      duration: 600,
      offset: 100,
      once: true,
    })
  }, [])

  const { data } = useQuery({
    queryKey: ["tokens"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://www.oklink.com/api/v5/explorer/token/token-list?chainShortName=ARBITRUM&protocolType=token_20&startTime=1717260349000&limit=1",
        { headers: { "Ok-Access-Key": "f451112d-ede6-4539-9290-022a0756111c" } }
      )
      console.log(data)

      return Number(data?.data?.[0]?.totalPage ?? "0") + 234522
    },
  })

  const items = [
    {
      title: "Supported Networks",
      value: 1,
    },
    {
      title: "Supported Tokens",
      value: data ?? 0,
    },
    {
      title: "Supported Countries",
      value: 229,
    },
  ]

  return (
    <div className="relative overflow-hidden flex justify-center pt-7 pb-5 lg:py-[68px]">
      <Image
        src={DigitalLines.src}
        width={DigitalLines.width}
        height={DigitalLines.height}
        alt="lines"
        priority
        className="absolute bottom-10 left-0 -translate-x-[45%] max-lg:hidden"
      />
      <Image
        src={DigitalLines.src}
        width={DigitalLines.width}
        height={DigitalLines.height}
        alt="lines"
        priority
        className="absolute top-5 right-0 translate-x-[40%] max-lg:hidden"
      />
      <div className="container lg:px-[150px] 3xl:px-0 max-md:px-5 px-10">
        <div className="flex max-lg:flex-wrap justify-center lg:space-x-10 max-lg:-ml-3 max-lg:w-[calc(100%+12px)]">
          {items.map((item, i) => (
            <div
              key={item.title}
              data-aos="fade-up"
              className={`${poppins.className} w-fit lg:w-full lg:max-w-[400px] max-lg:mt-3 max-lg:ml-3`}
            >
              <h4 className="text-sm md:text-xl font-bold lg:font-bold text-center">
                {item.title}
              </h4>
              <div className="relative">
                <Image
                  src={DigitalFrame.src}
                  width={DigitalFrame.width}
                  height={DigitalFrame.height}
                  alt="frame"
                  priority
                  className="max-md:max-w-[220px] max-lg:max-w-[300px]"
                />
                <CountUp
                  end={item.value}
                  duration={5}
                  className="flex justify-center items-center absolute top-0 left-0 bottom-0 right-0 text-3xl lg:text-5xl font-bold"
                ></CountUp>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6 lg:mt-8">
          <Link
            data-aos="fade-up"
            href={"/contact"}
            className="flex items-center w-fit text-white py-3 lg:py-4 px-8 text-xs md:text-2xl font-medium rounded-[14px] bg-[linear-gradient(180deg,#000_25.5%,#414141_100%)] hover:brightness-75 active:brightness-95 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Statistics
