import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
     // add a link 
    );
    const db = client.db();
    const meetupCollections = db.collection("meetup");
    const result = await meetupCollections.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "data insert successfully" });
  }
}
export default handler;
