const mongoose = require("mongoose")



const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DB_URI}/${process.env.DB_NAME}`, 
        {useNewUrlParser: true})
        console.log(`\nMongoDB connected !! DB HOST ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log('Connect DB Failed',error);
        process.exit(1)
    }
}

module.exports = connectDB