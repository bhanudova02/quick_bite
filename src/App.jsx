import { Route, Routes } from "react-router"
import Home from "./components/Home"
import { About } from "./components/About"
import { ContactUs } from "./components/ContactUs"
import { Error } from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
function App() {
  return (
    <main className="w-[90%] md:w-[96%] mx-auto mt-28">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  )
}

export default App
