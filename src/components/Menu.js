import { useState, useEffect } from "react";
import { CDN_URL } from "../utils/constants";
import ShimmerMenu from "./ShimmerMenu";
import { useParams } from "react-router-dom";
import MenuItems from "./MenuItems";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/Slices/cartSlice";

// helper function
export const renderMenuItems = (items) => {
  const dispatch = useDispatch();

  return items.map((onefoodItem) => {
    const { id, name, price, defaultPrice, description, imageId } =
      onefoodItem.card.info;
    // console.log(onefoodItem);
    
    return (
      <div className="Menu-Card m-auto my-6 w-full" key={id}>
        <div className="info">
          <h2 className="font-styling text-lg font-bold ">{name}</h2>
          <h2 className="font-styling font-semibold">
            {" "}
            &#8377; {price ? price / 100 : defaultPrice / 100}
          </h2>
          <p className="font-styling">{description}</p>
        </div>
        <div className="Menu-imgContainer">
          <img src={CDN_URL + imageId} alt={name} />
          <button
            className="addToCart font-styling w-1/2 text-center flex justify-center"
            onClick={() =>
              dispatch(
                addItem({
                  card: {
                    info: {
                      name: name,
                      price: price ? price / 100 : defaultPrice / 100,

                    },
                  },
                })
              )
            }
          >
            ADD
          </button>
        </div>
      </div>
    );
  });
};

const Menu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { resId } = useParams();

  const [dropdown, setDropDown] = useState(false);
  const [showItems, setShowItems] = useState(0);

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

      if (!response.ok) {
        throw new Error("Failed to fetch menu data");
      }

      const jsonData = await response.json();
      setResInfo(jsonData.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) {
    return <ShimmerMenu />;
  }

  if (error) {
    return <h1 className="error-message">Error: {error}</h1>;
  }

  if (!resInfo) {
    return <h1 className="error-message">No Menu Information Available</h1>;
  }

  // Object destructuring with fallback checks
  const { name, cuisines } = resInfo.cards[2]?.card?.card?.info || {};
  const itemCards =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards || [];
  const moreItems =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
      ?.itemCards || [];
  const menuTitle =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.title || "Menu";

  const filteredCategories =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
      return (
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

  // console.log(filteredCategories);

  // helper function
  const renderMenuItems = (items) => {
    const dispatch = useDispatch();

    return items.map((onefoodItem) => {
      const { id, name, price, description, imageId } = onefoodItem.card.info;
      return (
        <div className="Menu-Card m-auto my-6" key={id}>
          <div className="info">
            <h2 className="font-styling font-bold text-lg">{name}</h2>
            <h2 className="font-styling"> &#8377; {price / 100}</h2>
            <p className="font-styling">{description}</p>
          </div>
          <div className="Menu-imgContainer">
            <img src={CDN_URL + imageId} alt={name} />
            <button
              className="addToCart font-styling"
              onClick={() => dispatch(addItem(name))}
            >
              ADD
            </button>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <div className="Resturant-heading-cnt">
        <h1 className="font-styling">{name}</h1>
        <p className="font-styling">{cuisines?.join(", ")}</p>
        <h2 className="font-styling">&#8636; &#9476; Menu &#9476; &#8640;</h2>
      </div>

      {/* <h1 className="font-styling menu-heading2 text-2xl font-semibold">
        {menuTitle}
      </h1>
      <div className="Menu-Resturant-container">
        {itemCards.length > 0 ? (
          renderMenuItems(itemCards)
        ) : (
          <p className="font-styling">No items found.</p>
        )}
      </div>

      <h1 className="font-styling menu-heading2 text-2xl font-semibold">
        {resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
          ?.card?.title || "More Items"}
      </h1>
      <div className="Menu-Resturant-container">
        {moreItems.length > 0 ? (
          renderMenuItems(moreItems)
        ) : (
          <p className="font-styling">No more items found.</p>
        )}
      </div> */}

      {/* Rendering the filtered Resturants menu categories */}
      {filteredCategories.map((oneCategory, index) => {
        return (
          <>
            <MenuItems
              index={index}
              itemData={oneCategory?.card?.card?.itemCards}
              oneCategory={oneCategory}
            ></MenuItems>
          </>
        );
      })}
    </div>
  );
};

export default Menu;
