const express = require("express");
const router = express.Router();

router.get("/health", (req, res) => {
    res.json("Healthy");
});

//Include routes
const userRoutes = require("./userRoute");


router.use('/user', userRoutes);

module.exports = router;