import React, { useEffect, useState } from "react";

const CartList = ({ cartList }) => {
  const [priceSum, setPriceSum] = useState(0);
  useEffect(() => {
    if (cartList.length > 0) {
      setPriceSum(cartList.reduce((sum, item) => sum + item.price, priceSum));
    }
    console.log(priceSum);
  }, [cartList]);
  if (cartList === undefined || cartList.length === 0) {
    return (
      <div className="flex p-6 h-screen items-center justify-center">
        <h1 className="text-2xl font-bold">No items in Cart!</h1>
      </div>
    );
  }
  return (
    <div className="overflow-x-auto h-screen">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">S.N</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Quantity</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {cartList.map((food) => (
            <tr key={food.id}>
              <td className="py-2 px-4 border-b">{food.id}</td>
              <td className="py-2 px-4 border-b">{food.foodTitle}</td>
              <td className="py-2 px-4 border-b">1</td>
              <td className="py-2 px-4 border-b">Rs {food.price}</td>
              <td className="py-2 px-4 border-b text-center">
                <button className="text-red-500 hover:text-red-700 ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-trash-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className="text-center">
          <tr>
            <td className="py-2 px-4 border-b"></td>
            <td className="py-2 px-4 border-b"></td>
            <td className="py-2 px-4 border-b font-bold">Total</td>
            <td className="py-2 px-4 border-b font-bold">Rs {priceSum}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CartList;
