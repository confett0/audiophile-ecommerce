import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function ProductPage({
  cart,
  addToCart,
  itemQuantity,
  setItemQuantity,
  incrementQuantity,
  decrementQuantity,
}) {
  const { productSlug } = useParams();
  const [productData, setProductData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) =>
        setProductData(data.find((product) => product.slug === productSlug))
      );
  }, [productSlug]);

  console.log(productData);

  if (!productData) {
    return <div>Loading...</div>;
  }

  const includedItemElements = productData.includes.map((item) => (
    <ul key={item.item}>
      <li>
        <span className="orange-text">{item.quantity}x</span> {item.item}
      </li>
    </ul>
  ));

  return (
    <div className="content-wrap product-page">
      <div className="back-button-wrap"><button onClick={() => navigate(-1)} className="minimal back-button">Go back</button></div>
      <img src={productData.image.desktop} />
      <div className="product-info">
        {productData.new && <p className="overline orange-text">New product</p>}
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
          <button className="orange" onClick={() => addToCart(productData)}>
            Add to cart
          </button>
        </div>
      </div>
      <div className="product-features">
        <h3>Features</h3>
        <p>{productData.features}</p>
      </div>
      <div className="product-included">
        <h3>Included items</h3>
        {includedItemElements}
      </div>
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
              <Link to={`/shop/${product.slug}`} ><button className="orange">See product</button></Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
