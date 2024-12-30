// class based component (Parent)
import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("parent constructor called");
  }

  componentDidMount() {
    // used to make api calls
    // console.log("parent component mounted");
  }

  render() {
    // console.log("parent render called");

    return (
      <>
        <div className="mb-4">
          <h1 className="text-4xl font-mono font-semibold text-center"> About us</h1>
        </div>
        {/* context is used here in class based components */}
        <div className="text-center">
          <UserContext.Consumer>
            {({ loggedInUser }) => {
              // console.log(loggedInUser);

              return <h1 className="font-bold">{loggedInUser}</h1>;
            }}
          </UserContext.Consumer>
        </div>
        <div className="About_us_container">
          {/* <User name={"Ashish More(function)"}></User> */}
          <UserClass name={"first"} location={"Pune(class)"}></UserClass>
        </div>  
      </>
    );
  }
}

export default About;
