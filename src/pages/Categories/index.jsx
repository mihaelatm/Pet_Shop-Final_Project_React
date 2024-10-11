import React from "react";
import useFetchData from "../../utils/useFetchData";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import LinksBtn from "../../ui/LinksBtn";

function Categories() {
  const {
    data: items,
    loading,
    error,
  } = useFetchData("http://localhost:3333/categories/all");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className={styles.categories_content}>
      <LinksBtn
        buttons={[
          { link: "/", text: "Main Page" },
          { link: "/categories", text: "Categories" },
        ]}
      />
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
  );
}

export default Categories;
