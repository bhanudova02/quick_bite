import { FaStar } from 'react-icons/fa'
import { RestaurantCard } from './RestaurantCard';
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react"
import { top_btn_clsname } from '../constants/style';
import ShimmerUi from './ShimmerUI';
function Home() {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterRestaurnt, setfilterRestaurnt] = useState([]);
  const [cardHeading, setCardHeading] = useState(
    { title: 'Online Food', clsColor: 'text-black bg-orange-100 ' }
  );

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4346845&lng=78.4416225&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json()
    var resData = json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setListOfRestaurant(resData);
    setfilterRestaurnt(resData)
  }
  const [searchText, setSearchText] = useState("");


  return listOfRestaurant.length == 0 ? <ShimmerUi /> : (
    <main>
      <div className='flex flex-col lg:flex-row justify-between items-start'>
        <button className={top_btn_clsname} onClick={() => {
          setListOfRestaurant(filterRestaurnt.filter((res) => res.info.avgRating >= 4.3))
          setCardHeading({ title: '4.3 Top Ratings Foods', clsColor: 'text-white bg-green-500' })
        }}>
          Top Rerated Restaruant <span><FaStar /></span>
        </button>
        <div className='w-full lg:w-fit'>
          <div className="flex flex-row justify-center gap-2">
            <input type="text"
              value={searchText}
              onChange={(e) => { setSearchText(e.target.value) }}
              className="border-2 border-blue-200 outline-none py-2 focus:border-orange-300 px-4 rounded-lg w-full md:w-[460px]"
              placeholder="Search..."
            />
            <button onClick={() => {
              setListOfRestaurant(
                filterRestaurnt.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
              );
              setCardHeading({ title:`${searchText} Online Food`, clsColor: 'text-white bg-green-500' })

            }} className="bg-orange-500 hover:bg-orange-700 text-white py-3 px-4 rounded-lg" >
              <IoSearch />
            </button>

          </div>
        </div>
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

export default Home
