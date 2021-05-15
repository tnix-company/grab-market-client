import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(function () {
    axios
      .get(
        `https://ffead0a6-891a-4f34-8f2c-3e2109d8e667.mock.pstmn.io/test/${id}`
      )
      .then(function (result) {
        setProduct(result.data);
        //const products = result.data.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  if (product === null) {
    return <h1>상품 정보를 받고 있습니다...</h1>;
  }
  console.log(product);
  return (
    <div>
      <div id="IMAGE-BOX">
        <img src={"/" + product.imageUrl} />
      </div>
      <div id="PROFILE-BOX">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="CONTENTS-BOX">
        <div id="NAME">{product.name}</div>
        <div id="PRICE">{product.price}원</div>
        <div id="CREATED-AT">2021년 05월 14일</div>
        <div id="DESCRIPTION">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
