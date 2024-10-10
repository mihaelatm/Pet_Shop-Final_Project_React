import React from "react";
import styles from "./styles.module.css";

const ProductList = ({ items }) => {
  return (
    <ul className={styles.categories_list}>
      {items.map(({ id, image, title, discont_price, price }) => {
        const discountPercentage =
          discont_price != null && price
            ? Math.round(((price - discont_price) / price) * 100)
            : 0;

        return (
          <li key={id} className={styles.category_item}>
            <div className={styles.image_container}>
              <img
                src={`http://localhost:3333${image}`}
                alt={title}
                className={styles.category_image}
              />
              {discountPercentage > 0 && (
                <div className={styles.discount_percentage}>
                  -{discountPercentage}%
                </div>
              )}
            </div>
            <h4 className={styles.category_title}>{title}</h4>

            <div className={styles.price_container}>
              <p className={styles.price}>${price}</p>
              {discont_price != null && (
                <p className={styles.discount_price}>${discont_price}</p>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductList;
