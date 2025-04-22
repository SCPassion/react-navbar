import { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { navItems } from "../../data.js"
export default function PositionHeader() {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false)
  function handleNav() {
    setNav((prev) => !prev)
  }

  return (
    <div className="mx-auto flex h-24 max-w-[1240px] items-center justify-between bg-black px-4 text-white">
      {/* LOGO */}
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => {
          return (
            <li
              key={item.id}
              className="m-2 cursor-pointer rounded-xl p-4 duration-300 hover:bg-[#00df9a] hover:text-black"
            >
              {item.text}
            </li>
          )
        })}
      </ul>

      {/* Mobile Navigation Icon */}
      <div className="block cursor-pointer md:hidden" onClick={handleNav}>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      {/* position the toggle menu to the left side fixed regardless of scroll */}
      {/* Beginning when nav is false: top-0: Aligns the top edge of the element with the top of the viewport.
      bottom-0: Aligns the bottom edge of the element with the bottom of the viewport, ensuring the element spans the full height of the screen.
      left-[-100%]: Moves the element completely off-screen to the left by 100% of its own width, effectively hiding it. */}
      {/* After clicking the hamburger icon: 
      top-0: Aligns the top edge of the element with the top of the viewport.
      left-0: Aligns the left edge of the element with the left edge of the viewport, making it fully visible. */}
      <ul
        className={
          nav
            ? "fixed top-0 left-0 h-full w-[200px] border-r border-r-gray-900 bg-[#000300] duration-500 ease-in-out md:hidden"
            : "fixed top-0 bottom-0 left-[-100%] w-0 duration-500 ease-in-out"
        }
      >
        {/* Mobile Logo */}
        <h1 className="fold-bold m-4 w-full text-3xl text-[#00df9a]">REACT.</h1>
        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="cursor-pointer rounded-xl border-b border-gray-600 p-4 duration-300 hover:bg-[#00df9a] hover:text-black"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  )
}
