import { Route, Routes } from "react-router"
import Home from "./components/Home"
import { About } from "./components/About"
import { ContactUs } from "./components/ContactUs"
import { Error } from "./components/Error"
function App() {
  return (
    <main className="w-[90%] md:w-[96%] mx-auto mt-24">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  )
}

export default App
