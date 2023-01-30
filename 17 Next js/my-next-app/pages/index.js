import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import React from "react";
import Head from "next/head";
function Homepage(props) {
  return (
    <>
      <Head>
        <title>React MeetUp</title>
        <meta name="description" content="browse a new react meet up ..." />
      </Head>
      <MeetupList meetups={props.meetup}></MeetupList>;
    </>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetup: DUMMY_LIST,
//     },
//   };
// }

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://test:test@cluster0.kh5sre0.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupCollections = db.collection("meetup");
  const data = await meetupCollections.find().toArray();

  return {
    props: {
      meetup: data.map((meetup) => {
        return {
          id: meetup._id.toString(),
          title: meetup.title,
          address: meetup.address,
          image: meetup.image,
          description: meetup.description,
        };
      }),
    },
    revalidate: 10,
  };
}

export default Homepage;
