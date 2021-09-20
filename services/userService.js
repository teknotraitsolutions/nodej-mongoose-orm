const db = require("../models/index");
console.log(db);
const User = db.user;


const register = async(res, req) => {
    console.log("Working");
}


module.exports = {
    register
}