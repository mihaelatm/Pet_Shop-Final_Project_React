import React, { useState } from "react";
import styles from "./styles.module.css";
import Filter from "../../components/Filter";
import LinksBtn from "../../ui/LinksBtn";
import useFetchData from "../../utils/useFetchData";
import { Link } from "react-router-dom";
import AddToCartButton from "../../ui/addToCardButton";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlices";

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

    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [id]: false }));
    }, 1000);
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
        {limitedItems.map((item) => {
          const { id, title, image, price, discont_price } = item;

          const discountPercentage =
            discont_price != null && price > 0
              ? Math.round(((price - discont_price) / price) * 100)
              : 0;

          return (
            <li
              key={id}
              className={styles.category_item}
              onMouseEnter={() => setHoveredItemId(id)}
              onMouseLeave={() => setHoveredItemId(null)}
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
                    onClick={() =>
                      handleAddToCart(id, image, title, discont_price, price)
                    }
                    name={addedItems[id] ? "Added" : "Add to cart"}
                    className={addedItems[id] ? styles.added_button : ""}
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
        })}
      </ul>
    </section>
  );
}

export default CategoryProducts;
