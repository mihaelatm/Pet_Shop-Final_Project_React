import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import ButtonLink from "../../ui/buttonLink";
import Item from "../../components/Item";
import { removeFromCart, selectCartItems } from "../../redux/slices/cartSlices";
import QuantityCounter from "../../components/QuantityCounter";
import remove_icon from "../../assets/icons/remove_icon.svg";
import CartTotal from "../../components/CartTotal";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const [quantities, setQuantities] = useState({});

  const handleCountChange = (id, newCount) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: newCount,
    }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      delete newQuantities[id];
      return newQuantities;
    });
  };

  const itemCount = cartItems.reduce((total, item) => {
    const quantity = quantities[item.id] || 1;
    return total + quantity;
  }, 0);

  const totalPrice = cartItems.reduce((total, item) => {
    const quantity = quantities[item.id] || 1;
    return total + item.price * quantity;
  }, 0);

  return (
    <section className={styles.cart_content}>
      <Item
        title="Shopping cart"
        name="Back to the store"
        link="/products/all"
        style={{ width: "58rem" }}
      />
      {cartItems.length === 0 ? (
        <div className={styles.cart_empty}>
          <p className={styles.text}>
            Looks like you have no items in your basket currently.{" "}
          </p>
          <ButtonLink
            text="Continue Shopping"
            width="313px"
            to="/products/all"
          />
        </div>
      ) : (
        <div className={styles.cart_wrapper}>
          <div className={styles.cart_list}>
            {cartItems.map((item) => {
              const { id, title, image, price, discont_price } = item;
              const currentQuantity = quantities[id] || 1; // Obține cantitatea curentă

              return (
                <div key={id} className={styles.cart_item}>
                  <img
                    src={`http://localhost:3333${image}`}
                    alt={title}
                    className={styles.cart_image}
                  />
                  <div className={styles.cart_details}>
                    <div className={styles.cart_title_icon}>
                      <h4 className={styles.cart_title}>{title}</h4>
                      <img
                        src={remove_icon}
                        alt="Remove icon"
                        className={styles.remove_icon}
                        onClick={() => handleRemoveItem(id)}
                      />
                    </div>
                    <div className={styles.cart_info}>
                      <QuantityCounter
                        value={currentQuantity} // Aici se trimite cantitatea curentă
                        onCountChange={(newCount) =>
                          handleCountChange(id, newCount)
                        }
                      />
                      <div className={styles.price_container}>
                        <p className={styles.price}>{price}$</p>
                        {discont_price != null && (
                          <p className={styles.discount_price}>
                            {discont_price}$
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.cart_total}>
            <CartTotal itemCount={itemCount} totalPrice={totalPrice} />
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;
