import React, { useState } from "react";

const categories = () => {
  //const [categories, setCategories] = useState();
  const handleCategory = (category) => {
    console.log(category);
  };
  const categories = ["Breakfast", "Brunch", "Lunch", "Snacks", "Dinner"];
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
          {/* <li className="hover:text-white duration-200 cursor-pointer">
            Breakfast
          </li>
          <li className="hover:text-white duration-200 cursor-pointer">
            Brunch
          </li>
          <li className="hover:text-white duration-200 cursor-pointer">
            Lunch
          </li>
          <li className="hover:text-white duration-200 cursor-pointer">
            Snacks
          </li>
          <li className="hover:text-white duration-200 cursor-pointer">
            Dinner
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default categories;
