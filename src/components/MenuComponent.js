import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../Redux/Slices/cartSlice";
import ShimmerMenu from "./ShimmerMenu";

// Menu Component
const MenuComponent = () => {
  const [resInfo, setResInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { resId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (resId) {
      fetchMenu();
    }
    window.scrollTo(0, 0);
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      );

      if (!response.ok) throw new Error("Failed to fetch menu data");

      const jsonData = await response.json();
      setResInfo(jsonData.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) return <ShimmerMenu />;
  if (error) return <h1 className="error-message">Error: {error}</h1>;
  if (!resInfo) return <h1 className="error-message">No Menu Information Available</h1>;

  const { name, cuisines } = resInfo.cards[2]?.card?.card?.info || {};
  const filteredCategories = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  ) || [];

  return (
    <div>
      <div className="Resturant-heading-cnt">
        <h1 className="font-styling">{name}</h1>
        <p className="font-styling">{cuisines?.join(", ")}</p>
        <h2 className="font-styling">&#8636; &#9476; Menu &#9476; &#8640;</h2>
      </div>

      {/* Render each category with items */}
      {filteredCategories.map((category, index) => (
        <CategorySection
          key={category.card.card.title}
          category={category}
          index={index}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
};

// Category Section Component
const CategorySection = ({ category, index, dispatch }) => {
  const [dropdown, setDropDown] = useState(index !== 0);

  const toggleDropdown = () => setDropDown(!dropdown);

  return (
    <>
      <div
        className="Header--res flex justify-between mt-8 bg-gray-100 w-[60%] p-5 m-auto rounded-sm shadow-lg hover:cursor-pointer"
        onClick={toggleDropdown}
      >
        <h1 className="font-styling menu-heading2 text-2xl font-semibold">
          {category.card.card.title} ({category.card.card.itemCards.length})
        </h1>
        <span className="text-2xl mx-5">{dropdown ? "⬇️" : "⬆️"}</span>
      </div>

      {/* Display menu items if dropdown is open */}
      <div
        className={
          dropdown
            ? "hidden"
            : "block Menu-Resturant-container mt-0 w-[60%] border-0 p-5 m-auto bg-gray-100 rounded-lg"
        }
      >
        {category.card.card.itemCards.map((item) => (
          <MenuItem key={item.card.info.id} item={item.card.info} dispatch={dispatch} />
        ))}
      </div>
    </>
  );
};

// Individual Menu Item Component
const MenuItem = ({ item, dispatch }) => {
  const { id, name, price, defaultPrice, description, imageId } = item;

  return (
    <div className="Menu-Card m-auto my-6 w-full" key={id}>
      <div className="info">
        <h2 className="font-styling text-lg font-bold">{name}</h2>
        <h2 className="font-styling font-semibold">
          &#8377; {price ? price / 100 : defaultPrice / 100}
        </h2>
        <p className="font-styling">{description}</p>
      </div>
      <div className="Menu-imgContainer">
        <img src={CDN_URL + imageId} alt={name} />
        <button
          className="addToCart font-styling w-1/2 text-center flex justify-center"
          onClick={() => dispatch(addItem(item))}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default MenuComponent;
