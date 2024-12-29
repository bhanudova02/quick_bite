import { FaStar } from 'react-icons/fa'
import './App.css'
import { RestaurantCard } from './components/RestaurantCard'
import { SearchBar } from './components/SearchBar'
// import { restaurandData } from './constants/api'
function App() {
  const listOfRestaurant = [
    {
      "info": {
        "id": "1003414",
        "name": "Pizza Hut",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/dc74a4b7-8d63-4eb7-91c9-048973c2cc99_1003414.jpg",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 3.5,
        "sla": {
          "deliveryTime": 54,
          "lastMileTravel": 12.8,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "12.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
      }
    },
    {
      "info": {
        "id": "1003416",
        "name": "Sanju Ka Dhaba",
        "cloudinaryImageId": "hjao7sorzggaeqito6au",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "North Indian",
          "South Indian",
          "Chinese"
        ],
        "avgRating": 4.5,
        "sla": {
          "deliveryTime": 52,
          "lastMileTravel": 14.9,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "14.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
      }
    }
  ]
  return (
    <main className='w-[90%] md:w-[96%] mx-auto'>
      <div className='flex flex-col lg:flex-row justify-between items-start mt-24'>
        <button className='bg-green-500 py-2 px-4 text-white rounded-md 
        font-semibold flex mx-auto lg:mx-0 mt-4 lg:mt-0 items-center gap-1 hover:bg-orange-500 transition-all 
        duration-300 ease-in-out hover:scale-105 order-last lg:order-first' onClick={() => {
            console.log('Button Clicked')
          }}>
          Top Rerated Restaruant <span><FaStar /></span>
        </button>
        <SearchBar />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-[90%] md:w-full mx-auto'>
        {listOfRestaurant.map(restInfo =>
          <RestaurantCard key={restInfo.info.id} restData={restInfo} />
        )}
      </div>
    </main>
  )
}

export default App
