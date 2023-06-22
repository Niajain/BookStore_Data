const { MongoClient } = require("mongodb");


// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://127.0.0.1";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("bookstore");
    const books = database.collection("bkstore");
    // create a document to insert
    const doc = {
      title: "Record of a Shriveled Datum",
      content: "No bytes, no problem. Just insert a document, in MongoDB",
    }
    const result = await books.insertOne(doc);

    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
