"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { scroller } from "react-scroll"
import { useRouter, usePathname } from "next/navigation"

import Logo from "@/assets/logo-dark.svg"
import Hambuger from "./Hambuger"
import MobileNav from "./MobileNav"

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const onScrollLink = (element: string) => {
    if (pathname !== "/") {
      router.push("/")
      setTimeout(
        () => scroller.scrollTo(element, { smooth: true, duration: 800 }),
        500
      )
    } else {
      scroller.scrollTo(element, { smooth: true, duration: 800 })
    }
  }

  return (
    <header className="max-lg:sticky top-0 left-0 w-full flex justify-between items-center py-3 lg:py-4 pl-2 pr-5 lg:px-14 z-10 bg-white">
      <Image
        src={Logo.src}
        width={Logo.width}
        height={Logo.height}
        alt="logo"
        className="max-lg:w-[240px] w-[280px]"
      />
      <div className="flex items-center space-x-7 max-lg:hidden">
        <Link
          href={"/"}
          className="font-medium text-lg hover:opacity-80 active:opacity-95 transition-all"
        >
          Home
        </Link>
        <Link
          href={"https://docs.toob.finance/"}
          className="font-medium text-lg hover:opacity-80 active:opacity-95 transition-all"
        >
          Doc
        </Link>
        <a
          className="font-medium text-lg hover:opacity-80 active:opacity-95 transition-all cursor-pointer"
          onClick={() => onScrollLink("vision")}
        >
          Vision
        </a>
        <a
          className="font-medium text-lg hover:opacity-80 active:opacity-95 transition-all cursor-pointer"
          onClick={() => onScrollLink("arbitrum")}
        >
          Arbitrum
        </a>
        <a
          className="font-medium text-lg hover:opacity-80 active:opacity-95 transition-all cursor-pointer"
          onClick={() => onScrollLink("regulation")}
        >
          Regulation
        </a>
        <a
          className="font-medium text-lg hover:opacity-80 active:opacity-95 transition-all cursor-pointer"
          onClick={() => onScrollLink("faq")}
        >
          FAQ
        </a>
        <Link
          href={"/contact"}
          className="font-medium text-lg hover:opacity-80 active:opacity-95 transition-all whitespace-nowrap"
        >
          Contact Us
        </Link>
      </div>
      <div className="xl:w-[300px] max-lg:hidden" />
      <Link
        href={"https://app.toob.finance"}
        target="_blank"
        rel="noreferrer"
        className="text-lg font-medium px-6 py-4 border border-[#747681] rounded-lg hover:opacity-80 hover:scale-105 active:opacity-95 transition-all max-lg:hidden cursor-pointer whitespace-nowrap"
      >
        Launch App
      </Link>
      <Hambuger
        open={mobileNavOpen}
        setOpen={setMobileNavOpen}
        className="lg:hidden"
      />
      <MobileNav open={mobileNavOpen} setOpen={setMobileNavOpen} />
    </header>
  )
}

export default Header
