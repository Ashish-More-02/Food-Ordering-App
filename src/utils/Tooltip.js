import React, { useState } from "react";

const Tooltip = ({ onlineStatus }) => {
  const [showTooltip, setShowTooltip] = useState(false); // State to control tooltip visibility, normal variable , and dom changes do not work

  return (
    <li
      style={{ border: "none", position: "relative" }} // Ensure the tooltip is relative to the list item
      onMouseEnter={() => setShowTooltip(true)} // Show tooltip on hover
      onMouseLeave={() => setShowTooltip(false)} // Hide tooltip when mouse leaves
    >
      {onlineStatus ? "🟢" : "🔴"}

      {/* Conditionally render the tooltip */}
      {showTooltip ? (
        <div className="tool-tip-style">
          {onlineStatus ? "Online" : "Offline"}
        </div>
      ) : (
        ""
      )}
    </li>
  );
};

export default Tooltip;
