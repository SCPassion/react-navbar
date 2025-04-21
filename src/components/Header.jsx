import { Outlet } from "react-router"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"

export default function Header() {
  const [open, setOpen] = useState(false)

  function toggle() {
    setOpen((prev) => !prev)
  }

  return (
    <div>
      <nav className="flex items-center justify-between bg-gray-800 p-4 text-xl text-white">
        <h1>MySite</h1>

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
