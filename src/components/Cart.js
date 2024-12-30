import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem } from "../Redux/Slices/cartSlice";
import Menu from "./Menu";
import { CDN_URL } from "../utils/constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="text-4xl font-mono font-semibold text-center">Cart</h1>
      {cartItems.length == 0 ? (
        <div className="w-[50%] rounded-2xl bg-gray-100 mx-8 my-5 p-5 h-[80vh] text-center">
          Cart is Empty
        </div>
      ) : (
        <div className="w-[50%] rounded-2xl bg-gray-100 mx-8 my-5 p-5">
          <div className="flex justify-between">
            <span className="text-lg">Total Items ({cartItems.length})</span>
            <button
              className="logout-btn border-red-800 border-2 active:bg-red-700"
              onClick={() => {
                // alert("your cart will be cleared!");1
                dispatch(clearCart());
              }}
            >
              Clear Cart
            </button>
          </div>
          {cartItems.map((oneitem) => {
            const { id, name, price, defaultPrice, description, imageId } =
              oneitem;
            return (
              <div className="Menu-Card m-auto my-6 w-full" key={id}>
                <div className="info">
                  <h2 className="font-styling text-lg font-bold">{name}</h2>
                  <h2 className="font-styling font-semibold">
                    &#8377; {price ? price / 100 : defaultPrice / 100}
                  </h2>
                  <p className="font-styling">{description}</p>
                </div>
                <div className="Menu-imgContainer">
                  <img src={CDN_URL + imageId} alt={name} />
                  {/* fix the remove items button */}
                  <button
                    className="addToCart font-styling w-1/2 text-center flex justify-center"
                    onClick={() => dispatch(removeItem(id))}
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div className="absolute top-[138px] text-4xl right-4 w-[40%] h-[80%] bg-gray-100 rounded-2xl p-6 text-center mx-5 flex flex-col ">
        <h1>Total Price</h1>
        <div className="mt-5">
          &#8377;
          {cartItems.reduce((acc, curr) => {
            return (acc += curr.price
              ? curr.price / 100
              : curr.defaultPrice / 100);
          }, 0)}
        </div>
        <button className="pay-btn absolute bottom-3 w-[70%] ml-20">Pay</button>
      </div>
    </div>
  );
};

export default Cart;
