import React from "react";

const CartList = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>S.N.</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Poached Eggs</td>
            <td>1</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartList;
