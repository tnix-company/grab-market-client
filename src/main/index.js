import React from "react";
import "./index.css";
import axios from "axios";

function MainPage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get("https://ffead0a6-891a-4f34-8f2c-3e2109d8e667.mock.pstmn.io/test")
      .then(function (result) {
        const products = result.data.data;
        setProducts(products);
      })
      .catch(function (error) {
        console.error("에러 발생 : ", error);
      });
  }, []);

  return (
    <div>
      <div id="HEADER">
        <div id="HEADER-AREA">
          <img src="images/icons/logo.png" />
        </div>
      </div>
      <div id="BODY">
        <div id="BANNER">
          <img src="images/banners/banner1.png" />
        </div>
        <h1>판매되는 상품들</h1>

        <div id="PRODUCT-LIST">
          {products.map(function (product, index) {
            return (
              <div className="product-card">
                <div>
                  <img className="product-img" src={product.imageUrl} />
                </div>
                <div className="product-content">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price}원</span>
                  <span className="product-seller">
                    <img
                      className="product-avatar"
                      src="images/icons/avatar.png"
                    />
                    <span>{product.seller}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="FOOTER"></div>
    </div>
  );
}

export default MainPage;
