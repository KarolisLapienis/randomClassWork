const mongoose = require("mongoose");

const connectingDB = async () =>{
    try {
        const connect = await mongoose.connect(`${process.env.MONGO_DB_URL}`);
        console.log(`Connected ${connect.connection.host}`);
    }
    catch (error) {
        console.log(`Could not connect: ${error}`);
    }
};

module.exports = connectingDB