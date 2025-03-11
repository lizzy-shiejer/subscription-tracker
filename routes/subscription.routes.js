import { Router } from "express";
import {
	createSubscription,
	getUserSubscriptions,
	getAllSubscriptions,
	getSubscription,
} from "../controllers/subscription.controller.js";
import authorize from "../middleware/auth.middleware.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", getAllSubscriptions);
subscriptionRouter.get("/:id", getSubscription);
subscriptionRouter.post("/", authorize, createSubscription);
subscriptionRouter.put("/:id", (req, res) =>
	res.send({ message: "PUT subscription by ID" })
);
subscriptionRouter.delete("/:id", (req, res) =>
	res.send({ message: "DELETE subscription by ID" })
);
subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);
subscriptionRouter.put("/:id/cancel", (req, res) => {
	res.send({ message: "PUT cancel subscription by ID" });
});
subscriptionRouter.get("/upcoming-renewals", (req, res) => {
	res.send({ message: "GET upcoming renewal subscription" });
});

export default subscriptionRouter;
