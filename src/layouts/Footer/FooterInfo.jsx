import styles from "./styles.module.css";
import Map from "../../assets/images/map.png";

function FooterInfo() {
  return (
    <>
      <div className={styles.footer_info}>
        <div className={styles.info_location}>
          <p className={styles.text}>Address</p>
          <p className={styles.text_info}>
            Wallstraße 9-13, 10179 Berlin, Deutschland
          </p>
        </div>

        <div className={styles.info_working_hours}>
          <p className={styles.text}>Working Hours</p>
          <p className={styles.text_info}>24 hours a day</p>
        </div>
      </div>

      <img src={Map} alt="Map" className={styles.map_image} />
    </>
  );
}

export default FooterInfo;
