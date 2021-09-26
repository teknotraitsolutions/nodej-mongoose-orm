const express = require("express");
const router = express.Router();

router.get("/health", (req, res) => {
    res.json("Healthy");
});

//Include routes
const userRoutes = require("./userRoute");
const examRoutes = require("./examRoute");
const testAPIRoutes = require("./testAPIRoute");

router.use('/user', userRoutes);
router.use('/exam', examRoutes);
router.use('/testAPI', testAPIRoutes);

module.exports = router;