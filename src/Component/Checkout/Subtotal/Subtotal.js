import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from "../../../StateProvider";
import { calculateTotal } from "../../../Reducer";
import { useHistory } from "react-router-dom";
function Subtotal() {
  const history = useHistory();
  const [{ basket }] = useStateValue();

  //my implementation of calculate value
  //const calculateTotal = (basket) => {
  //  return basket.reduce((price, item) => item.price + price, 0);
  //}; put this in the price place calculateTotal(basket)

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              SubTotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={calculateTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button onClick={e => history.push('/payment')}>Procced to Checkout</button>
    </div>
  );
}

export default Subtotal;
