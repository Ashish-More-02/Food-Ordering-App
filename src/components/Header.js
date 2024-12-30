import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Tooltip from "../utils/Tooltip";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux"; 

const Header = () => {
  const [logintxt, setLogintxt] = useState("Login");
  const [userLogin, setUserLogin] = useState(false); // Login state
  const onlineStatus = useOnlineStatus();
  const navigate = useNavigate(); // Use navigate to programmatically navigate
  const { loggedInUser } = useContext(UserContext);

  // subscribing to the store of the cart slice which have items array in it
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  // Toggle login/logout and navigate
  const handleLogin = () => {
    if (logintxt === "Login") {
      setLogintxt("Logout");
      setUserLogin(true);
      navigate("/"); // Navigate to home (Body component) on login
    } else {
      setLogintxt("Login");
      setUserLogin(false);
      navigate("/login"); // Navigate to login page on logout
    }
  };

  return (
    <div className="header">
      <div
        className="logo-container"
        onClick={() => {
          navigate("/");
        }}
      >
        <img className="logo" src={LOGO_URL} alt="logo" />
        <h1 className="" style={{ color: "white" }}>
          Food Ordering App
        </h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" className="LinkRouteStyle">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="LinkRouteStyle">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="LinkRouteStyle">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/instamart" className="LinkRouteStyle">
              InstaMart
            </Link>
          </li>
          <li>
            <Link to="/cart" className="LinkRouteStyle">
              Cart ({cartItems.length})
            </Link>
          </li>
          {/* Login/Logout Button */}
          <button
            className={` ${userLogin ? "logout-btn" : "login-btn"}`}
            onClick={handleLogin}
          >
            {logintxt}
          </button>
          {/* accessing this data using context */}
          {logintxt == "Logout" ? (
            <div className="text-white h-full pt-3">{loggedInUser} </div>
          ) : (
            ""
          )}
          {/* Tooltip for online status */}
          <Tooltip onlineStatus={onlineStatus} />
        </ul>
      </div>
    </div>
  );
};

export default Header;

