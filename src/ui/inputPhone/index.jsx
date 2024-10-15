import { Form, Input } from "antd";
import styles from "./styles.module.css";

function InputPhone({ className }) {
  return (
    <Form.Item
      name="phone"
      rules={[
        { required: true, message: "Please input your phone number!" },
        { min: 6, message: "Phone number must be at least 10 digits!" },
      ]}
    >
      <Input className={className} placeholder="Phone number" />
    </Form.Item>
  );
}

export default InputPhone;
