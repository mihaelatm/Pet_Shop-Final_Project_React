import React from "react";
import styles from "./styles.module.css";

const AddToCartButton = ({ onClick, style }) => {
  return (
    <button onClick={onClick} className={styles.action_button} style={style}>
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
