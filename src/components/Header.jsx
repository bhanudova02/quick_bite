import { Link, useLocation } from "react-router";
import Sidebar from "./Sidebar";
import { useState } from "react";
export function Header() {
    const [btnName, setBtnName] = useState("Login");
    const location = useLocation();
    console.log(location.pathname)
    return (
        <header className="shadow shadow-black/5 bg-white py-3.5 lg:py-2 px-4 flex justify-between items-center top-0 fixed w-full z-10">
            <Link to="/" className="flex items-center">
                <img src="logo.png" width="100%" className="w-10" alt="logo" />
                <h5 className="font-bold text-xl">Quick <span className="text-green-600">Bite</span></h5>
            </Link>
            <div className="hidden lg:block">
                <ul className="flex items-center gap-10 me-4 font-semibold text-base">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">AboutUs</Link></li>
                    <li><Link to="/contact">ContactUs</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li onClick={() => { btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login') }}>
                        <button className="bg-green-400 rounded-md py-1 px-4 text-white cursor-pointer">
                            {btnName}
                        </button>
                    </li>
                </ul>
            </div>
            <div className="lg:hidden block">
                <Sidebar />
            </div>
        </header>
    )
}