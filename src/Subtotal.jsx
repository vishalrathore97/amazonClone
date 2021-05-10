import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";

function Subtotal() {
  const [{ basket }] = useStateValue();
  const length = basket.reduce((a, b) => {
    return a + b.count;
  }, 0);
  const getBasketTotal = (basket) => {
    return basket.reduce((a, b) => {
      return a + b.count * b.price;
    }, 0);
  };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({length} items) : <strong>{value}</strong>{" "}
            </p>
            <small className="subtotal__gifts">
              <input type="checkbox" /> This order contains gift card.
            </small>
          </>
        )}
        value={getBasketTotal(basket)}
        decimalScale={2}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      ></CurrencyFormat>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
