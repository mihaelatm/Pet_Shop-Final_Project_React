import { useState } from "react";
import styles from "./styles.module.css";

function ProductDescription({ description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const shortDescription = description.slice(0, 750);
  const fullDescription = description;

  return (
    <div className={styles.product_description}>
      <span className={styles.description_label}>Description</span>
      <p className={styles.description_text}>
        {isExpanded ? fullDescription : shortDescription + "..."}
      </p>
      <button onClick={toggleReadMore} className={styles.read_more_button}>
        {isExpanded ? "Show less" : "Read more"}
      </button>
    </div>
  );
}

export default ProductDescription;
