import React, { useEffect, useState } from "react";
import "./shop.css";
import Product from "../product/Product";
import Cart from "../cart/Cart";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";

function Shop() {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storeCart = getShoppingCart();
    console.log(storeCart);
  }, []);

  // We just provide this function in props
  // how awesome is it
  // use should grape this function in your component props
  const handelAddToCard = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };

  return (
    <div className="container">
      <div className="product-row">
        <div className="product-grid">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handelAddToCard={handelAddToCard}
            ></Product>
          ))}
        </div>
        <div className="card-details">
          <Cart cart={cart} />
        </div>
      </div>
    </div>
  );
}

export default Shop;
