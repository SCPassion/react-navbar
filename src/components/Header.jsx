import { Outlet } from "react-router"
export default function Header() {
  return (
    <div>
      <h1>UppLayer</h1>
      <Outlet />
    </div>
  )
}
