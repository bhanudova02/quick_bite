import { useState } from 'react';
import { IoSearch } from "react-icons/io5";

export function SearchBar(data) {
    const [searchText,setSearchText] = useState("");
    
    return (
        <div className='w-full lg:w-fit'>
            <div className="flex flex-row justify-center gap-2">
                <input type="text" 
                    value={searchText}
                    onChange={(e)=>{setSearchText(e.target.value)}}
                    className="border-2 border-blue-200 outline-none py-2 focus:border-orange-300 px-4 rounded-lg w-full md:w-[460px]" 
                    placeholder="Search..."
                />
                <button onClick={()=>{}} className="bg-orange-500 hover:bg-orange-700 text-white py-3 px-4 rounded-lg" >
                    <IoSearch />
                </button>
               
            </div>
        </div>
    )
}