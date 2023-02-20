import { Router } from "express";

const userRoute = Router();

userRoute.get("/user", (req, res) => {
    res.send('get user')
})

userRoute.post("/user", (req, res) => {
    res.send('post user')
})

export default userRoute