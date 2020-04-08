/*
const mongoose = require('mongoose');

//Connect to MongoDB

mongoose.connect('mongodb+srv://bryan:kuuga@cluster0-8y4uv.mongodb.net/test?retryWrites=true&w=majority');

mongoose.connection.once('open',function()
{
    console.log('Connection has been made, now make fireworks..');
}).on('error',function(error)
{
    console.log('Connection error:',error);
});
*/


const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://bryan:kuuga@cluster0-8y4uv.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
  const collection = client.db("restaurant").collection("user");
  // perform actions on the collection object
  console.log("connected");
  client.close();
});

/*

const mongoose = require('mongoose');

const URI = "mongodb+srv://bryan:kuuga@cluster0-8y4uv.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async ()=> {
  await mongoose.connect(URI, {
    useUnifiedTopology: true, 
      useNewUrlParser: true
    })
  console.log('database connected..');
}

module.exports = connectDB;

*/