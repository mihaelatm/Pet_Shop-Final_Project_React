import Banner from "../../components/Banner";
import CategoryList from "../../components/CategoryList";
import FormDiscount from "../../components/BannerDiscount";
import SalesList from "../../components/SalesList";

function Home() {
  return (
    <>
      <Banner />
      <CategoryList />
      <FormDiscount />
      <SalesList />
    </>
  );
}

export default Home;
