import { Form, Input } from "antd";
import styles from "./styles.module.css";

function InputName({ className }) {
  return (
    <Form.Item
      name="name"
      rules={[{ required: true, message: "Please input your name!" }]}
      className={styles.form_item}
    >
      <Input className={className} placeholder="Name" />
    </Form.Item>
  );
}

export default InputName;
