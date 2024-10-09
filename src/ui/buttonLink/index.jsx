import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function ButtonLink({ text, width, to, color, bgColor }) {
  return (
    <Link to={to}>
      <button
        className={styles.button}
        style={{ width, color, backgroundColor: bgColor }}
      >
        {text}
      </button>
    </Link>
  );
}

export default ButtonLink;
