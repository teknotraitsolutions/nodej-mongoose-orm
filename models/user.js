module.exports = mongoose => {
    let schema = new mongoose.Schema({
        email: String,
        password: String,
        first_name: String,
        last_name: String,
        role: Number
    }, { timestamp: true });

    const User = mongoose.model("users", schema);
    return User;
};