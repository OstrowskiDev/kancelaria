"use client"

import MenuIco from "../icons/MenuIco"
import { NavLinksDesktop } from "./NavLinksDesktop"

export function Navigation({ setIsMenuVisible }) {
  function onClick() {
    setIsMenuVisible((prev) => !prev)
  }

  return (
    <div className="navbar-responsive-container">
      {/* mobile */}
      <div
        className="navar-menu-container sm:hidden w-6 h-6 hover:cursor-pointer hover:scale-y-110 ease-in-out duration-300"
        onClick={onClick}
      >
        <MenuIco />
      </div>

      {/* desktop */}
      <div className="navbar-anchors-container below-sm:hidden">
        <NavLinksDesktop />
      </div>
    </div>
  )
}
