import express from "express"
const router = express.Router();
import { body } from "express-validator"
import { loginUser, registerUser } from "../controllers/user.controller.js";

router.post("/register", [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullName.firstName").isLength({ min: 3 }).withMessage("First name must be at least 3 characters"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters")
], registerUser)


router.post("/login", [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({ min: 6 }).withMessage("Password is required")
], loginUser)


export default router;