import ButtonLink from "../../ui/buttonLink";
import styles from "./styles.module.css";

function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.banner_content}>
        <h1 className={styles.banner_title}>
          Amazing Discounts <br /> on Pets Products!
        </h1>

        <ButtonLink text="Check Out" width="218px" to="/discounts" />
      </div>
    </section>
  );
}

export default Banner;
