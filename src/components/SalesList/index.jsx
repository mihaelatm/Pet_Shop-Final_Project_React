import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Импортируем Link
import axios from "axios";
import styles from "./styles.module.css";
import Item from "../Item";

function SalesList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3333/products/all");
        setItems(response.data);
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

  const filteredItems = items.filter((item) =>
    [9, 12, 15, 16].includes(item.id)
  );

  return (
    <>
      <Item title="Sales" name="All Sales" link="/sales" />
      <section className={styles.categories_content}>
        <ul className={styles.categories_list}>
          {filteredItems.map(({ id, image, title, discont_price, price }) => {
            const discountPercentage =
              price && discont_price
                ? Math.round(((price - discont_price) / price) * 100)
                : 0;

            return (
              <li key={id} className={styles.category_item}>
                <Link to="/discounts" className={styles.category_link}>
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
                    <h3 className={styles.discount_price}>${discont_price}</h3>
                    <p className={styles.price}>${price}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default SalesList;
