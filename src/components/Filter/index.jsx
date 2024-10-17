import React, { useState, useEffect, useCallback } from "react";
import styles from "./styles.module.css";
import FilterInput from "../../ui/filterInput";
import Sorter from "../../ui/sorter";
import FilterCheckbox from "../../ui/filterCheckbox";

const Filter = ({ items, setFilteredItems }) => {
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [discountedItems, setDiscountedItems] = useState(false);
  const [sortOrder, setSortOrder] = useState("default");

  const handleFilterChange = useCallback(() => {
    let filtered = items.filter((item) => {
      const withinPriceRange =
        (!priceFrom || item.price >= priceFrom) &&
        (!priceTo || item.price <= priceTo);
      const hasDiscount = discountedItems ? item.discont_price != null : true;
      return withinPriceRange && hasDiscount;
    });

    switch (sortOrder) {
      case "priceAsc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "discount":
        filtered.sort((a, b) => a.title.localeCompare(b.title)); // Sortare A-Z
        break;
      case "titleDesc":
        filtered.sort((a, b) => b.title.localeCompare(a.title)); // Sortare Z-A
        break;
      default:
        break;
    }

    setFilteredItems(filtered);
  }, [items, priceFrom, priceTo, discountedItems, sortOrder, setFilteredItems]);

  useEffect(() => {
    handleFilterChange();
  }, [handleFilterChange]);

  return (
    <div className={styles.filter_container}>
      <div className={styles.filter}>
        <span>Price</span>
        <FilterInput
          priceFrom={priceFrom}
          priceTo={priceTo}
          setPriceFrom={setPriceFrom}
          setPriceTo={setPriceTo}
        />
      </div>

      <div className={styles.filter}>
        <span>Discounted items</span>
        <FilterCheckbox
          discountedItems={discountedItems}
          setDiscountedItems={setDiscountedItems}
        />
      </div>

      <div className={styles.filter}>
        <span>Sorted:</span>
        <Sorter sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>
    </div>
  );
};

export default Filter;
