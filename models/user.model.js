import mongoose from "mongoose"; 

const userSchema = new mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            required: true,
            minlength: [3, "First name must be at least 3 characters long"],
        },
        lastName: {
            type: String,
            minlength: [3, "Last name must be at least 3 characters long"],
        }
    },
    email: {
        type: String,
        required: true,
        minlength: [5, "Email must be at least 5 characters long"],
    },
    password: {
        type: String,
        required: true,
        select: false,  // it will not go to the user by default when we will find it.
    },
    socketId: {
        type: String,
    },
});



 


const UserModel = mongoose.model("user", userSchema);
export default UserModel;


