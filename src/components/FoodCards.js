import { CDN_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShimmerFood from "./ShimmerFood";

function FoodCards() {
  const [foodCardArray, setFoodCardArray] = useState([]);

  useEffect(() => {
    fetchFoodBanner();
  }, []);

  async function fetchFoodBanner() {
    const ResponseObj = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5491477&lng=73.918503&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await ResponseObj.json();

    const foodItems =
      jsonData.data?.cards[0]?.card?.card?.imageGridCards?.info || [];
    setFoodCardArray(foodItems);

    // console.log(foodCardArray);
  }

  useEffect(() => {
    // Log the updated foodCardArray after the state change
    // console.log(foodCardArray);
  }, [foodCardArray]);

  return (
    <div className="food-cards-container">
      {foodCardArray.length === 0 ? (
        <ShimmerFood></ShimmerFood>
      ) : (
        foodCardArray.map((oneFoodItem) => {
          return (
            <Link to={oneFoodItem.action.link} target="blank">
              <div className="food-img-container" key={oneFoodItem.id}>
                <img src={CDN_URL + oneFoodItem.imageId} alt="Food Item"></img>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
}

export default FoodCards;
