// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import styles from "./styles.module.css";
// import AddToCartButton from "../../components/addToCartButton";
// import LinksBtn from "../../ui/LinksBtn";
// import Filter from "../Filter";
// import useFetchData from "../../utils/useFetchData";

// function CategoryProducts() {
//   const [filteredItems, setFilteredItems] = useState([]);
//   const [hoveredItemId, setHoveredItemId] = useState(null); // Starea pentru hover

//   const {
//     data: items,
//     loading,
//     error,
//   } = useFetchData("http://localhost:3333/products/all");

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   const limitedItems = (filteredItems.length > 0 ? filteredItems : items).slice(
//     0,
//     8
//   );

//   return (
//     <section className={styles.categories_content}>
//       <LinksBtn
//         buttons={[
//           { link: "/", text: "Main Page" },
//           { link: "/categories", text: "Categories" },
//           { link: "/categories/products", text: "Dry & Wet Food" },
//         ]}
//       />

//       <h2 className={styles.categories_title}>Dry & Wet Food</h2>

//       <Filter items={items} setFilteredItems={setFilteredItems} />

//       <ul>
//         {" "}
//         {/* Începe o listă neordonată pentru a conține itemii */}
//         {limitedItems.map((item) => {
//           const { id, image, title, discont_price, price } = item;

//           const discountPercentage =
//             discont_price != null && price
//               ? Math.round(((price - discont_price) / price) * 100)
//               : 0;

//           return (
//             <li
//               key={id}
//               className={styles.category_item}
//               onMouseEnter={() => setHoveredItemId(id)}
//               onMouseLeave={() => setHoveredItemId(null)}
//             >
//               <div className={styles.image_container}>
//                 <img
//                   src={`http://localhost:3333${image}`}
//                   alt={title}
//                   className={styles.category_image}
//                 />
//                 {discountPercentage > 0 && (
//                   <div className={styles.discount_percentage}>
//                     -{discountPercentage}%
//                   </div>
//                 )}
//                 {hoveredItemId === id && (
//                   <AddToCartButton
//                     onClick={() =>
//                       handleAddToCart(id, image, title, discont_price, price)
//                     }
//                   />
//                 )}
//               </div>
//               <Link to={`/products/${id}`} className={styles.category_link}>
//                 <h4 className={styles.category_title}>{title}</h4>
//                 <div className={styles.price_container}>
//                   <p className={styles.price}>${price.toFixed(2)}</p>
//                   {discont_price != null && (
//                     <p className={styles.discount_price}>
//                       ${discont_price.toFixed(2)}
//                     </p>
//                   )}
//                 </div>
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </section>
//   );
// }

// export default CategoryProducts;
