"use client"

import { useState } from "react"
import { Logo } from "./Logo"
import { Navigation } from "./Navigation"
import { NavLinksMobile } from "./NavLinksMobile"

export function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(true)

  return (
    <>
      <nav
        className={`navbar-container ${isMenuVisible ? "menu-visible" : ""} sticky top-0 left-0 z-20 flex flex-row items-center h-[80px] px-6 bg-primary-700 border-b-2 border-primary-700`}
      >
        <div className="navbar-content flex flex-row items-center w-full max-w-[1500px] mx-auto">
          <Logo />
          <Navigation setIsMenuVisible={setIsMenuVisible} />
        </div>
      </nav>

      <div
        className={`navigation-menu-container ${isMenuVisible ? "menu-visible" : ""} fixed top-20 left-0 z-10 flex flex-col h-[238px] w-full  bg-primary-700`}
      >
        <NavLinksMobile setIsMenuVisible={setIsMenuVisible} />
      </div>
    </>
  )
}
