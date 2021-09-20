const userService = require("../services/userService");

const register = async(res, req) => {
    try {
        const userServiceData = userService.register();
    } catch (e) {
        console.log(e);
    }
}


module.exports = {
    register
}