import express from "express"
const router = express.Router();
import { body } from "express-validator"
import { registerUser } from "../controllers/user.controller.js";

router.post("/register", [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullName.firstName").isLength({ min: 3 }).withMessage("First name must be at least 3 characters"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters")
], registerUser)


export default router;