import React, { useContext, useState } from "react";
import EditContext from "../store/Edit-context";

function NewSubscriptionForm(props) {
  const data = useContext(EditContext);

  const [inputData, setInputData] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const titleChangeHandler = (events) => {
    setInputData((prevState) => {
      return { ...prevState, title: events.target.value };
    });
  };
  const amountChangeHandler = (events) => {
    setInputData((prevState) => {
      return { ...prevState, amount: events.target.value };
    });
  };
  const dateChangeHandler = (events) => {
    setInputData((prevState) => {
      const date = events.target.value;
      return { ...prevState, date: date };
    });
  };
  const submitHandler = (events) => {
    events.preventDefault();
    const NewSubscription = {
      title: inputData.title,
      amount: inputData.amount,
      date: new Date(inputData.date),
    };
    props.onSave(NewSubscription);

    setInputData({
      title: "",
      amount: "",
      date: "",
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor=""> title</label>
        <input
          type="text"
          onChange={titleChangeHandler}
          value={inputData.title}
        />
      </div>
      <div>
        <label htmlFor=""> amount</label>
        <input
          type="number"
          onChange={amountChangeHandler}
          value={inputData.amount}
        />
      </div>
      <div>
        <label htmlFor="">Date</label>
        <input
          type="date"
          onChange={dateChangeHandler}
          value={inputData.date}
          required
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default NewSubscriptionForm;
