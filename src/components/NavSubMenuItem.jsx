import React from "react";
import { Link } from "react-router-dom";

function NavSubMenuItem({ item }) {
  return (
    <li
      key={item.id}
      className="font-lato font-normal leading-5 text-[14px] hover:text-[#111619] text-[#111619] hover:bg-gray-200 duration-200 cursor-pointer px-[12px] py-[5px] rounded-md"
    >
      <Link>{item.title}</Link>
    </li>
  );
}

export default NavSubMenuItem;
