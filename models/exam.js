// const { Schema, model } = require("mongoose");

// const ExamSchema = new Schema({
//     exam_name: {
//         type: String
//     },

//     questions: [{ type: Schema.Types.ObjectId, ref: "Question" }]
// });

// const QuestionSchema = new Schema({
//     title: {
//         type: String
//     },
//     questions: [{ type: Schema.Types.ObjectId, ref: "Exam" }]
// });


// export const Exam = model("Question", QuestionSchema);
// export const Question = model("Question", ExamSchema);

module.exports = mongoose => {
    var schema = new mongoose.Schema({
        exam_name: String
    }, { timestamps: true });

    const Exam = mongoose.model("exams", schema);
    return Exam;
};