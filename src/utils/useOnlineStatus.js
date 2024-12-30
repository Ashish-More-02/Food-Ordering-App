
// custom hook, to check online status of the user

import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [OnlineStatus, setOnlineStatus] = useState(true);

  //check if online
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  },[]);

  // boolean value
  return OnlineStatus;
};

export default useOnlineStatus;










// import { useEffect, useState } from "react";

// const useOnlineStatus = () => {
//   const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

//   useEffect(() => {
//     const handleOffline = () => setOnlineStatus(false);
//     const handleOnline = () => setOnlineStatus(true);

//     // Add event listeners for online and offline events
//     window.addEventListener("offline", handleOffline);
//     window.addEventListener("online", handleOnline);

//     // Clean up the event listeners when the component unmounts
//     return () => {
//       window.removeEventListener("offline", handleOffline);
//       window.removeEventListener("online", handleOnline);
//     };
//   }, []);

//   return onlineStatus; // Return boolean status (true for online, false for offline)
// };

// export default useOnlineStatus;


