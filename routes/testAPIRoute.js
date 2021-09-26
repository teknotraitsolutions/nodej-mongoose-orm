const express = require("express");

const userRoute = express.Router();

const testAPIService = require("../services/test");

userRoute.post("/product", testAPIService.product);
userRoute.post("/review/:id", testAPIService.review);
userRoute.get("/getProductDetails/:id", testAPIService.getProductDetails);
userRoute.post("/color", testAPIService.color);

module.exports = userRoute;