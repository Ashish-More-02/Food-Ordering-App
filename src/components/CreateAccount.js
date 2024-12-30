import React, { useState } from "react";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  const [Switchbtn, setSwitchbtn] = useState();

  // utility functions
  const showPassword = (e) => {
    e.preventDefault();
    // console.log(e);
    const passBox = document.getElementById("pass");

    if (passBox.type == "password") {
      passBox.type = "text";
    } else {
      passBox.type = "password";
    }
  };

  const showPassAgain = (e) => {
    e.preventDefault();
    const passBoxAgain = document.getElementById("passAgain");

    if (passBoxAgain.type == "password") {
      passBoxAgain.type = "text";
    } else {
      passBoxAgain.type = "password";
    }
  };
  return (
    <div className="createAcc-style Login-cnt flex items-center justify-evenly flex-col">
      <h1 className="text-5xl"> Create Account</h1>
      <form className="flex flex-col w-full gap-1">
        <label htmlFor="txt-box">UserName :</label>
        <input id="txt-box" type="text" className="text-2xl"></input>
        <label htmlFor="pass">Password</label>

        <div>
          <input
            id="pass"
            type="password"
            className="text-2xl w-10/12 mr-3"
          ></input>
          <button
            id="btn1"
            className="bg-slate-400 rounded-lg px-3 m-auto"
            onClick={showPassword}
          >
            👁️‍🗨️
          </button>
        </div>

        <label htmlFor="passAgain">Retype Password</label>
        <div>
          <input
            id="passAgain"
            type="password"
            className="text-2xl w-10/12 mr-3"
          ></input>
          <button
            id="btn2"
            className="bg-slate-400 rounded-lg px-3 m-auto"
            onClick={showPassAgain}
          >
            👁️‍🗨️
          </button>
        </div>

        <Link to="/login" ><button className=" login-btn text-2xl mt-4 w-full" onClick={()=>{
            
            setTimeout(()=>{
                alert("sign up Successful!");
            },1000)
            
        }}> sign up </button></Link>
        
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

          {/* <Link to="/login/createaccount">
                <div className="underline decoration-solid hover:cursor-pointer">
                  Create an Account
                </div>
              </Link> */}
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
