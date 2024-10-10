import React, { useState, useEffect } from "react";
import { Input, Checkbox, Select } from "antd";
import styles from "./styles.module.css";

const { Option } = Select;

function Filter() {
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [discountedItems, setDiscountedItems] = useState(false);
  const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
    applyFilters();
  }, [priceFrom, priceTo, discountedItems, sortOrder]);

  const applyFilters = () => {
    console.log({
      priceFrom,
      priceTo,
      discountedItems,
      sortOrder,
    });
  };

  return (
    <div className={styles.filter_container}>
      <div className={styles.filter}>
        <span>Price</span>
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
      </div>

      <div className={styles.filter}>
        <span>Discounted items</span>
        <Checkbox
          checked={discountedItems}
          onChange={(e) => setDiscountedItems(e.target.checked)}
          style={{ transform: "scale(1.5)" }}
        />
      </div>

      <div className={styles.filter}>
        <span>Sorted:</span>
        <Select
          value={sortOrder}
          onChange={setSortOrder}
          className={styles.select}
        >
          <Option value="default">by default</Option>
          <Option value="priceAsc">Price low to high</Option>
          <Option value="priceDesc">Price high to low</Option>
          <Option value="discount">Discount</Option>
        </Select>
      </div>
    </div>
  );
}

export default Filter;
