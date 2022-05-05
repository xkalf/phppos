import React from "react";

const SectorItem = ({ edit, sectorId, name, address, phone, email }) => {
  return (
    <tr>
      <td>
        <input type="checkbox" name="" id="" />
      </td>
      <td
        onClick={() => {
          edit();
        }}
      >
        Засах
      </td>
      <td>{sectorId}</td>
      <td>{name}</td>
      <td>{address}</td>
      <td>{phone}</td>
      <td>{email}</td>
    </tr>
  );
};

export default SectorItem;
