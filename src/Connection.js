/*


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
const mongoose = require("mongoose");
// const MongoClient = require("mongodb").MongoClient;

const uri =
  "mongodb+srv://bryan:kuuga@cluster0-8y4uv.mongodb.net/test?retryWrites=true&w=majority";

// const client = new MongoClient(uri, { useNewUrlParser: true });
const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDb connected...");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = connectDB;
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
