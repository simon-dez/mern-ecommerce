// Middleware to verify JWT token
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = (req, res, next) => {
    let token = req.headers.authorization;
  
    if (token && token.startsWith("Bearer ")) {
      token = token.split(" ")[1]; // Extract token
    } else {
      return res.status(401).json({ message: "No token provided" }); // No token in header
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
      req.user = decoded; // Attach decoded user info to the request object
      next();
    } catch (error) {
      console.error("JWT Error:", error); // Log JWT verification errors
      return res.status(401).json({ message: "Invalid or expired token" }); // Token error
    }
  };
  