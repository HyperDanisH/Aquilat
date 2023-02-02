import mongoose from "mongoose";

mongoose.set('strictQuery', false)
const connectdb = async(DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: "aquilat-official_database"
        }
        await mongoose.connect(DATABASE_URL, DB_OPTIONS)
        console.log("db connected")
    } catch (error) {
        console.log(error)
    }
}

export default connectdb