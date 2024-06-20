import { Poppins } from "next/font/google"
import Image from "next/image"

import Wave from "@/assets/wave_1.png"
import Wave1 from "@/assets/wave_4.png"
import Dots from "@/assets/dots_vert.svg"
import HemiRing from "@/assets/hemi_ring.svg"
import ArrowRight from "../svgs/ArrowRight"
import Bridge from "@/assets/bridge_1.png"
import MasterCard from "@/assets/mastercard.png"
import Visa from "@/assets/visa.png"
import ApplePay from "@/assets/applepay.png"
import GooglePay from "@/assets/googlepay.png"
import Link from "next/link"

const poppins = Poppins({
  weight: ["500", "600"],
  subsets: ["latin"],
})

const Banner = () => {
  return (
    <div className="flex justify-center relative overflow-hidden text-white bg-black pb-12 pt-16 lg:pt-40">
      <Image
        src={Wave.src}
        width={Wave.width}
        height={Wave.height}
        alt="wave"
        priority
        className="absolute top-0 left-0 w-full h-full z-0 object-cover object-[30%_top] opacity-[0.12] max-md:object-center border-0"
      />
      <Image
        src={Wave1.src}
        width={Wave1.width}
        height={Wave1.height}
        priority
        alt="wave"
        className="absolute top-0 left-0 w-full h-1/2 z-0 object-cover object-[15%] opacity-10 lg:hidden max-md:object-center border-0"
      />
      <Image
        src={Dots.src}
        width={Dots.width}
        height={Dots.height}
        alt="dots"
        priority
        className="absolute max-lg:-bottom-4 lg:top-1/2 right-6 lg:right-0 lg:translate-x-1/2 lg:-translate-y-1/3 max-lg:w-[40px] border-0"
      />
      <Image
        src={Dots.src}
        width={Dots.width}
        height={Dots.height}
        priority
        alt="dots"
        className="absolute bottom-20 lg:-bottom-6 -left-8 lg:left-20 w-[60px] border-0"
      />
      <div className="z-[1]">
        <div className="container flex max-lg:flex-col lg:px-[150px] 3xl:px-0 justify-between items-start">
          <div className="lg:w-[50%]">
            <h2
              className={`text-2xl max-lg:ml-12 md:text-5xl xl:text-[64px] font-semibold leading-[130%] ${poppins.className}`}
            >
              Toob Finance : Bridging
              <br />
              TradFi with DeFi
            </h2>
            <div className="mt-[10] mx-auto w-[80%] lg:hidden">
              <Image
                src={Bridge.src}
                width={Bridge.width}
                height={Bridge.height}
                priority
                alt="bridge"
                className="mt-8 border-0"
              />
            </div>
            <p className="max-lg:mx-8 mt-[30px] max-lg:text-center text-xs md:text-xl font-medium leading-[160%]">
              Catalyzing a paradigm shift, Toob Finance leads the charge in
              bridging TradFi and DeFi, providing unparalleled access to ANY
              ERC-20 Token. Our mission is to empower users and projects with
              unprecedented access, allowing seamless token acquisition using
              fiat currency, heralding a new era of financial inclusivity.
            </p>
            <div className="mt-[30px] lg:mt-20 flex max-lg:justify-center items-center space-x-2">
              <div className="relative">
                <Link
                  href={"https://app.toob.finance"}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center text-white bg-[linear-gradient(180deg,#333_8.5%,#000_100%)] text-xs md:text-xl font-medium py-3 lg:py-[18px] pl-[30px] pr-6 rounded-xl border border-white ${poppins.className} hover:brightness-75 hover:scale-105 active:brightness-95 transition-all`}
                >
                  Launch App <ArrowRight className="ml-2" />
                </Link>
                <Image
                  src={HemiRing.src}
                  width={HemiRing.width}
                  height={HemiRing.height}
                  priority
                  alt="hemi_right"
                  className="absolute bottom-2 lg:bottom-4 -right-[72px] lg:-right-[132px] w-[42px] lg:w-[82px] border-0"
                />
              </div>
            </div>
          </div>
          <div className="w-[45%] max-lg:hidden">
            <Image
              src={Bridge.src}
              width={Bridge.width}
              height={Bridge.height}
              priority
              alt="bridge"
              className="mt-8 border-0"
            />
          </div>
        </div>
        <div className="flex justify-center items-center space-x-6 lg:space-x-16 mt-5">
          <Image
            src={MasterCard.src}
            width={MasterCard.width}
            height={MasterCard.height}
            alt="MasterCard"
            className="max-md:w-14"
          />
          <Image
            src={Visa.src}
            width={Visa.width}
            height={Visa.height}
            alt="Visa"
            className="max-md:w-14"
          />
          <div className="relative">
            <Image
              src={ApplePay.src}
              width={ApplePay.width}
              height={ApplePay.height}
              alt="ApplePay"
              className="max-md:w-14"
            />
            <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap font-bold max-md:text-[10px]">
              Coming Soon
            </span>
          </div>
          <div className="relative">
            <Image
              src={GooglePay.src}
              width={GooglePay.width}
              height={GooglePay.height}
              alt="GooglePay"
              className="max-md:w-14"
            />
            <span className="absolute -bottom-[25px] md:-bottom-[29px] left-1/2 -translate-x-1/2 whitespace-nowrap font-bold max-md:text-[10px]">
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
