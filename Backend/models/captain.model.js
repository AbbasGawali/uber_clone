
import mongoose from "mongoose";

const captainSchema = new mongoose.Schema({
    fullName: {
        firstName: {

            type: String,
            required: true,
            minlength: [3, "Firstname must be at least 3 characters long"],
        },
        lastName: {
            type: String,
            minlength: [3, "Firstname must be at least 3 characters long"],
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        required: true,
        type: String,
        select: false, // it will not go to the user by default when we will find it.
    },
    socketId: {
        type: String,
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "inactive"
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [3, "color must be at least 3 characters long"],
        },
        plate: {
            type: String,
            required: true,
            unique: true,
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, "capacity must be at least 1"],
        },
        type: {
            required: true,
            type: String,
            enum: ["car", "motorcycle", "auto"]
        }
    },
    location: {
        lat: {
            type: Number,
        },
        lng: {
            type: Number,
        }
    }

})

const CaptainModel = mongoose.model("captain", captainSchema);
export default CaptainModel;