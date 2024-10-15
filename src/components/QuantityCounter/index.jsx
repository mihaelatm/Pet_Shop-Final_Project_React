import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const QuantityCounter = ({ value, onCountChange }) => {
  const [count, setCount] = useState(value); // Initializează count cu valoarea primită

  useEffect(() => {
    setCount(value); // Actualizează count dacă valoarea se schimbă din exterior
  }, [value]);

  const incrementCount = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      onCountChange(newCount);
      return newCount;
    });
  };

  const decrementCount = () => {
    setCount((prevCount) => {
      const newCount = prevCount > 1 ? prevCount - 1 : 1;
      onCountChange(newCount);
      return newCount;
    });
  };

  return (
    <div className={styles.counter}>
      <button onClick={decrementCount} className={styles.quantity_button}>
        -
      </button>
      <span className={styles.quantity_count}>{count}</span>
      <button onClick={incrementCount} className={styles.quantity_button}>
        +
      </button>
    </div>
  );
};

export default QuantityCounter;
