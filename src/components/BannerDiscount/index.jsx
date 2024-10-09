import styles from "./styles.module.css";
import pets_img from "../../assets/images/pets_img.png";
import FormDiscount from "../FormDiscount";

function SalesBanner() {
  return (
    <section className={styles.sales_banner}>
      <div className={styles.sales_banner_content}>
        <h2 className={styles.banner_title}>5% off on the first order</h2>
        <div className={styles.banner_content}>
          <div className={styles.banner_img}>
            <img src={pets_img} alt="Pets" />
          </div>
          <div>
            <FormDiscount />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SalesBanner;
