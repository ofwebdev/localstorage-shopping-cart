import React from "react";

import "./cart.css";

function Cart({ cart }) {
  //   console.log(props);
  //   const cart = props.cart;
  //   const { cart } = props;

  let total = 0;
  let totalShipping = 0;

  for (const product of cart) {
    total = total + product.price;
    totalShipping = totalShipping + product.shipping;
  }

  const tax = (total * 7) / 100;

  const grandTotal = total + tax + totalShipping;

  return (
    <div className="sticky-cart">
      <h4>Order history</h4>
      <p>Selected Item : {cart.length} </p>
      <p>Total Price : ${total.toFixed(2)}</p>
      <p>Total shipping charge: ${totalShipping}</p>
      <p>Tax : ${tax.toFixed(2)}</p>
      <h3>Grand Total : ${grandTotal.toFixed(2)} </h3>

      {/* <div className="btn-group"> */}
      <button>Clear card</button>
      <button>Review Order</button>
      {/* </div> */}
    </div>
  );
}

export default Cart;
