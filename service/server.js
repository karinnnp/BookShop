import express from "express";
import bodyParser from "body-parser";
import userRoute from "./server/UserServer";
import productRoute from "./server/ProductServer";
import orderRoute from "./server/OrderServer";

const server = new express()

server.use(express.static("client"));
server.use(bodyParser.urlencoded({extended: true}));

server.use("/user", userRoute);
server.use("/product", productRoute);
server.use("/order", orderRoute);

const port = 8000;
server.listen(port, () => console.log(`server running on port ${port}`))