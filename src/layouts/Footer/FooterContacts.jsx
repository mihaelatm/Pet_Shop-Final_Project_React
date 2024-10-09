import styles from "./styles.module.css";
import instagram_icon from "../../assets/icons/instagram_icon.svg";
import whatsapp_icon from "../../assets/icons/whatsapp_icon.svg";
import { Link } from "react-router-dom";

function FooterContacts() {
  return (
    <div className={styles.footer_contacts}>
      <div className={styles.contacts}>
        <p className={styles.text}>Phone</p>
        <p className={styles.text_info}>+49 30 915-88492</p>
      </div>

      <div className={styles.social_media}>
        <p className={styles.text}>Socials</p>
        <div className={styles.icons}>
          <Link>
            <img src={instagram_icon} alt="Instagram" />
          </Link>
          <Link>
            <img src={whatsapp_icon} alt="Whatsapp" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterContacts;
