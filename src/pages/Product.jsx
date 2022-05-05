import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const fetchData = async () => {
    const res = await fetch("http://localhost:8080/product");
    const result = await res.json();
    result.forEach((i) => {
      const newElement = {
        productId: i._id,
        name: i.title,
        unitPrice: i.unitPrice,
      };
      setProducts((j) => [...j, newElement]);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-[90%] bg-[#E9EBEE]">
      <div className="flex px-6 justify-between items-center bg-white w-full">
        <input
          className="bg-[#f2f6f9] text-sm leading-5 h-9 w-52 border-l border-l-[#d7dce5] px-2 py-3"
          type="text"
          placeholder="Хайх бүтээгдэхүүн"
        />
        <button
          onClick={() => {
            navigate("/new_product");
          }}
          className="text-sm bg-[#3192e4] text-white px-3 py-4 rounded-sm"
        >
          + Шинэ бүтээгдэхүүн
        </button>
      </div>
      <div className="m-4 p-2 bg-white">
        <div className="border-b p-2 border-[#e9e9e9]">
          <p>Бараанууд</p>
        </div>
        <table className="w-full mt-4">
          <thead>
            <tr className="border-b border-[#e9e9e9]">
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>Барааны ID</td>
              <td>Нэр</td>
              <td>Зарах үнэ</td>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              return <ProductItem key={index} {...product} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;

const ProductItem = ({ productId, name, unitPrice }) => {
  return (
    <tr>
      <td>
        <input type="checkbox" name="" id="" />
      </td>
      <td>{productId}</td>
      <td>{name}</td>
      <td>{unitPrice}</td>
    </tr>
  );
};
