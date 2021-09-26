// var mongoose = require("mongoose");
// var Schema = mongoose.Schema;

// module.exports = mongoose => {
//     var schema = new mongoose.Schema({
//         exam_id: String,
//         question_id: String,
//         question: {
//             type: Schema.Types.ObjectId,
//             ref: "Question"
//         }

//     }, { timestamps: true });

//     const ExamQuestion = mongoose.model("exam_questions", schema);
//     return ExamQuestion;
// };

var mongoose = require("mongoose");

// Get the Schema constructor
var Schema = mongoose.Schema;

// Using Schema constructor, create a ProductSchema
var ProductSchema = new Schema({
    exam_id: String,
    question_id: String,
    question: {
        type: Schema.Types.ObjectId,
        ref: "Question"
    }
});

// Create model from the schema
var Product = mongoose.model("ExamQuestion", ProductSchema);

// Export model
module.exports = Product;