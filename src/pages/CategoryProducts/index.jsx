import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Buttons from "../../components/Buttons";
import Filter from "../../ui/filter";

function CategoryProducts() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3333/products/all");
        setItems(response.data.slice(0, 8));
        console.log("Fetched products:", response.data); // Verificăm produsele primite
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section className={styles.categories_content}>
      <Buttons
        buttons={[
          { link: "/", text: "Main Home" },
          { link: "/categories", text: "Categories" },
          { link: "/categories/products", text: "Dry & Wet Food" },
        ]}
      />
      <h2 className={styles.categories_title}>Dry & Wet Food</h2>

      <Filter />

      <ul className={styles.categories_list}>
        {items.map(({ id, image, title, discont_price, price }) => {
          const discountPercentage =
            discont_price != null && price
              ? Math.round(((price - discont_price) / price) * 100)
              : 0;

          return (
            <li key={id} className={styles.category_item}>
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
              </div>
              <h4 className={styles.category_title}>{title}</h4>

              <div className={styles.price_container}>
                <p className={styles.price}>${price}</p>
                {discont_price != null && (
                  <p className={styles.discount_price}>${discont_price}</p>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default CategoryProducts;
