require('dotenv').config();

const mongoose = require('mongoose');
const config = require('config');
const db = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log('Connected to MongoDB.');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

// Below is how to initialize the connection using a JS promise.
// mongoose
//   .connect(db, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//   })
//   .then(() => console.log('Connected to MongoDB.'))
//   .catch((err) => {
//     console.error(err.message);
//     process.exit(1);
//   });

module.exports = connectDB;
