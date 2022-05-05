import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return { value, onChange };
};

const NewProduct = () => {
  const productName = useInput("");
  const unitPrice = useInput("");
  const navigate = useNavigate();
  const handleSubmit = async () => {
    const res = await fetch("http://localhost:8080/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: productName.value,
        unitPrice: parseInt(unitPrice.value),
      }),
    });
    const result = await res.json();
    if (res.status === 200) navigate("/product");
    console.log(result);
  };
  return (
    <div className="w-[90%] bg-[#E9EBEE]">
      <div className="m-4 p-2 bg-white">
        <div className="border-b p-2 border-[#e9e9e9]">
          <span>Бүтээгдэхүүний мэдээлэл </span>
          <span className="text-xs">
            (Улаан өнгөтэй талбарыг заавал бүрэн бөглөнө үү)
          </span>
        </div>
        <form
          className="text-center p-4 text-md"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="flex items-center mb-5">
            <Label red>Бүтээгдэхүүний нэр : </Label>
            <Input variable={productName} />
          </div>
          <div className="flex items-center justify-center gap-x-2">
            <Label red>Зарах үнэ : </Label>
            <Input variable={unitPrice} />
          </div>
          <input
            type="submit"
            value="Хадгалах"
            className="absolute bottom-8 right-8 bg-[#3192E3] text-xl text-white p-2 rounded shadow"
          />
        </form>
      </div>
    </div>
  );
};

const Label = ({ children, red }) => {
  const css = red
    ? "inline-block w-1/5 text-right text-red-600"
    : "inline-block w-1/5 text-right mr-6";
  return (
    <label
      className={`inline-block w-1/5 text-right mr-6 ${red && "text-red-600"}`}
    >
      {children}
    </label>
  );
};

const Input = ({ children, variable }) => {
  return (
    <input
      type="text"
      {...variable}
      className="border border-[#d7dce5] px-3 py-2 w-4/5"
    />
  );
};

export default NewProduct;
