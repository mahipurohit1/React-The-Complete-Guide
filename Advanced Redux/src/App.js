import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { FetchData, sendData } from "./Store/UiSlice";
import Notification from "./components/UI/Notification";
let isInitial = true;

function App() {
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notificationIsVisible = useSelector(
    (state) => state.ui.notificationIsVisible
  );
  useEffect(() => {
    dispatch(FetchData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendData(cart));
    }
    // dispatch(
    //   notification({
    //     status: "pending",
    //     title: "pending",
    //     message: "data is sending",
    //   })
    // );
    // const sentData = async function () {
    //   const response = await fetch(
    //     "https://react-http-a18e4-default-rtdb.firebaseio.com/cart.json",
    //     {
    //       method: "PUT",
    //       body: JSON.stringify(cart),
    //     }
    //   );
    //   if (!response.ok) {
    //     throw new Error("something went wrong");
    //   }

    //   const data = await response.json();
    //   dispatch(
    //     notification({
    //       status: "success",
    //       title: "success",
    //       message: "data is sent successfully",
    //     })
    //   );
    // };
    // sentData().catch(() => {
    //   dispatch(
    //     notification({
    //       status: "error",
    //       title: "error",
    //       message: "something went wrong",
    //     })
    //   );
    // });
  }, [cart, dispatch]);
  return (
    <>
      {notificationIsVisible && (
        <Notification
          status={notificationIsVisible.status}
          message={notificationIsVisible.message}
          title={notificationIsVisible.title}
        />
      )}

      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
