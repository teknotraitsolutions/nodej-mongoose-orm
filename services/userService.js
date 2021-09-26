const db = require("../models/index");
const User = db.user;
const bcrypt = require("bcryptjs");
const authService = require("../shared/auth.service");


const register = async(req, res) => {
    const { first_name, last_name, email, password } = req.body;
    const role_id = 2;
    const enc_password = bcrypt.hashSync(password);
    // console.log(enc_password);
    await User.find({ email }).then(data => {
        if (data.length) {
            // Response with error message
            res.status(401).send({ message: "Email is already exist" });
        } else {
            // Insert
            let userData = {
                first_name,
                last_name,
                email,
                role: role_id,
                password: enc_password
            };
            User.create(userData);
            res.status(200).send({ message: "User register successfully" });
        }
    })
}

const login = async(req, res) => {
    const { email, password } = req.body;

    await User.find({ email }).then(data => {
        if (data.length) {
            const db_password = data[0].password;

            const isMatched = bcrypt.compareSync(password, db_password);
            if (isMatched) {
                const payload = {
                    id: data[0]._id,
                    first_name: data[0].first_name,
                    last_name: data[0].last_name,
                    email: data[0].email,
                    role: data[0].role
                }
                const token = authService.generateToken(payload);
                res.status(200).send({ message: "User logged in successfully", token });
            } else {
                res.status(401).send({ message: "Invalid username or password" });
            }
        } else {
            res.status(401).send({ message: "Invalid username or password" });
        }
    })
}


module.exports = {
    register,
    login
}