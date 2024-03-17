import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!)
        // , {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //     useCreateIndex: true,
        //     useFindAndModify: true,
        // } as ConnectOptions)
    } catch (error) {
        console.log("Error connecting to database", error);
    }
    const connection = mongoose.connection;
    if (connection.readyState >= 1) {
        console.log("Connected to Database!")
        return;
    }
    connection.on("error", () => console.log("connection failed"));
};
export default connectDB;