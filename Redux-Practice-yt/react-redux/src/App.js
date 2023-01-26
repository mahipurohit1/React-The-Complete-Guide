import "./App.css";
import CakeView from "./Components/Cake/CakeView";
import IceCreamView from "./Components/Icecream/IceCreamView";
import { Provider } from "react-redux";
import store from "./App/Store";
function App() {
  return (
    <div>
      <Provider store={store}>
        <CakeView></CakeView>
        <IceCreamView></IceCreamView>
      </Provider>
    </div>
  );
}

export default App;
