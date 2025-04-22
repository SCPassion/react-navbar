import { NavLink } from "react-router"

export default function NavLinks() {
  return (
    <>
      <NavLink
        to="."
        className={({ isActive }) => (isActive ? "font-bold underline" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="about"
        className={({ isActive }) => (isActive ? "font-bold underline" : "")}
      >
        About
      </NavLink>
      <NavLink
        to="contact"
        className={({ isActive }) => (isActive ? "font-bold underline" : "")}
      >
        Contact
      </NavLink>
    </>
  )
}
