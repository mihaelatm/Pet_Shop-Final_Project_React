import styles from "./styles.module.css";
import logo_icon from "../../assets/icons/logo_icon.svg";
import { NavLink } from "react-router-dom";
import cart_icon from "../../assets/icons/cart_icon.svg";
import { useSelector } from "react-redux";
import { selectTotalItems } from "../../redux/slices/cartSlices";

function Header() {
  const totalItems = useSelector(selectTotalItems);

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div>
          <NavLink to="/">
            <img src={logo_icon} alt="Logo" className={styles.logo_image} />
          </NavLink>
        </div>

        <div className={styles.nav_links}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.active_link : styles.nav_link
            }
          >
            Main Page
          </NavLink>

          <NavLink
            to="/categories"
            className={({ isActive }) =>
              isActive ? styles.active_link : styles.nav_link
            }
          >
            Categories
          </NavLink>
          <NavLink
            to="/products/all"
            className={({ isActive }) =>
              isActive ? styles.active_link : styles.nav_link
            }
          >
            All products
          </NavLink>
          <NavLink
            to="/sales"
            className={({ isActive }) =>
              isActive ? styles.active_link : styles.nav_link
            }
          >
            All sales
          </NavLink>
        </div>

        <div>
          <NavLink to="/cart">
            <img src={cart_icon} alt="Cart" />
            {totalItems > 0 && (
              <span className={styles.cart_count}>{totalItems}</span>
            )}
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
