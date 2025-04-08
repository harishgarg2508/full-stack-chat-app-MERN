import express from "express";
import dotenv from "dotenv";


import connectToMongoDB from "./db/connectToMongoDB.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import cookieParser from "cookie-parser";


dotenv.config();

const app = express();
app.use(cookieParser());
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);




// app.get("/", (req, res) => {
// 	res.send("Hello World !");
// });




app.listen(PORT, () => {
	connectToMongoDB();
	console.log(`Server Running on port ${PORT}`);
});
