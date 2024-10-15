import styles from "./styles.module.css";

const AddToCartButton = ({ onClick, style, name, className }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.action_button} ${className || ""}`}
      style={style}
    >
      {name}
    </button>
  );
};

export default AddToCartButton;
