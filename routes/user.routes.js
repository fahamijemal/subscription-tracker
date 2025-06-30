import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) =>{
    res.send("Get all users");
});
userRouter.get("/:id", (req, res) =>{
    res.send("Get user details for user with ID: ");
})
userRouter.post("/", (req, res) =>{
    res.send("Create a new user");
})
userRouter.put("/:id", (req, res) =>{
    res.send("Update user with ID");
})

export default userRouter;
