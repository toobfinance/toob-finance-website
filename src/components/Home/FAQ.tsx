"use client"

import { useEffect } from "react"
import Aos from "aos"
import Image from "next/image"
import { Poppins } from "next/font/google"

import DigitalLines from "@/assets/digital_line.png"
import Wave from "@/assets/wave_6.png"
import Faq from "@/assets/faq.png"
import FAQItem from "../FAQItem"

const poppins = Poppins({ weight: "700", subsets: ["latin"] })

const FAQ = () => {
  useEffect(() => {
    Aos.init({
      duration: 600,
      offset: 100,
      once: true,
    })
  }, [])

  const faqs = [
    {
      q: "Why Toob Finance?",
      a: "Toob Finance stands out as the pioneer in bridging the gap between TradeFi and DeFi. By providing the first-ever seamless connection between these two worlds, we revolutionize accessibility to decentralized finance. Our innovative approach ensures that users can easily navigate both traditional and decentralized financial markets, setting a new standard for inclusivity and convenience.",
    },
    {
      q: "What is TradeFi and DeFi?",
      a: "TradeFi refers to traditional finance, involving centralized institutions like banks and credit card companies. DeFi, or decentralized finance, operates on blockchain technology, allowing users to access financial services without intermediaries, such as lending, borrowing, and trading, directly through smart contracts.",
    },
    {
      q: "What do you do exactly?",
      a: "Toob Finance facilitates seamless token acquisition using fiat currency, bridging the gap between TradeFi and DeFi. If a token exists on a network we support, it's listed by default. Users can simply enter the contract address and purchase the token using fiat. Additionally, we offer token whitelisting options for projects that need it; contact us for more information.",
    },
    {
      q: "I’m a developer, can my token be purchased on Toob Finance?",
      a: "Absolutely! If your token exists on a network we support, it's listed by default. Users can enter the contract address and purchase the token using fiat. Additionally, we offer token whitelisting options for projects that need it; contact us for more information. We also provide a widget that developers can integrate directly onto their website, enabling their users to purchase tokens without leaving their site. Check out the developer section below for more details.",
    },
    {
      q: "Can I have Toob Finance integrated directly on my project website?",
      a: "Yes, you can! Toob Finance offers a widget that developers can integrate directly onto their website, allowing their users to purchase tokens without leaving the site. Contact us to discuss integration possibilities tailored to your project's needs. Check out the developer section below for more details.",
    },
  ]

  return (
    <div
      id="faq"
      className="relative flex flex-col items-center pt-12 lg:pt-24 pb-[160px] mb-5"
    >
      <Image
        src={Wave.src}
        width={Wave.width}
        height={Wave.height}
        alt="wave"
        priority
        className="absolute bottom-0 left-0 right-0 w-full opacity-15"
      />
      <Image
        src={DigitalLines.src}
        width={DigitalLines.width}
        height={DigitalLines.height}
        alt="lines"
        priority
        className="absolute -bottom-1.5 md:bottom-[60px] left-0 -translate-x-[40%] max-lg:w-[200px]"
      />
      <div className="relative z-[1] w-full flex justify-center">
        <Image
          src={DigitalLines.src}
          width={DigitalLines.width}
          height={DigitalLines.height}
          alt="lines"
          priority
          className="absolute top-1/2 right-0 translate-x-[50%] -translate-y-[160%] md:-translate-y-[66%] max-lg:w-[200px]"
        />
        <div className="flex container px-5 md:px-10 lg:px-[150px] 3xl:px-0 lg:justify-between items-center">
          <Image
            data-aos="flip-down"
            src={Faq.src}
            width={Faq.width}
            height={Faq.height}
            alt="faq"
            priority
            className="max-lg:w-[120px] max-lg:mr-3"
          />
          <h3
            data-aos="zoom-in-left"
            className={`${poppins.className} text-2xl lg:text-4xl font-bold`}
          >
            FAQ Section
          </h3>
        </div>
      </div>
      <div className="container px-5 md:px-10 lg:px-[150px] 3xl:px-0 flex flex-col space-y-5 relative z-[1] mt-5 lg:mt-16">
        {faqs.map((item, i) => (
          <FAQItem key={i} title={item.q} content={item.a} />
        ))}
      </div>
    </div>
  )
}

export default FAQ
