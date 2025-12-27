import { JWT_SECRET } from "./config.js";
import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Authorization failed" });
  } else {
    const token = authHeader.split(" ")[1];
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
    //   console.log("Decoded token:", decoded);
      req.userId = decoded.userId;
      next();
    } catch (err) {
      return res.status(401).json({ message: "Authorization failed" });
    }
  }
};
