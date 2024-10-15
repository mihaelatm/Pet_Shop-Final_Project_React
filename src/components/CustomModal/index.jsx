import { Modal } from "antd";
import styles from "./styles.module.css";

function CustomModal({ open, onClose }) {
  return (
    <Modal
      open={open}
      onOk={onClose}
      onCancel={onClose}
      closable={true}
      footer={null}
      className={styles.modal_custom}
    >
      <div className={styles.modal_content}>
        <h3 className={styles.modal_title}>Congratulations!</h3>
        <div className={styles.modal_text}>
          <p>Your order has been successfully placed on the website.</p>
          <p>A manager will contact you shortly to confirm your order.</p>
        </div>
      </div>
    </Modal>
  );
}

export default CustomModal;
