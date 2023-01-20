import { useState } from "react";
import "./App.css";
import NewSubscription from "./component/NewSubscription/NewSubscription";
import Subscription from "./component/Subscription/Subscription";
import EditContext from "./component/store/Edit-context";

const DUMMY_DATA = [
  {
    id: 1,
    date: new Date(1995, 11, 17),
    title: "i am ",
    amount: "$120.50",
  },
  {
    id: 2,
    date: new Date(2020, 3, 15),
    title: "i am id 2 ",
    amount: "$150.50",
  },
  {
    id: 3,
    date: new Date(2020, 11, 15),
    title: "i am man ",
    amount: "$10.50",
  },
];
function App() {
  const [isEditable, setIsEditable] = useState(false);
  const [items, setItems] = useState(DUMMY_DATA);
  const editHandler = () => {
    setIsEditable(true);
  };

  const onSaveHandler = (data) => {
    setItems((prevState) => {
      return [...prevState, data];
    });
  };
  return (
    <div>
      <EditContext.Provider value={{ editHandler, isEditable }}>
        <NewSubscription onSave={onSaveHandler} />

        {items.map((item) => {
          return <Subscription data={item} />;
        })}
      </EditContext.Provider>
    </div>
  );
}

export default App;
