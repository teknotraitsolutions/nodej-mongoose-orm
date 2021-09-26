const examService = require("../services/examService");

const addExam = async(req, res) => {
    try {
        if (userRole == 1) {
            const examServiceData = examService.addExam(req, res);
        } else {
            return res.status(401).json({ "error": "You dont have access to perform this action" });
        }
    } catch (e) {
        console.log(e);
    }
}

const getExam = async(req, res) => {
    try {
        const examServiceData = examService.getExam(req, res);
    } catch (e) {
        console.log(e);
    }
}

const updateExam = async(req, res) => {
    try {
        if (userRole == 1) {
            const examServiceData = examService.updateExam(req, res);
        } else {
            return res.status(401).json({ "error": "You dont have access to perform this action" });
        }
    } catch (e) {
        console.log(e);
    }
}

const deleteExam = async(req, res) => {
    try {
        if (userRole == 1) {
            const examServiceData = examService.deleteExam(req, res);
        } else {
            return res.status(401).json({ "error": "You dont have access to perform this action" });
        }
    } catch (e) {
        console.log(e);
    }
}

const getExamQuestions = async(req, res) => {
    try {
        const examServiceData = examService.getExamQuestions(req, res);
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    addExam,
    getExam,
    updateExam,
    deleteExam,
    getExamQuestions
}