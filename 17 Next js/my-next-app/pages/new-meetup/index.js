import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import React from "react";
import Head from "next/head";
function newMeetup() {
  const router = useRouter();
  const newMeetupHandler = async (newMeetupData) => {
    const res = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(newMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    router.push("/");
  };
  return (
    <>
      <Head>
        <title>React MeetUp</title>
        <meta name="description" content="browse a new react meet up ..." />
      </Head>
      <NewMeetupForm onAddMeetup={newMeetupHandler}></NewMeetupForm>
    </>
  );
}

export default newMeetup;
