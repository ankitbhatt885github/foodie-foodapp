import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData'
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from 'react-redux';


const FoodItems = () => {

  const category = useSelector((state) => state.category.category);
  //grab what is to be searched
  const search = useSelector((state) => state.search.search);
  //toast message
  const handleToast = (name) => toast.success(`Added ${name}  `);
  return (
    <>
     <Toaster position="top-center" reverseOrder={false} />
    <div  className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        
        
    {FoodData.filter((food) => {
      //If category is "All" it returns all elements in array
          if (category === "All") {
            //return all items that match with search
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return (
              category === food.category &&
              food.name.toLowerCase().includes(search.toLowerCase())
            );
            
          }
        }).map((food) => (
          <FoodCard
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            rating={food.rating}
            img={food.img}
            handleToast={handleToast}
          />
        ))}
    </div>
    </>
    
  )
}

export default FoodItems