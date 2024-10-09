import styles from "./styles.module.css";
import FooterContacts from "./FooterContacts";
import FooterInfo from "./FooterInfo";

function Footer() {
  return (
    <footer className={styles.footer}>
      <h2>Contact</h2>
      <FooterContacts />
      <FooterInfo />
    </footer>
  );
}

export default Footer;
