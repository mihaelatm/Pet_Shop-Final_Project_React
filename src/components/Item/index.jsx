import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Item({ title, name, link, style }) {
  return (
    <section className={styles.categories_container}>
      <div className={styles.categories}>
        <h2>{title}</h2>
        <div style={style} className={styles.button_with_line}>
          <span className={styles.line}></span>
          <Link to={link}>
            <button className={styles.category_button}>{name}</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Item;
