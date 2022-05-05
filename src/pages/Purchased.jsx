import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return { value, onChange };
};

const Purchased = () => {
  const quantity = useInput("");
  const transportFee = useInput("");
  const customFee = useInput("");
  const taxFee = useInput("");
  const logisticFee = useInput("");
  const otherFee = useInput("");
  const [options, setOptions] = useState([]);
  const [options1, setOptions1] = useState([]);
  const [selected, setSelected] = useState("");
  const [selectedOne, setSelectedProduct] = useState("");
  const handleSubmit = async () => {
    const res = await fetch("http://localhost:8080/purchase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        transportFee: parseInt(transportFee.value),
        customFee: parseInt(customFee.value),
        taxFee: parseInt(taxFee.value),
        logisticFee: parseInt(logisticFee.value),
        otherFee: parseInt(otherFee.value),
        company: selected,
        products: [
          {
            product: selectedOne,
            quantity: parseInt(quantity.value),
            costPrice: 0,
          },
        ],
      }),
    });
    const result = await res.json();
    console.log(result)
  };
  const getCompany = async () => {
    const res = await fetch("http://localhost:8080/company");
    const result = await res.json();
    result.forEach((i) => {
      setOptions((j) => [
        ...j,
        {
          value: i._id,
          title: i.title,
        },
      ]);
    });
    setSelected(result[0]._id)
  };
  const getProduct = async () => {
    const res = await fetch("http://localhost:8080/product");
    const result = await res.json();
    result.forEach((i) => {
      setOptions1((j) => [
        ...j,
        {
          value: i._id,
          title: i.title,
        },
      ]);
    });
    setSelectedProduct(result[0]._id)
  };
  useEffect(() => {
    getCompany();
    getProduct();
  }, []);
  return (
    <div className="w-[90%] bg-[#E9EBEE]">
      <div className="m-4 p-2 bg-white">
        <div className="border-b p-2 border-[#e9e9e9]">
          <p>Бүтээгдэхүүний худалдан авалт </p>
        </div>
        <form
          className="text-center p-4 text-md"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="flex items-center mb-5">
            <Label>Компани : </Label>
            <select
              value={selected}
              onChange={(e) => {
                setSelected(e.target.value);
                console.log(selected);
              }}
            >
              {options.map((i, index) => (
                <option key={index} value={i.value}>
                  {i.title}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center mb-5">
            <Label>Тоо ширхэг : </Label>
            <Input variable={quantity} />
          </div>
          <div className="flex items-center mb-5">
            <Label>Transport Fee : </Label>
            <Input variable={transportFee} />
          </div>
          <div className="flex items-center mb-5">
            <Label>Custom Fee : </Label>
            <Input variable={customFee} />
          </div>
          <div className="flex items-center mb-5">
            <Label>Tax Fee : </Label>
            <Input variable={taxFee} />
          </div>
          <div className="flex items-center mb-5">
            <Label>Logistic Fee : </Label>
            <Input variable={logisticFee} />
          </div>
          <div className="flex items-center mb-5">
            <Label>Other Fee : </Label>
            <Input variable={otherFee} />
          </div>
          <div className="flex items-center mb-5">
            <Label>Бараа : </Label>
            <select
              value={selectedOne}
              onChange={(e) => {
                setSelectedProduct(e.target.value);
              }}
            >
              {options1.map((i, index) => (
                <option key={index} value={i.value}>
                  {i.title}
                </option>
              ))}
            </select>
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

export default Purchased;
