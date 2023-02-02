import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        trim: true
    },

    password: {
        type: String,
        required: true,
        trim: true
    },

    date_of_birth: {
        type: Array,
        required: true
    }
})

// user model
const UserModel = mongoose.model("user", userSchema)
export default UserModel