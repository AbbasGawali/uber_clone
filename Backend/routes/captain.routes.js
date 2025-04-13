import express from "express"
import { getCaptainProfile, loginCaptain, logoutCaptain, registerCaptain } from "../controllers/captain.controller.js";
const router = express.Router();
import { body } from "express-validator"
import { authCaptain } from "../middlewares/auth.middleware.js";

router.post("/register", [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullName.firstName").isLength({ min: 3 }).withMessage("firstName must be at least 3 characters"),
    body("password").isLength({ min: 3 }).withMessage("password must be at least 3 characters"),
    body("vehicle.color").isLength({ min: 3 }).withMessage("color must be at least 3 characters"),
    body("vehicle.plate").isLength({ min: 3 }).withMessage("plate must be at least 3 characters"),
    body("vehicle.capacity").isNumeric().withMessage("capacity must be a number"),
    body("vehicle.type").isLength({ min: 3 }).withMessage("type must be at least 3 characters"),

], registerCaptain)

router.post("/login", [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({ min: 3 }).withMessage("password must be at least 3 characters"),
], loginCaptain)


router.get("/profile", authCaptain, getCaptainProfile)
router.get("/logout", authCaptain, logoutCaptain)
export default router;