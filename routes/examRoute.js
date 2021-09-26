const express = require("express");

const examRoute = express.Router();
const examController = require("../controllers/examController");
const authService = require("../shared/auth.service");

examRoute.post("/addExam", authService.validateToken, examController.addExam);
examRoute.get("/getExam/:exam_id", authService.validateToken, examController.getExam);
examRoute.put("/updateExam/:exam_id", authService.validateToken, examController.updateExam);
examRoute.delete("/deleteExam/:exam_id", authService.validateToken, examController.deleteExam);
examRoute.get("/getExamQuestions/:exam_id", authService.validateToken, examController.getExamQuestions);

module.exports = examRoute;