
import jwt from "jsonwebtoken"
import UserModel from "../models/user.model.js"
import BlacklistToken from "../models/blacklistToken.model.js";
import CaptainModel from "../models/captain.model.js";

export const authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    const isBlacklisted = await BlacklistToken.findOne({ token: token })
    if (isBlacklisted) {
        return res.status(401).json({ message: "unauthorized access" })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await UserModel.findById(decoded._id);
        req.user = user;
        return next();
    } catch (error) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }
}

export const authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    const isBlacklisted = await BlacklistToken.findOne({ token: token })
    if (isBlacklisted) {
        return res.status(401).json({ message: "unauthorized access" })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await CaptainModel.findById(decoded._id); 
        req.captain = user;
        return next();
    } catch (error) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }
}