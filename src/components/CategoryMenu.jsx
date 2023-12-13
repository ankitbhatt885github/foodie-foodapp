import React from 'react'
import { useEffect, useState } from "react";
import FoodData from '../data/FoodData';
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from '../redux/slices/CategorySlice';
setCategory


const CategoryMenu = () => {


  const [categories, setCategories] = useState([]);

  //take out categories from food data
  const listUniqueCategories = () => {

    //to have unique categories we need a Set because it only holds unique elements
    const uniqueCategories = [
      //spread operator to spread set elements as array elements in array
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  }

  useEffect(() => {
    listUniqueCategories();
  }, []);


  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold">Find the best food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button onClick={() => dispatch(setCategory("All"))}
 className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
  selectedCategory === "All" && "bg-green-500 text-white"
}`}
        >
          All
        </button>

        {categories.map((category, index) => {
          return <button onClick={() => {
            dispatch(setCategory(category))
          }} key={index}

          //if a particular category is selected lock its background color
          className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
            selectedCategory === category && "bg-green-500 text-white"
          } `}
          >
            {category}
          </button>
        })}




      </div>
    </div>
  )
}

export default CategoryMenu