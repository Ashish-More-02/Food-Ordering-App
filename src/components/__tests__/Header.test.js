import { render ,  screen} from "@testing-library/react";
import appStore from "../../Redux/appStore";
import Header from "../Header";
import { Provider } from "react-redux";
import UserContext from "../../utils/UserContext";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header Component test cases ", () => {
  test("should load the header component correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

  });

  test("should load login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button"); 

    expect(loginButton).toBeInTheDocument();

    
  });

  test("should load cart ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartItems = screen.getByText(/Cart/); 

    expect(cartItems).toBeInTheDocument();

    
  });

   


});
