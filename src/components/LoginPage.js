import { Link, Outlet, useLocation } from "react-router-dom";
import CreateAccount from "./CreateAccount";

// hooks are always used inside functions
const LoginPage = () => {
  const location = useLocation();
  return (
    <div className="login-page">
      {location.pathname === "/login/createaccount" ? (
        <Outlet></Outlet>
      ) : (
        <div className="Login-cnt flex items-center justify-evenly flex-col">
          <h1 className="text-5xl"> Login</h1>
          <form className="flex flex-col w-full gap-1">
            <label htmlFor="txt-box">UserName :</label>
            <input id="txt-box" type="text" className="text-2xl"></input>
            <label htmlFor="pass">Password</label>
            <input id="pass" type="password" className="text-2xl"></input>
            <button className=" login-btn text-2xl mt-4"> Login </button>
          </form>
          <div className="flex flex-row flex-wrap gap-5 justify-center">
            <div className="underline decoration-solid hover:cursor-pointer">
              Forgot UserName
            </div>
            <div className="underline decoration-solid hover:cursor-pointer">
              Forgot Password
            </div>
            <div className="w-full flex gap-1 justify-center">
              <div>Don't have an account : </div>

              <Link to="/login/createaccount">
                <div className="underline decoration-solid hover:cursor-pointer">
                  Create an Account
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
