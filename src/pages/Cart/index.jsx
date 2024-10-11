import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import ButtonLink from "../../ui/buttonLink";
import Item from "../../components/Item";
import { selectCartItems } from "../../redux/slices/cartSlices";
import QuantityCounter from "../../components/QuantityCounter";

function CartItems() {
  const cartItems = useSelector(selectCartItems);

  const [count, setCount] = useState(1);

  const handleCountChange = (newCount) => {
    setCount(newCount);
  };

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
        <div className={styles.cart_list}>
          {cartItems.map((item) => {
            const { id, title, image, price, discont_price } = item;

            return (
              <div key={id} className={styles.cart_item}>
                <div>
                  <img
                    src={`http://localhost:3333${image}`}
                    alt={title}
                    className={styles.cart_image}
                  />
                </div>

                <div className={styles.cart_details}>
                  <div>
                    <h4 className={styles.cart_title}>{title}</h4>
                  </div>
                  <div className={styles.cart_price}>
                    <QuantityCounter onCountChange={handleCountChange} />
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
      )}
    </section>
  );
}

export default CartItems;
