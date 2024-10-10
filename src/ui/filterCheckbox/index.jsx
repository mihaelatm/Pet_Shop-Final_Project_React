import { Checkbox } from "antd";

function FilterCheckbox({ discountedItems, setDiscountedItems }) {
  return (
    <Checkbox
      checked={discountedItems}
      onChange={(e) => setDiscountedItems(e.target.checked)}
      style={{ transform: "scale(1.5)" }}
    />
  );
}

export default FilterCheckbox;
