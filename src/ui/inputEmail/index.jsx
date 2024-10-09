import { Form, Input } from "antd";
import styles from "./styles.module.css";

function InputEmail() {
  return (
    <Form.Item
      name="email"
      rules={[
        { required: true, message: "Please input your email!" },
        { type: "email", message: "The input is not valid E-mail!" },
      ]}
      className={styles.form_item}
    >
      <Input placeholder="Email" className={styles.input_form} />
    </Form.Item>
  );
}

export default InputEmail;
