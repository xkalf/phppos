import React, { useEffect, useState } from "react";
import SectorItem from "../components/SectorItem";

const Sector = () => {
  const [sectors, setSectors] = useState([]);
  const fetchData = async () => {
    const res = await fetch("http://localhost:8080/company");
    const result = await res.json();
    result.forEach((i) => {
      const newElement = {
        sectorId: i._id,
        name: i.title,
        address: i.address,
        phone: i.phone,
        email: i.email,
      };
      setSectors((j) => [...j, newElement]);
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
          placeholder="Хайх салбарууд"
        />
        <button className="text-sm bg-[#3192e4] text-white px-3 py-4 rounded-sm">
          + Шинэ салбар
        </button>
      </div>
      <div className="m-4 p-2 bg-white">
        <div className="border-b p-2 border-[#e9e9e9]">
          <p>Салбарууд</p>
        </div>
        <table className="w-full mt-4">
          <thead>
            <tr className="border-b border-[#e9e9e9]">
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>Засах</td>
              <td>Салбарын ID</td>
              <td>Нэр</td>
              <td>Хаяг</td>
              <td>Утасны дугаар</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
            {sectors.map((sector, index) => {
              return <SectorItem key={index} {...sector} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sector;
