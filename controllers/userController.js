const userService = require("../services/userService");

const register = async(req, res) => {
    try {
        const userServiceData = userService.register(req, res);
    } catch (e) {
        console.log(e);
    }
}

const login = async(req, res) => {
    try {
        const userServiceData = userService.login(req, res);
    } catch (e) {
        console.log(e);
    }
}


module.exports = {
    register,
    login
}