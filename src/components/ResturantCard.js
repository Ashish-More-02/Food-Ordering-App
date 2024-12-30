// our component can handle different type of data (from the API, mock data, or manually passed props) is being used.
import { CDN_URL } from "../utils/constants";

// Fallback image in case the image is not available
const FALLBACK_IMAGE_URL =
  "https://st4.depositphotos.com/22526794/25260/v/450/depositphotos_252607544-stock-illustration-healthy-food-plate-with-fork.jpg";

// destructuring the props and assigning a default value
const ResturantCard = ({ resdata = {}, resName = "", rating = null }) => {
  // If any of these fields are present, hasData will be true. If not, hasData will be false.
  // This helps you figure out which type of data (from the API, mock data, or manually passed props) is being used.
  const hasData = resdata.data || resdata.info;

  // Extracting values based on the available data source
  const name =
    resdata.data?.name || resName || resdata.info?.name || "Unknown Restaurant";
  const ratingAPI =
    resdata.data?.avgRating || rating || resdata.info?.avgRating || "N/A";
  const mycloudinaryImageId =
    resdata.data?.cloudinaryImageId || resdata.info?.cloudinaryImageId || "";
  const mycusines = resdata.data?.cuisines || resdata.info?.cuisines || [];
  const location = resdata.info?.areaName || "";
  const totalRating = resdata.info?.totalRatingsString || "";

  // Final image URL : conditional rendering
  const imageUrl = mycloudinaryImageId
    ? `${CDN_URL}${mycloudinaryImageId}`
    : FALLBACK_IMAGE_URL;

  return (
    <div className="Card">
      <div className="imgContainer">
        <img
          src={imageUrl}
          alt={name}
          onError={(e) => {
            e.target.onerror = null; // prevent infinite loop in case fallback fails
            e.target.src = FALLBACK_IMAGE_URL;
          }}
        />
      </div>
      <div className="ResturantCard-info">
        <h3 className="font-styling font-bold">{name}</h3>
        <h3 className="font-styling">
          <span style={{ fontSize: "1.4rem", color: "green" }}>✪ </span>
          {ratingAPI} ({totalRating})
        </h3>
        <p
          className="font-styling"
          style={{ color: "grey", whiteSpace: "nowrap", overflow: "hidden" }}
        >
          {mycusines.length > 0
            ? mycusines.join(", ")
            : "No cuisines available"}
        </p>
        <p className="font-styling" style={{ color: "grey", fontSize: "15px" }}>
          {location.toLowerCase()}
        </p>
      </div>
    </div>
  );
};


// Higher order component
// a component will take another component as input and return a new enhanced component

// input - ResturantCard => output - ResturantCardPromoted

export const withPromotedLabel = (ResturantCard)=>{
  
  // new component
  return (props)=>{
    return (
      <div className="">
        <label className="text-xl bg-slate-800 text-white text-center p-2 rounded-lg relative top-16 left-6 z-[1] m-auto">Closed</label>
        <ResturantCard {...props} /> 
      </div>
    )

  }
}

export default ResturantCard;
