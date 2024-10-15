import { Form } from "antd";
import InputEmail from "../../ui/inputEmail";
import InputName from "../../ui/inputName";
import InputPhone from "../../ui/inputPhone";
import styles from "./styles.module.css";
import { useState } from "react";
import axios from "axios";
import CustomModal from "../CustomModal";
import { useDispatch } from "react-redux";
import { clearCartItems } from "../../redux/slices/cartSlices";

function CartForm() {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch(); // Initializează useDispatch

  const onFinish = async (values) => {
    try {
      const response = await axios.post("http://localhost:3333/sale/send", {
        name: values.name,
        email: values.email,
        phone: values.phone,
      });

      console.log("Response:", response);

      if (response.status === 200) {
        form.resetFields();
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    dispatch(clearCartItems());
  };

  return (
    <>
      <Form form={form} onFinish={onFinish} className={styles.form}>
        <InputName className={styles.input_cart} />
        <InputPhone className={styles.input_cart} />
        <InputEmail className={styles.input_cart} />
        <button type="submit" className={styles.button}>
          Order
        </button>
      </Form>

      <CustomModal open={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}

export default CartForm;
