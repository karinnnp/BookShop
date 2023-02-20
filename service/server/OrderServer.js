import { Router } from "express";

const orderRoute = Router()

orderRoute.get("/orders", (req, res) => {
    res.send('get orders')
})

orderRoute.get("/order/id", (req, res) => {
    res.send('get order by id')
})

orderRoute.post("/order", (req, res) => {
    res.send('post order')
})

orderRoute.put("/order/id", (req, res) => {
    res.send('put order by id')
})

export default orderRoute