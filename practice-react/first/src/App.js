import "./App.css";
import Subscription from "./component/Subscription/Subscription";

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
  return (
    <div>
      <Subscription data={DUMMY_DATA[0]} />
      <Subscription data={DUMMY_DATA[1]} />
      <Subscription data={DUMMY_DATA[2]} />
    </div>
  );
}

export default App;
