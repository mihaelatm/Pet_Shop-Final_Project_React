import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlices";
import useFetchData from "../../utils/useFetchData";
import styles from "./styles.module.css";
import LinksBtn from "../../ui/LinksBtn";
import AddToCartButton from "../../ui/addToCartButton";
import QuantityCounter from "../../components/QuantityCounter";
import ProductDescription from "../../components/ProductDescription";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    data: product,
    loading,
    error,
  } = useFetchData("http://localhost:3333/products/all");
  const [count, setCount] = useState(1);

  const foundProduct = product.find((item) => item.id === parseInt(id));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!foundProduct) return <p>Product not found</p>;

  const { title, price, image, description, discont_price } = foundProduct;

  const discountPercentage =
    discont_price != null && price > 0
      ? Math.round(((price - discont_price) / price) * 100)
      : 0;

  const handleAddToCart = () => {
    dispatch(addToCart({ id, image, title, discont_price, price }));
  };

  const handleCountChange = (newCount) => {
    setCount(newCount);
  };

  return (
    <section className={styles.product_page}>
      <LinksBtn
        buttons={[
          { link: "/", text: "Main Page" },
          { link: "/categories", text: "Categories" },
          { link: "/categories/products", text: "Dry & Wet Food" },
          { link: `/product/${id}`, text: title },
        ]}
      />

      <div className={styles.product_container}>
        <div className={styles.image_container}>
          <img
            src={`http://localhost:3333${image}`}
            alt={title}
            className={styles.product_image}
          />
        </div>

        <div className={styles.product_info}>
          <h3 className={styles.product_title}>{title}</h3>
          <div className={styles.price_container}>
            <p className={styles.price}>${price}</p>
            {discont_price && (
              <p className={styles.discount_price}>${discont_price}</p>
            )}
            {discountPercentage > 0 && (
              <div className={styles.discount_percentage}>
                -{discountPercentage}%
              </div>
            )}
          </div>

          <div className={styles.quantity_container}>
            <QuantityCounter onCountChange={handleCountChange} />
            <AddToCartButton
              onClick={handleAddToCart}
              className={styles.button_add_to_cart}
            />
          </div>

          <ProductDescription description={description} />
        </div>
      </div>
    </section>
  );
};

export default Product;
