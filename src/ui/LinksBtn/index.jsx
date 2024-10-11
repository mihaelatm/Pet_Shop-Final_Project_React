import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.css";

const LinksBtn = ({ buttons }) => {
  const location = useLocation();

  return (
    <div className={styles.button_container}>
      {buttons.map((btn, index) => {
        const isActive = location.pathname === btn.link;

        return (
          <div key={index} className={styles.button_wrapper}>
            <Link
              to={btn.link}
              className={`${styles.button_link} ${
                isActive ? styles.active_button : ""
              }`}
            >
              {btn.text}
            </Link>
            {index < buttons.length - 1 && <div className={styles.line}></div>}
          </div>
        );
      })}
    </div>
  );
};

export default LinksBtn;
