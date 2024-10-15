import { Button } from "antd";
import error_image from "../../assets/images/error_image.svg";
import styles from "./styles.module.css";
import ButtonLink from "../../ui/buttonLink";

function ErrorPage() {
  return (
    <section className={styles.error_container}>
      <div>
        <img src={error_image} alt="Error" />
      </div>

      <div className={styles.error_content}>
        <h2>Page Not Found</h2>
        <p className={styles.error_text}>
          We’re sorry, the page you requested could not be found. Please go back
          to the homepage.
        </p>
        <ButtonLink text="Go Home" width="209px" to="/" />
      </div>
    </section>
  );
}

export default ErrorPage;
