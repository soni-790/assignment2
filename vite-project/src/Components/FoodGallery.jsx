import React from 'react';
import FoodCard from './FoodCard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FoodGallery = () => {
  const topSectionItems = [
    {
      id: 1,
      name: "Italian Mozzarella Bowl",
      price: 12.99,
      image: "https://th.bing.com/th/id/OIP.RNU40oIz9jSFEsH1tbbNFwHaE8?rs=1&pid=ImgDetMain"
    },
    {
      id: 2,
      name: "Spicy Basil Shrimp",
      price: 14.99,
      image: "https://c.pxhere.com/photos/89/39/bowl_close_up_cuisine_delicious_dinner_dish_food_food_photography-1517073.jpg!d"
    },
    {
      id: 3,
      name: "Roasted Bowl",
      price: 11.99,
      image: "https://th.bing.com/th/id/OIP.5Qc8JodRbRsKVrOE3mq8fgHaJ4?w=3024&h=4032&rs=1&pid=ImgDetMain"
    }
  ];

  const featuredItems = [
    {
      id: 4,
      name: "Crispy Salmon Bowl",
      price: 15.99,
      image: "https://th.bing.com/th/id/OIP.L3RjAtpA2IBL0GJ1fU5uDQHaHa?w=1200&h=1200&rs=1&pid=ImgDetMain"
    },
    {
      id: 5,
      name: "Steak Bowl",
      price: 17.99,
      image: "https://imgmedia.lbb.in/media/2019/08/5d662c8ea84656a7661be92a_1566977166741.jpg"
    },
    {
      id: 6,
      name: "Vegan Protein Bowl",
      price: 13.99,
      image: "https://th.bing.com/th/id/OIP.yZU1HNFKE6QE4WpLc99Q-wHaHP?w=800&h=782&rs=1&pid=ImgDetMain"
    },
    {
      id: 7,
      name: "Buffalo Chicken Bowl",
      price: 14.99,
      image: "https://th.bing.com/th/id/OIP.sXpcnjcnPamag_vwDNcOCwHaE8?w=1024&h=683&rs=1&pid=ImgDetMain"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
   
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-6">Based on your search</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topSectionItems.map(item => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      </div>

   
      <div>
        <h2 className="text-xl font-semibold mb-6">Featured Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map(item => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default FoodGallery;