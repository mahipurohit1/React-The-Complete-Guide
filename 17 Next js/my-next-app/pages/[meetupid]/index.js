import MeetupDetail from "@/components/meetups/MeetupDetail";
import React from "react";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

function meetupDetailed(props) {
  return (
    <>
      <Head>
        <title>React MeetUp</title>
        <meta name="description" content="browse a new react meet up ..." />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      ></MeetupDetail>
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://test:test@cluster0.kh5sre0.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupCollections = db.collection("meetup");
  const result = await meetupCollections.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    paths: result.map((meetup) => {
      return { params: { meetupid: meetup._id.toString() } };
    }),

    fallback: false,
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupid;
  const client = await MongoClient.connect(
    "mongodb+srv://test:test@cluster0.kh5sre0.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupCollections = db.collection("meetup");
  const result = await meetupCollections.findOne({ _id: ObjectId(meetupId) });

  client.close();
  return {
    props: {
      meetupData: {
        id: result._id.toString(),
        title: result.title,
        address: result.address,
        image: result.image,
        description: result.description,
      },
    },
  };
}
export default meetupDetailed;
