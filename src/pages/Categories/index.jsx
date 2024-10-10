import { useEffect, useState } from "react";
import Buttons from "../../components/Buttons";
import axios from "axios";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function Categories() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3333/categories/all"
        );
        setItems(response.data);
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
      <Buttons
        buttons={[
          { link: "/", text: "Main Home" },
          { link: "/categories", text: "Categories" },
        ]}
      />
      <section className={styles.categories_content}>
        <h2 className={styles.categories_title}>Categories</h2>
        <ul className={styles.categories_list}>
          {items.map(({ id, image, title }) => (
            <li key={id} className={styles.category_item}>
              <Link to="/categories/products" className={styles.category_link}>
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

export default Categories;
