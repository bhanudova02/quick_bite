import { FaStar } from 'react-icons/fa';

export function RestaurantCard(props) {
  const { restData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = restData?.info;

  return (
    <div className="p-4">
      <div className="bg-white border-2 p-2 shadow-lg rounded-lg overflow-hidden">
        <img
          alt={`Logo of ${name}`}
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          className="w-full h-44 object-cover"
        />
        <div className="p-4">
          <div className="mb-3">
            <h6 className="font-bold text-lg text-gray-800 truncate">{name}</h6>
            <p className="text-sm text-gray-500 truncate">{cuisines.toString()}</p>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="bg-blue-500 text-white px-2 py-1 rounded-md flex items-center">
              <span>{avgRating}</span>
              <FaStar className="w-4 h-4 ml-1" />
            </span>
            <span className="bg-green-500 text-white px-2 py-1 rounded-md">
              {costForTwo}
            </span>
            <span className="bg-red-500 text-white px-2 py-1 rounded-md">
              {sla.deliveryTime} mins
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
