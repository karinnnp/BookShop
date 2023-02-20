import { Router } from "express";

const productRoute = Router();

productRoute.get("/products", (req, res) => {
    res.send('get product')
})

productRoute.get(`/product/id}`, (req, res) => {
    res.send('get product')
})

export default productRoute