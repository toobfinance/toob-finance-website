import Arbitrum from "@/components/Home/Arbitrum"
import Banner from "@/components/Home/Banner"
import Bridge from "@/components/Home/Bridge"
import FAQ from "@/components/Home/FAQ"
import Regulation from "@/components/Home/Regulation"
import Fluidity from "@/components/Home/Fluidity"
import ToobFinance from "@/components/Home/ToobFinance"
import Statistics from "@/components/Home/Statistics"
import Vision from "@/components/Home/Vision"
import Token from "@/components/Home/Token"

export default function Home() {
  return (
    <main className="overflow-hidden bg-white bg-dots-bg bg-[length:100%]">
      <Banner />
      <Statistics />
      <Vision />
      <Arbitrum />
      <ToobFinance />
      <Fluidity />
      <Regulation />
      <Token />
      <FAQ />
      <Bridge />
    </main>
  )
}
