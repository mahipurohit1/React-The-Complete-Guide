import React, { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";

function App() {
  const [IsCartShown, SetIsCartShown] = useState(false);

  const showCartHandler = function () {
    SetIsCartShown(true);
  };
  const hideCartHandler = function () {
    SetIsCartShown(false);
  };
  return (
    <>
      {IsCartShown && <Cart onCloseCart={hideCartHandler} />}
      <Header onOpenCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
