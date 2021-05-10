import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import "./Checkout.css";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          {basket.length === 0 ? (
            <h2 className="checkout__title">Your basket is empty.</h2>
          ) : (
            <div>
              <h2 className="checkout__title">Your shopping Basket</h2>
              {basket.map((item, index) => (
                <CheckoutProduct
                  key={index}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  count={item.count}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="checkout__right">{basket.length > 0 && <Subtotal />}</div>
    </div>
  );
}

export default Checkout;
