import { Router } from "express";
import { getUsers, getUser } from "../controllers/user.controller.js";
import authorize from "../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", authorize, getUser);
userRouter.post("/", (req, res) => res.send({ message: "POST user" }));
userRouter.put("/:id", (req, res) =>
	res.send({ message: `PUT user with id ${req.params.id}` })
);
userRouter.delete("/:id", (req, res) =>
	res.send({ message: `DELETE user with id ${req.params.id}` })
);

export default userRouter;
