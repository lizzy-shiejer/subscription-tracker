// import cookieParser from "cookie-parser";
import express from "express";
import { PORT } from "./config/env.js";
import connectToDatabase from "./database/mongodb.js";
import arcjetMiddleware from "./middleware/arcjet.middleware.js";
import errorMiddleware from "./middleware/error.middleware.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import userRouter from "./routes/user.routes.js";
import workflowRouter from "./routes/workflow.routes.js";

const app = express();

// Express Mdiddleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser);
//  -> the request is just being processed without any response
app.use(arcjetMiddleware);

// Registering Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);
app.use("/api/v1/workflows", workflowRouter);


// Middleware
app.use(errorMiddleware);

app.get("/", (req, res) => res.send("Enry Point"));

// Listening PORT
app.listen(PORT, async () => {
	console.log(`Server started on port http://localhost:${PORT}`);

	await connectToDatabase();
});

export default app;
