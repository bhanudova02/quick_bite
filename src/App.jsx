import './App.css'
import { RestaurantCard } from './components/RestaurantCard'
import { SearchBar } from './components/SearchBar'
import { restaurandData } from './constants/api'
function App() {
  return (
    <main>
      <SearchBar />
      <div className='grid grid-cols-4 w-[96%] mx-auto'>
        {restaurandData.map(restInfo=>
          <RestaurantCard key={restInfo.info.id} restData={restInfo} />
        )}
      </div>
    </main>
  )
}

export default App
