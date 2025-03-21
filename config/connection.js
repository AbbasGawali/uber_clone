import dotenv from "dotenv"
dotenv.config();
import mongoose from "mongoose";

const connectDb = () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("Connection Success")
    }).catch((err) => {
        console.log(`Connection Failed with : ${err}`)
    })
}
connectDb();