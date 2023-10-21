import React, { useState } from "react";

function NavSubMenuCard({ children }) {
  return (
    <ul
      className={`shadow-xl rounded-md min-w-[115px] max-w-[150px] bg-[white] p-2 absolute top-8 -left-4 mr-6 ${
        children ? "h-auto" : "h-0 py-0"
      } duration-500`}
    >
      {children}
    </ul>
  );
}

export default NavSubMenuCard;
