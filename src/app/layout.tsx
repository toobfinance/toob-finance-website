import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

import "aos/dist/aos.css"
import ScrollProvider from "@/hooks/useScroll"
import { Toaster } from "react-hot-toast"
import Provider from "./provider"

const roboto = Roboto({
  weight: ["100", "400", "500", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Toob Finance: Bridging TradeFi <> DeFi",
  description: "Toob Finance",
  openGraph: {
    images: [
      {
        type: "image/png",
        url: "thumbnail.png",
        width: 1200,
        height: 600,
        alt: "Toob Finance: Bridging TradeFi <> DeFi",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <Header />
        <ScrollProvider>
          <Provider>{children}</Provider>
        </ScrollProvider>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
