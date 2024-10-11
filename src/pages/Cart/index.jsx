// components/Cart.js
import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/slices/cartSlices"; // Importul selectorului

function Cart() {
  const cartItems = useSelector(selectCartItems); // Obținem produsele din coș

  return (
    <section>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
              <p>Price: ${item.price}</p>
              <p>Discounted Price: ${item.discont_price}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Cart;
