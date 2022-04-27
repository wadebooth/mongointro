import mongodb from "mongodb"; //Always do this

const client = new mongodb.MongoClient(
  "mongodb+srv://wadebooth:Password@cluster0.nrzns.mongodb.net?retryWrites=true&w=majority"
);

await client.connect();
console.log("Connected!");
const db = client.db("trial"); // Creates database
const collection = db.collection("users");
await collection.insertOne({
  firstName: "Manny",
  lastName: "Toribio",
  carCrash: true,
});

await client.close();
