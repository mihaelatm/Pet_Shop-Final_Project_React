import { Input } from "antd";
import styles from "./styles.module.css";

function FilterInput({ priceFrom, priceTo, setPriceFrom, setPriceTo }) {
  return (
    <>
      <Input
        placeholder="from"
        value={priceFrom}
        onChange={(e) => setPriceFrom(e.target.value)}
        className={styles.input}
      />
      <Input
        placeholder="to"
        value={priceTo}
        onChange={(e) => setPriceTo(e.target.value)}
        className={styles.input}
      />
    </>
  );
}

export default FilterInput;
