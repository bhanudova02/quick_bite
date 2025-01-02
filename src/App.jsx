import { FaStar } from 'react-icons/fa'
import './App.css'
import { RestaurantCard } from './components/RestaurantCard'
import { SearchBar } from './components/SearchBar'
import { useEffect, useState } from "react"
import { restaurandData } from './constants/api'
import { top_btn_clsname } from './constants/style'

function App() {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [cardHeading, setCardHeading] = useState(
    { title: 'Order Food Online', clsColor: 'text-black bg-orange-100 ' }
  );

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4346845&lng=78.4416225&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json()
    var resData = json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setListOfRestaurant(resData);
  }

  return (
    <main className='w-[90%] md:w-[96%] mx-auto'>
      <div className='flex flex-col lg:flex-row justify-between items-start mt-24'>
        <button className={top_btn_clsname} onClick={() => {
            setListOfRestaurant(listOfRestaurant.filter(res => res.info.avgRating > 4));
            setCardHeading({ title: 'Top Rated Restaurants Foods', clsColor: 'text-white bg-green-500' })
          }}>
          Top Rerated Restaruant <span><FaStar /></span>
        </button>
        <SearchBar />
      </div>
      <div className='mt-16'>
        <h1 className={`text-xl font-bold mb-4 w-fit px-4 py-1 rounded-md ${cardHeading.clsColor}`}>{cardHeading.title}</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10'>
          {listOfRestaurant.map(restInfo =>
            <RestaurantCard key={restInfo.info.id} restData={restInfo} />
          )}
        </div>
      </div>
    </main>
  )
}

export default App
