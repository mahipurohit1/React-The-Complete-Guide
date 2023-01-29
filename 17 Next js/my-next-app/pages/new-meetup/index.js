import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import React from "react";

function newMeetup() {
  const newMeetupHandler = (newMeetupData) => {
    console.log(newMeetupData);
  };
  return <NewMeetupForm onAddMeetup={newMeetupHandler}></NewMeetupForm>;
}

export default newMeetup;
