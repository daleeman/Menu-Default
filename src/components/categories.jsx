import React, { useContext, useState } from "react";
import { useDefaultContext } from "../context/context";

const categories = ({ setSelectedCategory }) => {
  const handleCategory = (category) => {
    setSelectedCategory((prevState) => ({
      ...prevState,
      selectedCategory: category,
    }));
  };
  const { categories } = useDefaultContext();
  // const categories = ["Breakfast", "Brunch", "Lunch", "Snacks", "Dinner"];//hardcoded
  //const categories = useCategoriesContext(); //using usecontext to consume categories from App to categories which is fetched using API later on
  return (
    <div className="flex items-center justify-end h-screen p-6">
      <div>
        <ul className="space-y-2 font-semibold">
          {categories.map((category) => (
            <li
              onClick={() => handleCategory(category)}
              key={category}
              className="hover:text-white duration-200 cursor-pointer"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default categories;
