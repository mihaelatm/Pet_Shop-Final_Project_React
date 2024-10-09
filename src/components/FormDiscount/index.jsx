import { Button, Form } from "antd";
import InputEmail from "../../ui/inputEmail";
import InputName from "../../ui/inputName";
import InputPhone from "../../ui/inputPhone";
import styles from "./styles.module.css";
import axios from "axios";
import NotificationHandler from "../NotificationHandler";

function FormDiscount() {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log("Received values from form: ", values);

    try {
      const response = await axios.post("http://localhost:3333/sale/send", {
        name: values.name,
        email: values.email,
        phone: values.phone,
      });

      if (response.status === 200) {
        NotificationHandler.success(
          "Discount Received",
          `You have received a discount at the email: ${values.email}`
        );

        form.resetFields();
      }
    } catch (error) {
      NotificationHandler.error(
        "Request Failed",
        "There was an error processing your request. Please try again."
      );
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
      <Button type="default" htmlType="submit" className={styles.button}>
        Get a discount
      </Button>
    </Form>
  );
}

export default FormDiscount;
