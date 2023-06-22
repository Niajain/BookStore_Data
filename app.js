const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://127.0.0.1";

const client = new MongoClient(uri);

async function run() {
    
  try {
    await client.connect();
    const database = client.db("bookstore");
    const books = database.collection("books");
   
    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Love is Beautiful' };
    const book = await books.findOne(query);

    console.log(book);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

