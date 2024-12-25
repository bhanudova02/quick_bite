import { useState } from 'react';
import { IoSearch } from "react-icons/io5";

export function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        console.log(searchTerm);
    };

    return (
        <div className="pt-24 pb-10">
            <div className="flex justify-center items-center gap-2">
                <input 
                    type="text" 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    className="border-2 border-blue-200 outline-none py-2 focus:border-orange-300 px-4 rounded-lg w-[460px]" 
                    placeholder="Search..."
                />
                <button 
                    className="bg-orange-500 hover:bg-orange-700 text-white py-3 px-4 rounded-lg" 
                    onClick={handleSearch}
                >
                    <IoSearch />
                </button>
            </div>
        </div>
    )
}