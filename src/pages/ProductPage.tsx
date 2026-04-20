import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { useCart } from "../hooks/useCart";
import QuantitySelector from "../components/QuantitySelector";
import LinkButton from "../components/LinkButton";

export default function ProductPage() {
  const { productSlug } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const products = useProducts();
  const productData = products.find((product) => product.slug === productSlug);
  const [value, setValue] = useState("1");
  const numericValue = useMemo(() => {
    const num = Number(value);
    return isNaN(num) || num < 1 ? 1 : num;
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setValue(input);
  };

  const increment = () => setValue(String(numericValue + 1));
  const decrement = () =>
    setValue(numericValue <= 1 ? "1" : String(numericValue - 1));

  if (!productData) {
    return <div>Loading...</div>;
  }

  const includedItemElements = productData?.includes.map((item) => (
    <li key={item.item}>
      <span className="orange-text">{item.quantity}x</span> {item.item}
    </li>
  ));

  return (
    <div className="content-wrap">
      <button onClick={() => navigate(-1)} className="minimal back-button">
        Go back
      </button>
      <section className="product-wrap">
        <picture className="product-page-image">
          <source
            media="(max-width: 500px)"
            srcSet={productData.image.mobile + " 500w"}
            sizes="500px"
          />
          <source
            media="(max-width: 900px)"
            srcSet={productData.image.tablet + " 900w"}
            sizes="900px"
          />
          <source
            srcSet={productData.image.desktop + " 1280w"}
            sizes="1280px"
          />
          <img src={productData.image.desktop} />
        </picture>
        <div className="product-info">
          {productData.new && (
            <p className="overline orange-text">New product</p>
          )}
          <h2>{productData.name}</h2>
          <p>{productData.description}</p>
          <h6>$ {productData.price}</h6>
          <div className="button-wrap">
            <QuantitySelector
              value={value}
              onIncrement={increment}
              onDecrement={decrement}
              onChange={handleChange}
            />
            <button
              className="orange"
              onClick={() => {
                addItem(productData, numericValue);
                setValue("1");
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className="product-features">
          <h3>Features</h3>
          <p>{productData.features}</p>
        </div>
        <div className="product-included">
          <h3>In the box</h3>
          <ul>{includedItemElements}</ul>
        </div>
      </section>
      <section className="product-gallery">
        <img className="first" src={productData.gallery.first.desktop} />
        <img className="second" src={productData.gallery.second.desktop} />
        <img className="third" src={productData.gallery.third.desktop} />
      </section>
      <section className="related-products">
        <h3>You may also like</h3>
        <div className="related-products-wrap">
          {productData.others.map((product) => (
            <div className="related-product-card" key={product.slug}>
              <img src={product.image.desktop} />
              <h5>{product.name}</h5>
              <LinkButton to={`/shop/${product.slug}`}>See product</LinkButton>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
