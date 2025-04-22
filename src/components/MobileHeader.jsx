import { navItems } from "../../data.js"

export default function MobileHeader() {
  // State to manage the navbar's visibility

  return (
    <div className="mx-auto flex h-24 max-w-[1240px] items-center justify-between bg-black px-4 text-white">
      {/* LOGO. During mobile view, it will center in the middle */}
      <h1 className="w-full text-center text-3xl font-bold text-[#00df9a] md:text-left">
        REACT.
      </h1>

      {/* Desktop Navigation. During mobile view, it will be disappeared */}
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

      {/* Mobile Navigation Menu. It is positioned at the bottom of the page.
      In desktop mode, it is hidden*/}
      <ul className="fixed bottom-0 left-0 flex w-full justify-around border-t border-t-gray-900 bg-[#000300] py-4 duration-500 ease-in-out md:hidden">
        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="cursor-pointer rounded-xl border-b border-gray-600 bg-gray-800 p-4 duration-300 hover:bg-[#00df9a] hover:text-black"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  )
}
