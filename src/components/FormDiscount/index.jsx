import { Form } from "antd";
import InputEmail from "../../ui/inputEmail";
import InputName from "../../ui/inputName";
import InputPhone from "../../ui/inputPhone";
import styles from "./styles.module.css";
import axios from "axios";
import { useState } from "react";

function FormDiscount() {
  const [form] = Form.useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onFinish = async (values) => {
    console.log("Received values from form: ", values);

    try {
      const response = await axios.post("http://localhost:3333/sale/send", {
        name: values.name,
        email: values.email,
        phone: values.phone,
      });

      if (response.status === 200) {
        form.resetFields();
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  return (
    <Form form={form} onFinish={onFinish} className={styles.form}>
      <div className={styles.form_content}>
        <InputName />
        <InputPhone />
        <InputEmail />
      </div>
      <button
        className={`${styles.button} ${isSubmitted ? styles.submitted : ""}`}
        disabled={isSubmitted}
      >
        {isSubmitted ? "Request submitted" : "Get a discount"}
      </button>
    </Form>
  );
}

export default FormDiscount;
