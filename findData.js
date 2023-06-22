const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://127.0.0.1";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("bookstore");
    const books = database.collection("books");

    // query for movies that have a runtime less than 15 minutes
    const query = {};

    const options = {
      // sort returned documents in ascending order by title (A->Z)
      sort: { title: 1 },
      // Include only the `title` and `imdb` fields in each returned document
    //   projection: { _id: 0, title: 1 },
    projection: { _id: 0,},
    };

    await FindDataa(books,query,options)

  } finally {
    await client.close();
  }
}
run().catch(console.dir);

async function FindDataa(books,query,options){
    const cursor = books.find(query, options);

    // print a message if no documents were found
    if ((await books.countDocuments(query)) === 0) {
      console.log("No documents found!");
    }

    for await (const doc of cursor) {
      console.dir(doc);
    }
}