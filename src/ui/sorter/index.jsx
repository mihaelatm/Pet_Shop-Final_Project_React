import { Select } from "antd";
import styles from "./styles.module.css";

const { Option } = Select;

function Sorter({ sortOrder, setSortOrder }) {
  return (
    <>
      <Select
        value={sortOrder}
        onChange={setSortOrder}
        className={styles.select}
      >
        <Option value="default">by default</Option>
        <Option value="priceAsc">Price low to high</Option>
        <Option value="priceDesc">Price high to low</Option>
        <Option value="titleAsc">A to Z</Option>
        <Option value="titleDesc">Z to A</Option>
      </Select>
    </>
  );
}

export default Sorter;
