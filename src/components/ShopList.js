import React from "react";

const ShopList = ({ markers, handleShopSelect, selectedShop }) => {
  const getRandomRating = () => {
    return (Math.random() * 1 + 4).toFixed(1);
  };

  return (
    <div className="w-full sm:w-1/3 lg:w-full p-4 bg-white rounded-lg shadow-lg border-r border-gray-200 overflow-y-auto max-h-[80vh]">
      <h2 className="mb-4 text-2xl font-bold">Daftar Toko:</h2>
      <ul className="space-y-2 text-lg tracking-wider">
        {markers.map((marker) => (
          <li
            key={marker._id}
            onClick={() => handleShopSelect(marker)} // Trigger handleShopSelect with marker
            className={`cursor-pointer p-4 rounded-md hover:bg-blue-100 shadow-md ${
              selectedShop?._id === marker._id ? "bg-blue-200" : ""
            }`}
          >
            <div className="font-bold">{marker.name}</div>
            <div>{marker.address}</div>
            <div className="flex mt-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(getRandomRating())
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049.927l2.573 5.216 5.75.834-4.168 4.062.984 5.739-5.139-2.699-5.139 2.699.984-5.739L.726 6.977l5.75-.834L9.049.927z" />
                </svg>
              ))}
            </div>
            <p className="mt-2 text-gray-600">{getRandomRating()} stars</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopList;
