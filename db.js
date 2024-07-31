const mongoose = require("mongoose");

// const MONGODB_URI = "mongodb://127.0.0.1:27017/mern_admin";
// const URI = process.env.MONGODB_URI;
const URI = "mongodb://127.0.0.1:27017/mern_admin";
 

const connectDb = async () =>{
    try{
        await mongoose.connect(URI);
        console.log("connection successful to DB")
    }catch(error){
        console.log("database connection failed");
        process.exit(0);
    }
};

module.exports = connectDb;