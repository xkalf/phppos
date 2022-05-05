import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="bg-[#373942] w-[10%]">
      <ul>
        <ListItem>Хянах Самбар</ListItem>
        <ListItem>Харилцагч</ListItem>
        <ListItem>Бүтээгдэхүүн</ListItem>
        <ListItem>Багц бүтээгдэхүүн</ListItem>
        <ListItem>Хөнгөлөлт урамшуулал</ListItem>
        <ListItem>Ханган нийлүүлэлт</ListItem>
        <ListItem>Тайлан</ListItem>
        <ListItem>Татан авалт</ListItem>
        <ListItem>Борлуулалт</ListItem>
        <ListItem>Нийт хүргэлт</ListItem>
        <ListItem>Засварын захиалга</ListItem>
        <ListItem>Зардал</ListItem>
        <ListItem>Ажилтан</ListItem>
        <ListItem>Бэлгийн карт</ListItem>
        <ListItem>Эрхийн тохиргоо</ListItem>
        <ListItem>
          <Link to="sector">Салбарууд</Link>
        </ListItem>
        <ListItem>Зурвас</ListItem>
        <ListItem>Гарах</ListItem>
      </ul>
    </div>
  );
};

const ListItem = ({ children }) => {
  return (
    <li className="hover:text-white lg:text-lg text-xs p-2 leading-8 text-[#969AA7]">
      {children}
    </li>
  );
};

export default SideBar;
