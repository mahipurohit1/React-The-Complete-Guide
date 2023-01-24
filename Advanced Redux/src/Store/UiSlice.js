import { createSlice } from "@reduxjs/toolkit";
import { replaceCart } from "./CartSlice";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartIsVisible: false,
    notificationIsVisible: null,
  },
  reducers: {
    toggle: (state) => {
      state.cartIsVisible = !state.cartIsVisible;
    },
    notification: (state, action) => {
      state.notificationIsVisible = {
        status: action.payload.status,
        message: action.payload.message,
        title: action.payload.title,
      };
    },
  },
});

export const sendData = function (cart) {
  return (dispatch) => {
    dispatch(
      notification({
        status: "pending",
        title: "sending...",
        message: "data is sending....",
      })
    );
    const sentData = async function () {
      const response = await fetch(
        "https://react-http-a18e4-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            item: cart.item,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("something went wrong");
      }

      const data = await response.json();
      console.log(data);
      dispatch(
        notification({
          status: "success",
          title: "success",
          message: "data is sent successfully!!",
        })
      );
    };
    sentData().catch(() => {
      dispatch(
        notification({
          status: "error",
          title: "error",
          message: "something went wrong",
        })
      );
    });
  };
};
export const FetchData = function (cart) {
  return (dispatch) => {
    const sentData = async function () {
      const response = await fetch(
        "https://react-http-a18e4-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("something went wrong");
      }

      const data = await response.json();

      dispatch(
        replaceCart({
          item: data.item || [],
          totalQuantity: data.totalQuantity,
        })
      );
    };
    sentData().catch(() => {
      dispatch(
        notification({
          status: "error",
          title: "error",
          message: "something went wrong",
        })
      );
    });
  };
};
export default uiSlice.reducer;
export const { toggle, notification } = uiSlice.actions;
