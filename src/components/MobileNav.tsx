"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { scroller } from "react-scroll"

import ArrowRight from "@/assets/arrow_right.svg"
import Github from "@/assets/github_dark.svg"
import X from "@/assets/x_dark.svg"
import Telegram from "@/assets/telegram_dark.svg"
import Reddit from "@/assets/reddit_dark.svg"

interface MobileNavProps {
  open: boolean
  setOpen: any
  className?: string
}

const MobileNav: React.FC<MobileNavProps> = ({ open, setOpen, className }) => {
  const router = useRouter()
  const pathname = usePathname()
  const socials = [
    {
      image: Reddit,
      link: "https://toob.dog",
    },
    {
      image: Github,
      link: "https://github.com/Toobdog",
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

  const onScrollLink = (element: string) => {
    if (pathname !== "/") {
      router.push("/")
      setTimeout(
        () =>
          scroller.scrollTo(element, {
            smooth: true,
            duration: 800,
            offset: -64,
          }),
        500
      )
    } else {
      scroller.scrollTo(element, { smooth: true, duration: 800, offset: -64 })
    }
    setOpen(false)
  }

  return (
    <div
      data-open={open}
      className={`fixed lg:hidden flex flex-col top-16 left-0 right-0 bg-white rounded-es-[20px] rounded-ee-[20px] data-[open=true]:max-h-[400px] max-h-0 overflow-hidden transition-all px-4 ${
        className ?? ""
      }`}
    >
      <div
        // href={"/"}
        // target="_blank"
        // rel="noreferrer"
        className="font-medium px-2.5 py-2 leading-6 border border-[#747681] rounded-lg hover:opacity-80 hover:scale-105 active:opacity-95 transition-all mx-auto mt-2 cursor-pointer"
      >
        Launch App
      </div>
      <div className="flex flex-col items-center mt-2">
        <Link
          href={"/"}
          className="flex justify-between items-center font-medium px-3 py-2.5 text-lg bg-white hover:bg-[linear-gradient(90deg,#D9D9D938_1.172%,#D9D9D9A6_27.096%,#D9D9D9FF_49.25%,#D9D9D9A6_69.99%,#D9D9D900_95.443%)] transition-all border-b border-[#D8D8D8] w-full"
          onClick={() => setOpen(false)}
        >
          Home
          <Image
            src={ArrowRight.src}
            width={ArrowRight.width}
            height={ArrowRight.height}
            alt="arrow"
          />
        </Link>
        <a
          className="flex justify-between items-center font-medium px-3 py-2.5 text-lg bg-white hover:bg-[linear-gradient(90deg,#D9D9D938_1.172%,#D9D9D9A6_27.096%,#D9D9D9FF_49.25%,#D9D9D9A6_69.99%,#D9D9D900_95.443%)] transition-all border-b border-[#D8D8D8] w-full cursor-pointer"
          onClick={() => onScrollLink("vision")}
        >
          Vision
          <Image
            src={ArrowRight.src}
            width={ArrowRight.width}
            height={ArrowRight.height}
            alt="arrow"
          />
        </a>
        <a
          className="flex justify-between items-center font-medium px-3 py-2.5 text-lg bg-white hover:bg-[linear-gradient(90deg,#D9D9D938_1.172%,#D9D9D9A6_27.096%,#D9D9D9FF_49.25%,#D9D9D9A6_69.99%,#D9D9D900_95.443%)] transition-all border-b border-[#D8D8D8] w-full cursor-pointer"
          onClick={() => onScrollLink("arbitrum")}
        >
          Arbitrum
          <Image
            src={ArrowRight.src}
            width={ArrowRight.width}
            height={ArrowRight.height}
            alt="arrow"
          />
        </a>
        <a
          className="flex justify-between items-center font-medium px-3 py-2.5 text-lg bg-white hover:bg-[linear-gradient(90deg,#D9D9D938_1.172%,#D9D9D9A6_27.096%,#D9D9D9FF_49.25%,#D9D9D9A6_69.99%,#D9D9D900_95.443%)] transition-all border-b border-[#D8D8D8] w-full cursor-pointer"
          onClick={() => onScrollLink("regulation")}
        >
          Regulation
          <Image
            src={ArrowRight.src}
            width={ArrowRight.width}
            height={ArrowRight.height}
            alt="arrow"
          />
        </a>
        <a
          className="flex justify-between items-center font-medium px-3 py-2.5 text-lg bg-white hover:bg-[linear-gradient(90deg,#D9D9D938_1.172%,#D9D9D9A6_27.096%,#D9D9D9FF_49.25%,#D9D9D9A6_69.99%,#D9D9D900_95.443%)] transition-all border-b border-[#D8D8D8] w-full cursor-pointer"
          onClick={() => onScrollLink("faq")}
        >
          FAQ
          <Image
            src={ArrowRight.src}
            width={ArrowRight.width}
            height={ArrowRight.height}
            alt="arrow"
          />
        </a>
        <Link
          href={"/contact"}
          className="flex justify-between items-center font-medium px-3 py-2.5 text-lg bg-white hover:bg-[linear-gradient(90deg,#D9D9D938_1.172%,#D9D9D9A6_27.096%,#D9D9D9FF_49.25%,#D9D9D9A6_69.99%,#D9D9D900_95.443%)] transition-all border-b border-[#D8D8D8] w-full"
          onClick={() => setOpen(false)}
        >
          Contact Us
          <Image
            src={ArrowRight.src}
            width={ArrowRight.width}
            height={ArrowRight.height}
            alt="arrow"
          />
        </Link>
      </div>
      <div className="flex items-center justify-center space-x-1.5 mt-4 mb-3.5">
        {socials.map((item, i) => (
          <Link key={i} href={item.link} target="_blank" rel="noreferrer">
            <Image
              src={item.image.src}
              width={item.image.width}
              height={item.image.height}
              alt="social"
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MobileNav
