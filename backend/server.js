import express from "express";
import dotenv from "dotenv";


import connectToMongoDB from "./db/connectToMongoDB.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import { app, server } from "./socket/socket.js";


import cookieParser from "cookie-parser";


dotenv.config();

app.use(cookieParser());
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);




// app.get("/", (req, res) => {
// 	res.send("Hello World !");
// });




server.listen(PORT, () => {
	connectToMongoDB();
	console.log(`Server Running on port ${PORT}`);
});
