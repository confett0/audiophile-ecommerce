import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CartContext from "../CartContext.js";
import QuantitySelector from "../components/QuantitySelector.js";
import type { Product } from "../types/product.js";

export default function ProductPage() {
  const { productSlug } = useParams();
  const [productData, setProductData] = useState<Product | null>(null);
  const [itemQuantity, setItemQuantity] = useState<number>(1);
  const navigate = useNavigate();
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) =>
        setProductData(
          data.find((product: Product) => product.slug === productSlug),
        ),
      );
  }, [productSlug]);

  const incrementQuantity = () => setItemQuantity((prevCount) => prevCount + 1);

  const decrementQuantity = () =>
    setItemQuantity((prevCount) => {
      if (prevCount <= 1) return prevCount;
      return prevCount - 1;
    });

  if (!productData) {
    return <div>Loading...</div>;
  }

  const includedItemElements = productData.includes.map((item) => (
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
              value={itemQuantity}
              onIncrement={incrementQuantity}
              onDecrement={decrementQuantity}
              onChange={(e) => setItemQuantity(+e.target.value)}
            />
            <button
              className="orange"
              onClick={() => {
                addItem(productData, itemQuantity);
                setItemQuantity(1); // reset itemQuantity state
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
              <Link to={`/shop/${product.slug}`}>
                <button className="orange">See product</button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
