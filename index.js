import mongodb from "mongodb";

const client = new mongodb.MongoClient(
  "mongodb+srv://wadebooth:Password@cluster0.nrzns.mongodb.net?retryWrites=true&w=majority"
);

await client.connect();
console.log("Connected!");
