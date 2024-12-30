import { useState, useEffect } from "react";
import ResturantCard, { withPromotedLabel } from "./ResturantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import FoodCards from "./FoodCards";
import ShimmerFood from "./ShimmerFood";
import useOnlineStatus from "../utils/useOnlineStatus";
import wifiOff_img from "../../public/offline.png";

const realData = require("../utils/swiggyAPI.json");

const Body = () => {
  const [RestaurantList, setRestaurantList] = useState([]); // original data, do not change
  const [filterdResturantList, setfilterdResturantList] = useState([]); // modify and display this data
  const [RestaurantList2, setRestaurantList2] = useState([]);
  const [filterdResturantList2, setfilterdResturantList2] = useState([]);
  const [RestaurantList3, setRestaurantList3] = useState(resList);
  const [toggleState, setToggleState] = useState(false);
  const [searchText, setSearchText] = useState("");
  let final_fetch_result = [];

  // ResturantCardPromoted has the enhanced version of the higher order function
  const ResturantCardPromoted = withPromotedLabel(ResturantCard);

  const userOnlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
    fetchData2();
  }, []);

  // FETCH DATA FROM API
  const fetchData = async () => {
    try {
      const ResponseData = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const jsonData = await ResponseData.json();

      // This data contains a array of resturants with 8 objects which is comming from swiggy API
      final_fetch_result =
        jsonData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        jsonData.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        [];
      
      setRestaurantList(final_fetch_result);
      setfilterdResturantList(final_fetch_result);
    } catch (error) {
      console.error("some error occured while fetching the API!!!!" + error);
    }
  };

  // FETCH DATA FROM API - PUNE
  const fetchData2 = async () => {
    const ResponseData2 = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5491477&lng=73.918503&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData2 = await ResponseData2.json();

    setRestaurantList2(
      jsonData2.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    setfilterdResturantList2(
      jsonData2.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };

  // LOADING SCREEN
  if (userOnlineStatus === false) {
    return (
      <div className="offline-screen">
        <h1>
          Looks like you are offline!!! , please check your internet connection
        </h1>
        <img src={wifiOff_img}></img>
      </div>
    );
  }
  if (RestaurantList.length === 0) {
    return <Shimmer></Shimmer>;
  }

  // ALL UTILITY FUNCTIONS
  const handleOnChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    //filter the UI to show the updated search text
    const ans = RestaurantList.filter((oneResturant) => {
      return oneResturant.info.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });

    const ans2 = RestaurantList2.filter((oneResturant) => {
      return oneResturant.info.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });

    setfilterdResturantList(ans);
    setfilterdResturantList2(ans2);
  };

  const handleTopResturantsSearch = () => {
    // filter resturants
    const FilteredResList = RestaurantList.filter((x) => {
      return x.info.avgRating >= 4;
    });

    const FilteredResList2 = RestaurantList2.filter((x) => {
      return x.info.avgRating >= 4;
    });

    setfilterdResturantList(FilteredResList);
    setfilterdResturantList2(FilteredResList2);

    // Toggle the state to add/remove the "dark-btn" class
    setToggleState(!toggleState);
  };

  return (
    <div className="body">
      <div className="Search-component">
        <input
          type="text"
          placeholder="Whats on your mind?"
          value={searchText}
          onChange={handleOnChange}
        ></input>
        <button className="search-style" onClick={handleSearch}>
          Search
        </button>
        <button
          className={`filter-btn ${toggleState ? "dark-btn" : ""}`}
          id="body-btn-filter"
          onClick={handleTopResturantsSearch}
        >
          Top Rated Restaurants
        </button>
      </div>

      <FoodCards></FoodCards>

      <h1 className="body-heading text-2xl font-bold">Top Restaurants around you!</h1>
      <div className="Resturant-container">
        {/* 1) data from live API of swiggy */}
        {filterdResturantList.map((oneResturant) => {
          return (
            <Link
              key={oneResturant.info.id}
              to={"/resturants/" + oneResturant.info.id}
              style={{ textDecoration: "none", color: "black" }}
            >
              {/* If the resturant is promoted then add a prometed label to it , as promoted label is not present in our api , so i am using 'isopen'*/}
              {oneResturant.info.isOpen ? (
                <ResturantCard resdata={oneResturant}></ResturantCard>
              ) : (
                <ResturantCardPromoted resdata={oneResturant} />
              )}
            </Link>
          );
        })}

        {/* 2) data from live API of swiggy - Pune*/}
        {filterdResturantList2.map((oneResturant) => {
          return (
            <Link
              key={oneResturant.info.id}
              to={"/resturants/" + oneResturant.info.id}
              style={{ textDecoration: "none", color: "black" }}
            >
              {/* <ResturantCard resdata={oneResturant}></ResturantCard> */}
              {oneResturant.info.isOpen ? (
                <ResturantCard resdata={oneResturant}></ResturantCard>
              ) : (
                <ResturantCardPromoted resdata={oneResturant} />
              )}
            </Link>
          );
        })}
      </div>

      <h1 className="body-heading  text-2xl font-bold" style={{ marginTop: "80px" }}>
        Good Resturants around you!
      </h1>
      <div className="Resturant-container">
        {/* 3) data from 'mockData.js' = resList */}
        {RestaurantList3.map((oneResturant) => {
          return <ResturantCard resdata={oneResturant}></ResturantCard>;
        })}

        {/* 4) passing props into Components by hand */}
        <ResturantCard resName="paratha house" rating="4.3"></ResturantCard>
        <ResturantCard resName="domino's pizza" rating="3.8"></ResturantCard>

        {/* 5) Dummy cards */}
        <ResturantCard></ResturantCard>
        <ResturantCard></ResturantCard>
        <ResturantCard></ResturantCard>
        <ResturantCard></ResturantCard>
      </div>

    </div>
  );
};

export default Body;
