import { useEffect, useState } from "react"
import { useParams } from "react-router"
import ShimmerUICards from "./ShimmerUICards";
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import Marquee from "react-fast-marquee";
const RestaurantMenu = () => {
    const param = useParams();
    const [restData, setRestData] = useState(null)

    useEffect(() => {
        fetchMenu()
    }, []);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=414835&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json();
        setRestData(json)
    }

    if (restData == null) return <ShimmerUICards />

    const { name, cuisines, costForTwoMessage, avgRating, totalRatingsString, areaName, sla } = restData?.data?.cards[2]?.card?.card?.info
    const { itemCards } = restData?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card

    const { offers } = restData?.data?.cards[3].card.card.gridElements.infoWithStyle


    console.log(restData?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info)

    return (
        <div className="max-w-[840px] mx-auto">
            <h2 className="font-bold text-2xl mb-4">{name}</h2>
            <div className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 p-6 rounded-3xl">
                <div className="bg-white p-5 rounded-xl border">
                    <div className="flex items-center gap-2">
                        <FaStar className="text-white bg-green-600 p-1 rounded-full text-xl" />
                        <h5 className="font-semibold">{avgRating} {totalRatingsString}</h5>
                        <h5 className="flex items-center font-semibold"><GoDotFill className="text-gray-400" />{costForTwoMessage}</h5>
                    </div>
                    <div className="text-orange-600 font-bold text-sm mt-2">{cuisines.join(",")}</div>
                    <div className="mt-3 space-y-1">
                        <div className="text-sm flex gap-3 font-semibold items-center">
                            <h6>Outlet</h6> <span className="text-gray-500">{areaName}</span>
                        </div>
                        <div className="font-semibold text-sm">{sla.slaString}</div>
                    </div>
                </div>
            </div>

            <div className="mt-12">
                <h2 className="font-bold text-xl mb-4">Deals for you</h2>
                <div className="mt-4">
                    <div className="marquee-container">
                        <Marquee speed={100}>
                            {offers.map(deals =>
                                <div key={deals.info.header} className="ms-6 flex items-center justify-start ps-6 gap-3 border-2 w-72 py-2.5 rounded-2xl">
                                    <FaStar className="text-3xl text-orange-600" />
                                    <div>
                                        <h4 className="text-lg font-bold">{deals.info.header}</h4>
                                        <p className="text-sm text-gray-600 font-semibold">{deals.info.description}</p>
                                    </div>
                                </div>
                            )}
                        </Marquee>

                    </div>

                </div>
            </div>

            <div className="mt-16 mb-20">
                <h2 className="font-bold text-xl mb-4">Recommended({itemCards.length})</h2>
                <div className="space-y-14">
                    {itemCards.map(item =>
                        <div className="border-t ">
                            <div className="pt-5">
                                <GoDotFill className="text-green-800 text-xl border-2 mb-2 border-green-600 rounded-md" />
                                <div className="flex gap-6 ">
                                    <div className="w-[76%] space-y-1.5 ">
                                        <div className="text-base font-extrabold">{item.card.info.name}</div>
                                        <div className="text-base font-semibold">&#8377;{item.card.info.defaultPrice}</div>
                                        <div className="flex items-center gap-1">
                                            <FaStar className="text-green-600" />
                                            <span className="text-gray-800 font-semibold text-sm">4.5</span>
                                            <span className="text-xs font-semibold text-gray-600">(19)</span>
                                        </div>
                                        <p className="text-sm font-medium text-gray-600 w-[80%] leading-6">
                                            {item.card.info.description}
                                        </p>
                                    </div>

                                    <div className="w-[24%] overflow-hidden">
                                        <div className="h-full w-full overflow-hidden flex items-center justify-center relative">
                                            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
                                                width="100%" className="h-[8rem] object-cover rounded-xl" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>

            {/* <h3>{JSON.stringify(restData?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card)}</h3> */}
        </div>
    )
}

export default RestaurantMenu