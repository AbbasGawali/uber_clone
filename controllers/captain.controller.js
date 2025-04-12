import { validationResult } from 'express-validator';
import CaptainModel from '../models/captain.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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
    if(isCaptionMatch) {
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