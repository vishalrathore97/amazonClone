import React from "react";
import { useStateValue } from "./StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ title, price, id, image, rating, count }) {
  const [{ basket }, dispatch] = useStateValue();
  let item = basket.find((item) => id === item.id);
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item,
    });
  };
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item,
    });
  };
  return (
    <div className="checkoutproduct">
      <img src={image} alt={id} />
      <div className="checkoutproduct__info">
        <p className="checkoutproduct__title">{title}</p>
        <small>$</small>
        <strong>{price}</strong>
        <div className="checkoutproduct__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
        <div>
          <button
            className="checkoutproduct__removeBtn"
            onClick={removeFromBasket}
          >
            -
          </button>
          {count}
          <button className="checkoutproduct__addBtn" onClick={addToBasket}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
