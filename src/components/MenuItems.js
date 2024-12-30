import React, { useState, useEffect } from "react";
import { renderMenuItems } from "./Menu";

function MenuItems({ itemData, oneCategory, index }) {
  // Set the initial state based on the index
  const [dropdown, setDropDown] = useState(index === 0 ? false : true);

  // Click handler for toggling the dropdown state
  const toggleDropdown = () => {
    setDropDown(!dropdown);
  };

  return (
    <>
      <div
        className="Header--res flex justify-between mt-8 bg-gray-100 w-[60%] p-5 m-auto rounded-sm shadow-lg hover:cursor-pointer"
        onClick={toggleDropdown}
      >
        <h1 className="font-styling menu-heading2 text-2xl font-semibold">
          {oneCategory?.card?.card?.title} (
          {oneCategory?.card?.card?.itemCards.length})
        </h1>
        <span className="text-2xl mx-5">⬇️</span>
      </div>
      {/* category container */}
      <div
        className={
          dropdown
            ? "hidden"
            : "block Menu-Resturant-container mt-0 w-[60%] border-0 p-5 m-auto bg-gray-100 rounded-lg"
        }
      >
        {renderMenuItems(itemData)}
      </div>
    </>
  );
}

export default MenuItems;
