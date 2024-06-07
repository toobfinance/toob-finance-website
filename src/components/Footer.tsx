"use client"

import Image from "next/image"
import Link from "next/link"

import Wave from "@/assets/wave_1.png"
import Logo from "@/assets/logo-white.svg"
import Github from "@/assets/github.svg"
import X from "@/assets/x.svg"
import Telegram from "@/assets/telegram.svg"
import Reddit from "@/assets/reddit.svg"
import Dots from "@/assets/dots_vert.svg"

const Footer = () => {
  const socials = [
    {
      image: Reddit,
      link: "https://toob.dog",
    },
    {
      image: Github,
      link: "https://github.com/toobfinance",
    },
    {
      image: X,
      link: "https://x.com/ToobFinance",
    },
    {
      image: Telegram,
      link: "https://t.me/ToobFinance",
    },
  ]

  return (
    <footer className="flex justify-center relative overflow-hidden bg-black text-white pt-10">
      <Image
        src={Wave.src}
        width={Wave.width}
        height={Wave.height}
        alt="wave"
        className="absolute left-0 top-0 z-0 h-full object-cover object-left opacity-15"
      />
      <Image
        src={Dots.src}
        width={Dots.width}
        height={Dots.height}
        alt="dots"
        className="absolute bottom-2 left-0 -translate-x-1/3 w-[80px] max-lg:hidden"
      />
      <Image
        src={Dots.src}
        width={Dots.width}
        height={Dots.height}
        alt="dots"
        className="absolute bottom-[140px] -right-2 w-[62px] max-lg:hidden"
      />
      <div className="container px-5 md:px-10 lg:px-[150px] 3xl:px-0 z-[1]">
        <div className="flex max-lg:flex-wrap justify-between lg:space-x-16">
          <div className="max-lg:w-full">
            <Image
              src={Logo.src}
              width={Logo.width}
              height={Logo.height}
              alt="logo"
              className="max-md:w-[240px] max-lg:w-[270px]"
            />
            <p className="max-md:text-xs mt-5 lg:mt-8 leading-8 lg:max-w-[480px]">
              At Toob Finance, we adhere to a philosophy of embracing new
              technologies amidst the rapid evolution of our industry. Remaining
              fluid and adaptable, shaping ourselves to seamlessly integrate
              with the ever-changing landscape of Decentralized and Traditional
              Finance.
            </p>
          </div>
          <div className="flex flex-col min-w-[80px] lg:min-w-[130px] xl:min-w-[170px] pt-6 md:pt-9">
            <h4 className="font-bold lg:font-medium text-sm md:text-2xl">
              Products
            </h4>
            <Link
              href={"https://toob.finance"}
              target="_blank"
              rel="noreferrer"
              className="text-xs md:text-lg hover:brightness-75 active:brightness-95 transition-all mt-4 lg:mt-10 cursor-pointer"
            >
              Toob Finance
            </Link>
            <Link
              href={"https://toob.dog"}
              target="_blank"
              rel="noreferrer"
              className="text-xs md:text-lg hover:brightness-75 active:brightness-95 transition-all mt-3 lg:mt-6 cursor-pointer"
            >
              Toob Token
            </Link>
            <Link
              href={"/Branding GuideLines_ToobFinance.pdf"}
              className="text-xs md:text-lg hover:brightness-75 active:brightness-95 transition-all mt-3 lg:mt-6 cursor-pointer"
            >
              Brand Awareness
            </Link>
          </div>
          <div className="flex flex-col min-w-[90px] lg:min-w-[130px] xl:min-w-[170px] pt-6 md:pt-9">
            <h4 className="font-bold lg:font-medium text-sm md:text-2xl">
              Developer
            </h4>
            <Link
              href={"https://docs.toob.finance"}
              target="_blank"
              rel="noreferrer"
              className="text-xs md:text-lg hover:brightness-75 active:brightness-95 transition-all mt-4 lg:mt-10 cursor-pointer"
            >
              Documentation
            </Link>
            <Link
              href={"https://github.com/toobfinance"}
              target="_blank"
              rel="noreferrer"
              className="text-xs md:text-lg hover:brightness-75 active:brightness-95 transition-all mt-3 lg:mt-6"
            >
              Github
            </Link>
            <Link
              href={"https://github.com/toobfinance"}
              target="_blank"
              rel="noreferrer"
              className="text-xs md:text-lg hover:brightness-75 active:brightness-95 transition-all mt-3 lg:mt-6"
            >
              Widget
            </Link>
          </div>
          <div className="flex flex-col max-md:w-[108px] max-md:max-w-[calc(100%-170px)] lg:min-w-fit pt-6 md:pt-9">
            <h4 className="font-bold lg:font-medium text-sm md:text-2xl">
              Socials
            </h4>
            <Link
              href={"https://x.com/ToobFinance"}
              target="_blank"
              rel="noreferrer"
              className="text-xs md:text-lg hover:brightness-75 active:brightness-95 transition-all mt-4 lg:mt-10"
            >
              X (Twitter)
            </Link>
            <Link
              href={"https://t.me/ToobFinance"}
              target="_blank"
              rel="noreferrer"
              className="text-xs md:text-lg hover:brightness-75 active:brightness-95 transition-all mt-3 lg:mt-6"
            >
              Telegram
            </Link>
            <Link
              href={
                "https://toobfinance.notion.site/c0045e9c9ba5410d98b10e7f19cb3175?v=66feeb0d2ca749058a4244c79cdec326&pvs=4"
              }
              target="_blank"
              rel="noreferrer"
              className="text-xs md:text-lg hover:brightness-75 active:brightness-95 transition-all mt-3 lg:mt-6"
            >
              Media Kit
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center mt-10 lg:mt-14 w-full">
          <Link
            href={"mailto:team@toob.finance"}
            target="_blank"
            rel="noreferrer"
            className="text-xs md:text-lg hover:brightness-75 active:brightness-95 transition-all text-[#0085FF]"
          >
            team@toob.finance
          </Link>
          <div className="flex items-center space-x-2.5 w-full justify-center mt-4">
            {socials.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="flex justify-center items-center w-[25px] lg:w-10 h-[25px] lg:h-10 hover:brightness-75 active:brightness-95 transition-all"
              >
                <Image
                  src={item.image.src}
                  width={item.image.width}
                  height={item.image.height}
                  alt="social"
                  className="w-full h-full"
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="border-t border-[#CDD6D7] text-center text-xs md:text-lg pt-2 lg:pt-5 pb-4 lg:pb-9 mt-2">
          © Copyright 2024 Toob Finance. ® All Rights Reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer
