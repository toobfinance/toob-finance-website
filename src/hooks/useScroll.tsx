"use client"

import { useEffect, useState } from "react"

interface ScrollProviderProps {
  children: React.ReactNode
}

const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const setScrollPosition = () => {
    const scroll = window.scrollY
    const bg = scroll < 200 ? "white" : "black"
    // if (document.body.style.backgroundColor !== bg)
    //   document.body.style.backgroundColor = bg
  }

  useEffect(() => {
    window.addEventListener("scroll", setScrollPosition)

    return () => {
      window.removeEventListener("scroll", setScrollPosition)
    }
  }, [])

  return children
}

export default ScrollProvider
