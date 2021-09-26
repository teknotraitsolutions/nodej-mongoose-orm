module.exports = mongoose => {
    var schema = new mongoose.Schema({
        email: String,
        password: String,
        first_name: String,
        last_name: String,
        role: String
    }, { timestamps: true });

    const User = mongoose.model("users", schema);
    return User;
};