import React, { useState } from "react";
import { navLinks } from "../constants/index.js";
import Logo from "../assets/Logo.svg";
import { Link, NavLink } from "react-router-dom";
import { HiChevronRight, HiChevronDown, HiSearch } from "react-icons/hi";
import NavSubMenuItem from "./NavSubMenuItem.jsx";
import NavSubMenuCard from "./NavSubMenuCard.jsx";
import NavTrackingCard from "./NavTrackingCard.jsx";

function Navbar() {
  const [productIsHovered, setProductIsHovered] = useState(false);
  const [integrationIsHovered, setIntegrationIsHovered] = useState(false);
  const [useCasesIsHovered, setUseCasesIsHovered] = useState(false);
  const [trackShipmentIsHovered, setTrackShipmentIsHovered] = useState(false);

  function navLinksHoverHandler(hoveredMenu, hoveredOrNot) {
    switch (hoveredMenu.toLowerCase()) {
      case "products":
        setProductIsHovered(hoveredOrNot);
        break;
      case "integrations":
        setIntegrationIsHovered(hoveredOrNot);
        break;
      case "use cases":
        setUseCasesIsHovered(hoveredOrNot);
        break;
      case "track shipment":
        setTrackShipmentIsHovered(hoveredOrNot);
        break;
    }
  }
  return (
    <>
      <nav>
        <div className="flex items-center justify-between px-[70px] py-4">
          <div className="w-[120px] h-[36px]">
            <NavLink to="/" className="w-[100%]">
              <img src={Logo} alt="logo" className="w-[100%] h-[100%]" />
            </NavLink>
          </div>
          <div className=" ml-4 text-[#4f5665] ">
            <ul className="flex text-[16px] leading-6 font-bold font-lato ">
              {navLinks.slice(0, 5).map((link) => (
                <li
                  key={link.id}
                  className="mr-10 min-w-fit hover:text-primary duration-300 relative"
                  onMouseEnter={() => {
                    navLinksHoverHandler(link.title, true);
                  }}
                  onMouseLeave={() => {
                    navLinksHoverHandler(link.title, false);
                  }}
                >
                  <NavLink
                    className="flex items-center justify-center"
                    id={link.id}
                  >
                    {link.title}{" "}
                    {productIsHovered && link.id === "products" ? (
                      <HiChevronRight />
                    ) : (
                      link.id === "products" && <HiChevronDown />
                    )}
                    {integrationIsHovered && link.id === "integrations" ? (
                      <HiChevronRight />
                    ) : (
                      link.id === "integrations" && <HiChevronDown />
                    )}
                    {useCasesIsHovered && link.id === "use cases" ? (
                      <HiChevronRight />
                    ) : (
                      link.id === "use cases" && <HiChevronDown />
                    )}
                  </NavLink>
                  <NavSubMenuCard key={link.id}>
                    {productIsHovered && link.id === "products"
                      ? link.subMenus?.map((item) => (
                          <NavSubMenuItem item={item} />
                        ))
                      : integrationIsHovered && link.id === "integrations"
                      ? link.subMenus?.map((item) => (
                          <NavSubMenuItem item={item} />
                        ))
                      : useCasesIsHovered && link.id === "use cases"
                      ? link.subMenus?.map((item) => (
                          <NavSubMenuItem item={item} />
                        ))
                      : ""}
                  </NavSubMenuCard>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <ul className="flex  text-[16px] leading-6 font-bold font-lato items-center">
              {navLinks.slice(5).map((link) => (
                <li
                  onMouseEnter={() => navLinksHoverHandler(link.id, true)}
                  onMouseLeave={() => navLinksHoverHandler(link.id, false)}
                  key={link.id}
                  className={`${
                    link.id === "track shipment"
                      ? "px-[28px] py-[21px] min-w-fit mr-[40px] text-primary  hover:rounded-t-xl border-[0.5px] border-[white]  hover:border-borderColorPrimary hover:shadow-custom cursor-pointer duration-100 relative"
                      : "mr-[40px] cursor-pointer hover:text-primary duration-100"
                  } ${
                    link.id === "sign in"
                      ? "hover:underline duration-100 min-w-fit"
                      : ""
                  } ${
                    link.id === "sign up"
                      ? "border border-solid min-w-fit border-primary py-[13px] px-[32px] rounded-[50px] hover:text-white hover:bg-primary hover:underline duration-200 text-primary"
                      : ""
                  }`}
                >
                  <NavLink className="flex items-center">
                    {link.title}

                    {trackShipmentIsHovered && link.id === "track shipment" ? (
                      <HiChevronRight />
                    ) : (
                      <HiChevronDown />
                    )}
                  </NavLink>
                  {link.id === "track shipment" && trackShipmentIsHovered ? (
                    <NavTrackingCard />
                  ) : (
                    ""
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
