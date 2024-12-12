import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function ProductPage({ addToCart }) {
  const { productSlug } = useParams();
  const [productData, setProductData] = useState(null);
  const [itemQuantity, setItemQuantity] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) =>
        setProductData(data.find((product) => product.slug === productSlug))
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
            <div className="quantity-wrap">
              <button className="quantity-button" onClick={decrementQuantity}>
                -
              </button>
              <input
                type="number"
                className="item-quantity"
                name="item-quantity"
                value={itemQuantity}
                onChange={(e) => {
                  if (e.target.value === "") {
                    // avoid displaying 0 when erasing value inside the input
                    setItemQuantity("");
                  } else {
                    setItemQuantity(+e.target.value);
                  }
                }}
              />
              <button className="quantity-button" onClick={incrementQuantity}>
                +
              </button>
            </div>
            <button
              className="orange"
              onClick={() => {
                addToCart(productData, itemQuantity);
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

ProductPage.propTypes = {
  addToCart: PropTypes.func,
}
