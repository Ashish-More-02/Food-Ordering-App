// class based child component
import React from "react";
import { useState } from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // one big object : used to define state variables
    this.state = {
      count: 0,
      userData: {
        name: "GitHub_userName",
        gmail: "e-mail Address",
        avatar_url:
          "https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg",
      },
    };

    // console.log(this.props.name + "child constructor called");
  }

  // used to make API calls
  async componentDidMount() {
    const ResponseData = await fetch(
      "https://api.github.com/users/Ashish-More-02"
    );

    const jsonData = await ResponseData.json();
    this.setState({
      userData: jsonData,
    });

    console.log(jsonData);

    // console.log(this.props.name + "child comoponent mounted");
  }

  render() {
    // destructuring objects
    // const { name, location } = this.props;
    const { count } = this.state;
    const { name, gmail,location = "", avatar_url } = this.state.userData;

    // console.log(this.props.name + "child render called");

    return (
      <div className="user-card">

        <div className="img-container">
          <img src={avatar_url}></img>
        </div>

        <h2 className="font-bold">{name}</h2>
        <h4 className="font-semibold">ashishmore2125@gmail.com</h4>
        {/* <h3>Location : {location}</h3> */}
        <p>Major contributor to making of this project.</p>
      </div>
    );
  }
}

export default UserClass;
