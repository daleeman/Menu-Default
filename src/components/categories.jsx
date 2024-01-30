import React from "react";

const categories = () => {
  return (
    <div className="flex items-center justify-end h-screen pr-6">
      <div>
        <ul className="space-y-2 font-semibold">
          <li className="hover:text-white duration-200">Breakfast</li>
          <li className="hover:text-white duration-200">Brunch</li>
          <li className="hover:text-white duration-200">Lunch</li>
          <li className="hover:text-white duration-200">Snacks</li>
          <li className="hover:text-white duration-200">Dinner</li>
        </ul>
      </div>
    </div>
  );
};

export default categories;
