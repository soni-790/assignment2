import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MenuCards = () => {
  const [addedItems, setAddedItems] = useState([]);

  const topItems = [
    {
      id: 1,
      title: 'Italian Mozzarella Bowl',
      ingredients: 'Cherry tomatoes, basil, mozzarella bits, house sauce',
      price: 13.09
    },
    {
      id: 2,
      title: 'Spicy Basil Shrimp',
      ingredients: 'Roasted sweet shrimp, hot honey sauce, fresh herbs',
      price: 15.99
    },
    {
      id: 3,
      title: 'Rosa',
      ingredients: 'Roasted herbs, cajun spices, citrus glaze',
      price: 12.49
    }
  ];

  const featuredItems = [
    { id: 4, title: 'Crispy Salmon Bowl', price: 53.09 },
    { id: 5, title: 'Steak Bowl', price: 53.09 },
    { id: 6, title: 'Vegan Protein Bowl', price: 53.09 },
    { id: 7, title: 'Avocado Egg Bowl', price: 53.09 }
  ];

  const handleAddItem = (item) => {
    if (!addedItems.includes(item.id)) {
      setAddedItems([...addedItems, item.id]);
      toast.success(`${item.title} added to cart!`);
    } else {
      setAddedItems(addedItems.filter(id => id !== item.id));
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Specialties</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {topItems.map(item => (
          <div key={item.id} className="border rounded-lg p-4 shadow-sm">
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.ingredients}</p>
            <div className="flex justify-between items-center">
              <span className="font-bold">${item.price}</span>
              <button
                onClick={() => handleAddItem(item)}
                className={`px-4 py-2 rounded-lg ${
                  addedItems.includes(item.id)
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {addedItems.includes(item.id) ? 'Added' : 'Add'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">Featured Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {featuredItems.map(item => (
          <div key={item.id} className="border rounded-lg p-4 shadow-sm">
            <h3 className="font-bold text-lg mb-4">{item.title}</h3>
            <div className="flex justify-between items-center">
              <span className="font-bold">${item.price}</span>
              <button
                onClick={() => handleAddItem(item)}
                className={`px-4 py-2 rounded-lg ${
                  addedItems.includes(item.id)
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {addedItems.includes(item.id) ? 'Added' : 'Add'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default MenuCards;