import React, { useState } from "react";
import styles from "./styles.module.css";
import Filter from "../../components/Filter";
import LinksBtn from "../../ui/LinksBtn";
import useFetchData from "../../utils/useFetchData";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlices";
import ProductsItems from "../../components/ProductsItems";

function CategoryProducts() {
  const [filteredItems, setFilteredItems] = useState([]);
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const [addedItems, setAddedItems] = useState({});
  const dispatch = useDispatch();

  const {
    data: items,
    loading,
    error,
  } = useFetchData("http://localhost:3333/products/all");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const limitedItems = (filteredItems.length > 0 ? filteredItems : items).slice(
    0,
    8
  );

  const handleAddToCart = (id, image, title, discont_price, price) => {
    const product = { id, image, title, discont_price, price };
    dispatch(addToCart(product));
    setAddedItems((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className={styles.categories_content}>
      <LinksBtn
        buttons={[
          { link: "/", text: "Main Page" },
          { link: "/categories", text: "Categories" },
          { link: "/categories/products", text: "Dry & Wet Food" },
        ]}
      />

      <h2 className={styles.categories_title}>Dry & Wet Food</h2>

      <Filter items={items} setFilteredItems={setFilteredItems} />

      <ul className={styles.categories_list}>
        {limitedItems.map((item) => (
          <ProductsItems
            key={item.id}
            {...item}
            onHover={setHoveredItemId}
            onUnhover={() => setHoveredItemId(null)}
            hoveredItemId={hoveredItemId}
            addedItems={addedItems}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </ul>
    </section>
  );
}

export default CategoryProducts;
