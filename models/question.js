module.exports = mongoose => {
    var schema = new mongoose.Schema({
        title: String
    }, { timestamps: true });

    const Question = mongoose.model("questions", schema);
    return Question;
};