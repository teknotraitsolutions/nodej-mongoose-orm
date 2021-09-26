const db = require("../models/index");
const User = db.user;
const Exam = db.exam;
const Question = db.question;
const ExamQuestion = db.exam_question;
const bcrypt = require("bcryptjs");
const authService = require("../shared/auth.service");


const addExam = async(req, res) => {
    const exam_name = req.body.exam_name;

    await Exam.find({ exam_name }).then(data => {
        if (data.length) {
            // Response with error message
            res.status(401).send({ message: "Exam Name is already exist" });
        } else {
            // Insert
            let examData = {
                exam_name
            };
            Exam.create(examData);
            res.status(200).send({ message: "Exam created successfully" });
        }
    });
}

const getExam = async(req, res) => {
    const exam_id = req.params.exam_id;
    if (exam_id != 0) {
        Exam.find({ _id: exam_id })
            .then(data => {
                if (data.length) {
                    // Response with error message
                    res.status(401).send({ message: "Fetched", data });
                } else {

                }
            })
            .catch(e => {
                console.log(e);
            });
    } else {
        await Exam.find({ exam_name: { $nin: [''] } })
            .then(data => {
                if (data.length) {
                    // Response with error message
                    res.status(401).send({ message: "Fetched", data });
                } else {

                }
            })
            .catch(e => {
                console.log(e);
            });
    }
}


const updateExam = async(req, res) => {
    const exam_id = req.params.exam_id;
    const exam_name = req.body.exam_name;

    await Exam.find({ exam_name, _id: { $nin: [exam_id] } })
        .then(data => {
            if (data.length) {
                res.status(401).json({ message: "Exam name already exist" });
            } else {
                Exam.findOneAndUpdate({ _id: exam_id }, req.body, { useFindAndModify: false }, function(err, result) {
                    if (err) {
                        console.log(err);
                    } else {
                        res.status(200).send({ message: "Exam Updated", data: exam_id + " " + exam_name });
                    }
                });
            }
        })

}


const deleteExam = async(req, res) => {
    const exam_id = req.params.exam_id;

    await Exam.findOneAndDelete({ _id: exam_id }, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            res.status(200).send({ message: "Exam Deleted", data: exam_id });
        }
    });
}


const getExamQuestions = async(req, res) => {
    const exam_id = req.params.exam_id;
    // console.log(exam_id)
    await ExamQuestion.find({ exam_id: exam_id })
        .populate("question")
        .then(data => {
            if (data.length) {
                // Response with error message
                res.status(401).send({ message: "Fetched", data });
            } else {

            }
        })
        .catch(e => {
            console.log(e);
        });
    // ..and populate all of the notes associated with it
    // .populate("exam_question")
    // .then(dbProduct => {
    //     // If we were able to successfully find an Product with the given id, send it back to the client
    //     res.json(dbProduct);
    // })
    // .catch(function(err) {
    //     // If an error occurred, send it to the client
    //     res.json(err);
    // });
}



module.exports = {
    addExam,
    getExam,
    updateExam,
    deleteExam,
    getExamQuestions
}