import MeetupList from "@/components/meetups/MeetupList";
import React from "react";
const DUMMY_LIST = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "new first meet up",
    address: "new city light surat",
    description: "first meet up ",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "new second meet up",
    address: "new city light surat",
    description: "second meet up ",
  },
];
function Homepage() {
  return <MeetupList meetups={DUMMY_LIST}></MeetupList>;
}

export default Homepage;
