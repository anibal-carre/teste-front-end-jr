import { useState, useEffect, useRef } from "react";
import "./products.scss";

import verctor1 from "../../assets/icons/Vector1.png";
import verctor2 from "../../assets/icons/Vector2.png";

import ProductCard from "./product-card/product-card";
import ProductModal from "./product-modal/product-modal";

const Products = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [slideCounter, setSlideCounter] = useState(0);
  const [isInTransition, setIsInTransition] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setIsModalOpen(true);
    setSelectedProduct(product);
  };
  const [productData, setProductData] = useState<{
    products: Product[];
  } | null>(null);

  interface Product {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
  }

  useEffect(() => {
    // No momento de usar a API da Econverse, não consegui por conta das Cors, pois mostra uma menssagem de erro no navegador e não deixa fazer o fetch dos dados, menssagem Access to fetch at 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json' from origin 'http://localhost:5173' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
    //Então decidi criar uma API igual a da Econverse com Next.js, funciona do mesmo jeito, esse é o link : https://api-econverse-products-next.vercel.app/api/products
    //https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json
    const apiUrl = import.meta.env.VITE_API_URL;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProductData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const DIRECTION = {
    RIGHT: "RIGHT",
    LEFT: "LEFT",
  };

  const getTransformValue = () => {
    if (!sliderRef.current) return 0;
    const transformValue = sliderRef.current.scrollLeft;
    return transformValue;
  };

  const moveSlide = (direction: string) => {
    if (isInTransition) return;
    setIsInTransition(true);

    const transformValue = getTransformValue();
    const scrollAmount = sliderRef.current?.clientWidth || 0;

    if (direction === DIRECTION.LEFT) {
      sliderRef.current?.scrollTo({
        left: transformValue - scrollAmount,
        behavior: "smooth",
      });
      setSlideCounter(slideCounter - 1);
    } else if (direction === DIRECTION.RIGHT) {
      sliderRef.current?.scrollTo({
        left: transformValue + scrollAmount,
        behavior: "smooth",
      });
      setSlideCounter(slideCounter + 1);
    }

    setTimeout(() => {
      setIsInTransition(false);
    }, 300);
  };

  useEffect(() => {
    const sliderContainer = sliderRef.current;
    if (!sliderContainer) return;

    const handleTransitionEnd = () => {
      setIsInTransition(false);
    };

    sliderContainer.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      sliderContainer.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, []);

  useEffect(() => {
    const productCards = sliderRef.current?.querySelectorAll(".product-card");
    if (productCards && productCards.length > 1) {
      const firstElement = sliderRef.current?.firstElementChild;
      const lastElement = sliderRef.current?.lastElementChild;
      if (firstElement && lastElement) {
        const cloneFirst = firstElement.cloneNode(true) as HTMLElement;
        const cloneLast = lastElement.cloneNode(true) as HTMLElement;
        sliderRef.current?.appendChild(cloneFirst);
        sliderRef.current?.insertBefore(
          cloneLast,
          sliderRef.current?.firstChild
        );
      }
    }
  }, []);

  return (
    <section className="products-section-container">
      <header className="products-section-header">
        <div className="title-div">
          <div className="products-divider" />
          <h2 className="products-title">Produtos relacionados</h2>
          <div className="products-divider" />
        </div>
        <nav className="products-section-nav">
          <div className="products-section-items item-pink">Celular</div>
          <div className="products-section-items">Acessórios</div>
          <div className="products-section-items">Tablets</div>
          <div className="products-section-items">Notebooks</div>
          <div className="products-section-items">Tvs</div>
          <div className="products-section-items">Ver todos</div>
        </nav>
      </header>
      <main className="products-section-main-container">
        <img
          className="vector"
          src={verctor1}
          alt="vector-icon"
          width={"20px"}
          height={"34px"}
          onClick={() => moveSlide(DIRECTION.LEFT)}
        />
        {productData &&
          productData.products &&
          Array.isArray(productData.products) && (
            <div className="products-section-main" ref={sliderRef}>
              {productData.products.map((e, i) => (
                <ProductCard
                  key={i}
                  price={e.price}
                  productName={e.productName}
                  photo={e.photo}
                  descriptionShort={e.descriptionShort}
                  onClick={() => handleProductClick(e)}
                />
              ))}
            </div>
          )}
        <img
          className="vector"
          src={verctor2}
          alt="vector2-icon"
          width={"20px"}
          height={"34px"}
          onClick={() => moveSlide(DIRECTION.RIGHT)}
        />
      </main>

      {isModalOpen && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
};

export default Products;
