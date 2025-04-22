import { NavLink, Outlet } from "react-router"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import NavLinks from "./NavLinks"

export default function Header() {
  const [open, setOpen] = useState(false)

  function toggle() {
    setOpen((prev) => !prev)
  }

  return (
    <div>
      <nav className="flex items-center justify-between gap-4 bg-gray-800 p-4 text-xl text-white">
        <h1 className="mr-auto">MySite</h1>

        {/* hidden at the beginning, when reach md size, flex container  */}
        <div className="hidden space-x-6 md:flex">
          <NavLinks />
        </div>

        {/* Hamburger menu for mobile screen*/}
        {open && (
          <div className="flex items-center space-x-6 md:hidden">
            <NavLinks />
          </div>
        )}

        {/* A Hamburger button for small screen */}
        <button
          className="cursor-pointer text-xl hover:rotate-90 md:hidden"
          onClick={toggle}
        >
          <GiHamburgerMenu size={24} />
        </button>
      </nav>

      <Outlet />
    </div>
  )
}
