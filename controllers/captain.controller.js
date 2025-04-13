import { validationResult } from 'express-validator';
import CaptainModel from '../models/captain.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import BlacklistToken from '../models/blacklistToken.model.js';

export const registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullName, email, password, vehicle } = req.body;
    if (!fullName.firstName || !email || !password || !vehicle) {
        throw new Error("All fields are required!")
    }

    const isCaptionMatch = await CaptainModel.findOne({ email: email });
    if (isCaptionMatch) {
        return res.status(400).json({ success: false, message: "captain already exists " });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const captain = await CaptainModel.create({
        fullName: {
            firstName: fullName.firstName,
            lastName: fullName.lastName,
        },
        email,
        password: hashPassword,
        vehicle: {
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            type: vehicle.type,
        },

    })

    const token = jwt.sign({ _id: captain._id }, process.env.JWT_SECRET, { expiresIn: "24h" })

    res.status(201).json({
        success: true,
        token,
        captain
    })
}

export const loginCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    if (!email || !password) {
        throw new Error("All fields are required!")
    }

    const captain = await CaptainModel.findOne({ email: email }).select("+password");
    if (!captain) {
        return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, captain.password)
    if (!isMatch) {
        return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    const token = jwt.sign({ _id: captain._id }, process.env.JWT_SECRET, { expiresIn: "24h" })
    res.cookie("token", token)

    res.status(200).json({
        success: true,
        token, captain
    })
}

export const getCaptainProfile = (req, res, next) => {
    res.status(200).json({
        success: true,
        captain: req.captain
    })
}


export const logoutCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    await BlacklistToken.create({ token: token });
    res.clearCookie("token");
    res.status(200).json({
        success: true,
        message: "Logout successfully"
    })
}