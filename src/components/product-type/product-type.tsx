import "./product-type.scss";
import { typeData } from "../../lib/data";

const ProductType = () => {
  return (
    <nav className="product-type-container">
      {typeData.map((e) => (
        <div key={e.id} className="type-div">
          <div className={e.class}>
            <img src={e.image} alt={`${e.span}-icon`} />
          </div>
          <span className="type-text">{e.span}</span>
        </div>
      ))}
    </nav>
  );
};

export default ProductType;
