import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Menu from "./components/Menu";
import MenuComponent from "./components/MenuComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import CreateAccount from "./components/CreateAccount";
import UserContext from "./utils/UserContext";

import { Provider } from "react-redux";
import appStore from "./Redux/appStore";
import Cart from "./components/Cart";

// import InstaMart from "./components/InstaMart_Components/InstaMart";

//  LAZY LOADING FOR INSTAMART
const InstaMart = lazy(() => {
  return import("./components/InstaMart_Components/InstaMart");
});

// react component
const AppLayout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // make a API call and send username and password

    const data = {
      userName: "Ashish More",
    };
    setUserName(data.userName);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path : "/cart",
        element:<Cart />,
      },
      {
        path: "/login",
        element: <LoginPage />,
        children: [
          {
            path: "/login/createaccount",
            element: <CreateAccount />,
          },
        ],
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <InstaMart />
          </Suspense>
        ),
      },
      {
        path: "/resturants/:resId",
        element: <MenuComponent />,
      },
      
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);

// console.log(AppLayout());
