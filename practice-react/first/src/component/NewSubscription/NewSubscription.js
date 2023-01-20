import React from "react";
import NewSubscriptionForm from "./NewSubscriptionForm";

function NewSubscription(props) {
  const onSaveHandler = (data) => {
    const newSubscriptionData = {
      ...data,
      id: (Math.random() * 100000).toString(),
    };
    props.onSave(newSubscriptionData);
  };
  return (
    <div>
      <h2> NewSubscription</h2>
      <NewSubscriptionForm onSave={onSaveHandler} />
    </div>
  );
}

export default NewSubscription;
