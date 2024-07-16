"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <footer
      className={`footer-container fade-in-1000 ${isVisible && "make-visible"} flex items-center h-20 sm:h-[60px] bg-primary-700`}
    >
      <div className="footer-content mx-auto flex flex-col sm:flex-row justify-between gap-2">
        <p className="footer-owners text-white text-xs">
          © 2024 Kancelaria Markiewicz & Ciesielska
        </p>
        <p className="footer-separator below-sm:hidden text-white text-xs">|</p>
        <Link
          href={"/polityka-prywatnosci"}
          className="footer-rodo  text-center text-white text-xs hover:text-secondary-200"
        >
          RODO - Polityka Prywatności
        </Link>
        <p className="footer-separator below-sm:hidden text-white text-xs">|</p>
        <p className="footer-credits text-white text-xs below-sm:text-center">
          Made by: Marcin Ostrowski
        </p>
      </div>
    </footer>
  )
}
