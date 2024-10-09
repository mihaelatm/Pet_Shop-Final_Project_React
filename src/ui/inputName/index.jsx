import { Form, Input } from "antd";
import styles from "./styles.module.css";

function InputName() {
  return (
    <Form.Item
      name="name"
      rules={[{ required: true, message: "Please input your name!" }]}
      className={styles.form_item}
    >
      <Input placeholder="Name" className={styles.input_form} />
    </Form.Item>
  );
}

export default InputName;
