import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  return (
    <div className="user-card">
      <h2> count : {count}</h2>
      <h2>Name : {props.name}</h2>
      <h3>Location : Pune</h3>
      <h4> Contact : ashishmore2125@gmail.com</h4>
    </div>
  );
};

export default User;
