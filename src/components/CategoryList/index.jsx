import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Item from "../Item";

function CategoryList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3333/categories/all"
        );
        setItems(response.data.slice(0, 4));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Item
        title="Categories"
        name="All Categories"
        link="/categories"
        style={{ width: "100%", marginLeft: "32px" }}
      />
      <section className={styles.categories_content}>
        <ul className={styles.categories_list}>
          {items.map(({ id, image, title }) => (
            <li key={id} className={styles.category_item}>
              <Link to="/categories" className={styles.category_link}>
                <img
                  src={`http://localhost:3333${image}`}
                  alt={title}
                  className={styles.category_image}
                />
                <h4 className={styles.category_title}>{title}</h4>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default CategoryList;
