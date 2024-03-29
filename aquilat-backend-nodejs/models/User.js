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
        trim: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        trim: true
    },

    date_of_birth: {
        type: Array,
        required: true
    },

    user_name: {
        type: String,
        require: true,
        unique: true
    },

    image_url: {
        type: String,
    }
})

// user model
const UserModel = mongoose.model("user", userSchema)
export default UserModel