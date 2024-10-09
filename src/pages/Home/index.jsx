import Banner from "../../components/Banner";
import CategoryList from "../../components/CategoryList";
import Item from "../../components/Item";

function Home() {
  return (
    <>
      <Banner />
      <Item title="Categories" name="All Categories" link="/categories" />
      <CategoryList />
    </>
  );
}

export default Home;
