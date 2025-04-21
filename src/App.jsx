import { BrowserRouter, Routes, Route } from "react-router"
import Header from "./components/Header.jsx"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route index element={<h1>Home</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
