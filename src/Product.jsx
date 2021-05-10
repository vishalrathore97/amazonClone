import React from "react";
import { useStateValue } from "./StateProvider";
import "./Product.css";

function Product({ title, price, id, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    let item = basket.find((item) => item.id === id);
    if (!item)
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id,
          title,
          image,
          price,
          rating,
          count: 1,
        },
      });
    else
      dispatch({
        type: "ADD_TO_BASKET",
        item,
      });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <small>$</small>
        <strong>{price}</strong>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt={id} />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
