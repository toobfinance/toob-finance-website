"use client"

import { useEffect, useState } from "react"
import { Poppins } from "next/font/google"
import Aos from "aos"

const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"] })

interface FAQItemProps {
  title: string
  content: string
  className?: string
}

const FAQItem: React.FC<FAQItemProps> = ({ title, content, className }) => {
  useEffect(() => {
    Aos.init({
      duration: 600,
      offset: 100,
      once: true
    })
  }, [])

  const [open, setOpen] = useState(false)

  return (
    <div
      data-aos="fade-up"
      className={`relative bg-black text-white rounded-[35px] py-8 lg:py-6 pl-5 lg:pl-20 pr-16 cursor-pointer ${poppins.className}`}
      onClick={() => setOpen(!open)}
    >
      <span className="text-sm lg:text-xl font-semibold">{title}</span>
      <div
        data-open={open}
        className="absolute right-9 top-1/2 -translate-y-1/2 border-[5px] border-t-white border-x-transparent border-b-0 data-[open=true]:rotate-180 transition-all"
      />
      <div
        data-open={open}
        className="max-lg:text-xs data-[open=false]:pt-0 pt-1.5 max-h-0 data-[open=true]:max-h-52 data-[open=true]:opacity-100 opacity-0"
      >
        {content}
      </div>
    </div>
  )
}

export default FAQItem
