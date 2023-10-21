import React, { useContext, useEffect, useState } from "react";
import { HiSearch } from "react-icons/hi";
import { MainContext } from "../context/store.jsx";
import { useNavigate } from "react-router-dom";
function NavTrackingCard() {
  const [enteredTrackingNum, setEnteredTrackingNum] = useState("");
  const { trackingNum, setTrackingNum } = useContext(MainContext);
  const navigate = useNavigate();

  function trackingNumHandler(e) {
    setEnteredTrackingNum(e.target.value);
  }

  function trackingNumSubmitHandler(e) {
    if (
      e.code === "Enter" ||
      e._reactName === "onClick" ||
      e.code === "NumpadEnter"
    ) {
      if (enteredTrackingNum.trim() === "") {
        alert("Please enter a valid tracking number");
        return;
      }
      setTrackingNum(enteredTrackingNum);
      navigate("/trackingDetails/" + enteredTrackingNum);
      setEnteredTrackingNum("");
    }
  }

  return (
    <div
      className={`
    absolute top-[70px] rounded-b-lg rounded-tl-lg shadow-custom2 border border-borderColorPrimary px-2 min-w-[300px] duration-200 bg-white
    `}
    >
      <div className="p-5 z-50">
        <p className="mb-5 text-textColorPrimary ">Track your shipment</p>
        <div className=" h-15 rounded-md flex justify-between">
          <input
            type="text"
            placeholder="Tracking No."
            className="outline-none border-2 border-solid border-gray-300 pl-4 border-r-0 rounded-l-md"
            onChange={trackingNumHandler}
            value={enteredTrackingNum}
            onKeyDown={trackingNumSubmitHandler}
          />
          <span
            className="border bg-primary h-18 p-3 rounded-r-md"
            onClick={trackingNumSubmitHandler}
            tabIndex={0}
          >
            <HiSearch color="#fff" size={32} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default NavTrackingCard;
