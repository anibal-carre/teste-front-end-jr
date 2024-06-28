import Banner from "../components/banner/banner";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import ProductType from "../components/product-type/product-type";
import Products from "../components/products/products";
import RelationSection from "../components/relation-section/relation-section";
import "./home.scss";

const HomePage = () => {
  return (
    <div className="home-container">
      <Header />
      <Banner />
      <ProductType />
      <Products />
      <RelationSection />
      <Footer />
    </div>
  );
};

export default HomePage;
