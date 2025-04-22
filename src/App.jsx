import { BrowserRouter, Routes, Route } from "react-router"
import Header from "./components/Header.jsx"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route index element={<h1>Home</h1>} />
          <Route path="about" element={<h1>About</h1>} />
          <Route path="contact" element={<h1>Contact</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
