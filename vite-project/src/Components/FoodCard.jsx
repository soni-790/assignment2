import React, { useState } from 'react';
import { toast } from 'react-toastify';

const FoodCard = ({ item }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    setIsAdded(true);
    toast.success(`Added ${item.name} to cart!`, {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-gray-700">${item.price.toFixed(2)}</span>
          <button
            onClick={handleAdd}
            className={`px-4 py-2 rounded-md transition-colors ${
              isAdded 
                ? 'bg-green-500 text-white' 
                : 'bg-gray-100 text-gray-800'
            }`}
          >
            {isAdded ? 'Added' : 'Add'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
