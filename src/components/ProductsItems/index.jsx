import { Link } from "react-router-dom";
import AddToCartButton from "../../ui/addToCardButton";
import styles from "./styles.module.css";

const ProductsItems = ({
  id,
  title,
  image,
  price,
  discont_price,
  onHover,
  onUnhover,
  hoveredItemId,
  addedItems,
  handleAddToCart,
}) => {
  const discountPercentage =
    discont_price != null && price > 0
      ? Math.round(((price - discont_price) / price) * 100)
      : 0;

  return (
    <li
      key={id}
      className={styles.category_item}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={onUnhover}
    >
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
        {hoveredItemId === id && (
          <AddToCartButton
            name={addedItems[id] ? "Added" : "Add to cart"}
            onClick={() =>
              handleAddToCart(id, image, title, discont_price, price)
            }
            className={`${styles.button_add_to_cart} ${
              addedItems[id] ? styles.added_button : ""
            }`}
            style={{
              position: "absolute",
              bottom: "16px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        )}
      </div>
      <Link to={`/product/${id}`} className={styles.category_link}>
        <h4 className={styles.category_title}>{title}</h4>
        <div className={styles.price_container}>
          <p className={styles.price}>${price}</p>
          {discont_price != null && (
            <p className={styles.discount_price}>${discont_price}</p>
          )}
        </div>
      </Link>
    </li>
  );
};

export default ProductsItems;
