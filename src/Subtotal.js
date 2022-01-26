import React from 'react';
import { getCartTotal } from './reducer';
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";

function Subtotal() {
    const [{cart}, dispatch] = useStateValue();
    
    return (
        <div className="subtotal">
            <CurrencyFormat
              renderText = { (value) => (
               <>

                    <p>Subtotal ({cart.length} items):<strong>{value}</strong></p>
                       <small className="subtotal--gift">
                           <input type="checkbox" /> This order contains gift
              </small>
           </>
              )}
              decimalScale = {2}
              value = {getCartTotal(cart)}
              displayType = {"text"}
              thousandSeparator = {true}
              prefix = {"₹"}
              />   
            <button>Proceeed to Buy</button>
        </div>
    );
}

export default Subtotal;
