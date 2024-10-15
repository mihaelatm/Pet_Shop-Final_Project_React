import CartForm from "../CartForm";
import styles from "./styles.module.css";

function CartTotal({ itemCount, totalPrice }) {
  return (
    <section className={styles.cart_total_container}>
      <div className={styles.cart_total}>
        <h3 className={styles.cart_total_title}>Order details</h3>
        <h3 className={styles.cart_total_info}>{itemCount} items</h3>
        <div className={styles.cart_total_price_container}>
          <h3 className={styles.cart_total_price}>Total </h3>
          <span className={styles.cart_price_total}>{totalPrice}$</span>
        </div>

        <div className={styles.cart_form_container}>
          <CartForm />
        </div>
      </div>
    </section>
  );
}

export default CartTotal;
