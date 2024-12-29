import { FaStar } from 'react-icons/fa'
import './App.css'
import { RestaurantCard } from './components/RestaurantCard'
import { SearchBar } from './components/SearchBar'
import { useState } from "react"
import { restaurandData } from './constants/api'
function App() {
  const [listOfRestaurant, setListOfRestaurant] = useState(restaurandData);
  const [cardHeading, setCardHeading] = useState({title:'Order Food Online',clsColor:'text-black bg-orange-100 '})
  return (
    <main className='w-[90%] md:w-[96%] mx-auto'>
      <div className='flex flex-col lg:flex-row justify-between items-start mt-24'>
        <button className='bg-orange-500 py-2 px-4 text-white rounded-md 
        font-semibold flex mx-auto lg:mx-0 mt-4 lg:mt-0 items-center gap-1 hover:bg-orange-500 transition-all 
        duration-300 ease-in-out hover:scale-105 order-last lg:order-first' onClick={() => {
            setListOfRestaurant(listOfRestaurant.filter(res => res.info.avgRating > 4));
            setCardHeading({title:'Top Rated Restaurants Foods',clsColor:'text-white bg-green-500'})
          }}>
          Top Rerated Restaruant <span><FaStar /></span>
        </button>
        <SearchBar />
      </div>
      <div className='mt-16'>
        <h1 className={`text-xl font-bold mb-4 w-fit px-4 py-1 rounded-md ${cardHeading.clsColor}`}>{cardHeading.title}</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
          {listOfRestaurant.map(restInfo =>
            <RestaurantCard key={restInfo.info.id} restData={restInfo} />
          )}
        </div>
      </div>
    </main>
  )
}

export default App
