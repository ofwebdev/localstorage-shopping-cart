import React from "react";
import "./product.css";

function Product(props) {
  // console.log(props);
  const { img, name, seller, ratings, price } = props.product;
  const handelAddToCard = props.handelAddToCard;

  return (
    <div className="product-view">
      <img className="product-img-control" src={img} alt={`product`} />

      <div>{name.substring(0, 18)}...</div>

      <div>
        <strong>Rating {ratings} Stars</strong>
      </div>
      <div>
        <strong>Price ${price}</strong>
      </div>

      <button onClick={() => handelAddToCard(props.product)}>
        Add to card
      </button>
    </div>
  );
}

export default Product;
