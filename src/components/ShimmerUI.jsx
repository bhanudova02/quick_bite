import { SearchBar } from "./SearchBar";
import { top_btn_clsname } from "../constants/style";

export default function ShimmerUi() {
    return (
        <main className='w-[90%] md:w-[96%] mx-auto'>
            <div className='flex flex-col lg:flex-row justify-between items-start mt-24'>
                <button className={`${top_btn_clsname} w-56 py-5`}></button>
                <SearchBar />
            </div>
            <div className='mt-16'>
                <h1 className={`text-xl font-bold mb-4 w-48 px-10 py-4 rounded-md bg-orange-300  `}></h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                    {Array(8).fill(null).map((card, info) =>
                        <div key={info} className="bg-white border-2 p-2 shadow-lg rounded-lg overflow-hidden">
                            <div className="w-full h-44 bg-gray-300 animate-pulse"></div>
                            <div className="p-4">
                                <div className="mb-3">
                                    <div className="h-6 bg-gray-300 animate-pulse rounded w-3/4"></div>
                                    <div className="h-4 bg-gray-300 animate-pulse rounded w-1/2 mt-2"></div>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <div className="w-12 h-6 bg-gray-300 animate-pulse rounded"></div>
                                    <div className="w-12 h-6 bg-gray-300 animate-pulse rounded"></div>
                                    <div className="w-12 h-6 bg-gray-300 animate-pulse rounded"></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}