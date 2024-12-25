export function Header() {
    return (
        <header className="shadow shadow-black/5 bg-white py-2 px-4 flex justify-between items-center top-0 fixed w-full">
            <div className="flex items-center">
                <img src="logo.png" width="100%" className="w-10" alt="logo" />
                <h5 className="font-bold text-xl">Quick <span className="text-green-600">Bite</span></h5>
            </div>
            <div>
                <ul className="flex gap-10 me-4 font-semibold text-base">
                    <li className="underline"><a href="#">Home</a></li>
                    <li><a href="#">AboutUs</a></li>
                    <li><a href="#">ContactUs</a></li>
                    <li><a href="#">Cart</a></li>
                </ul>
            </div>
        </header>
    )
}