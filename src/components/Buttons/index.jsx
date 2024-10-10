import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.css";

const Buttons = ({ buttons }) => {
  const location = useLocation();

  return (
    <div className={styles.button_container}>
      {buttons.map((button, index) => {
        const isActive = location.pathname === button.link;

        return (
          <div key={index} className={styles.button_wrapper}>
            <Link
              to={button.link}
              className={`${styles.button_link} ${
                isActive ? styles.active_button : ""
              }`}
            >
              {button.text}
            </Link>
            {index < buttons.length - 1 && <div className={styles.line}></div>}
          </div>
        );
      })}
    </div>
  );
};

export default Buttons;
