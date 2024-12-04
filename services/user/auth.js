const User = require("../../models/user/user")


class AuthService {
    constructor() {
        this.user = User;
        this.userDailyActivities = UserDailyActivities;
        this.userMeal = UserMeal;
    }

    async UserSignup(userData) {
        console.log(userData);
    }

    async UserLogin(userData) {
        console.log(userData);
    }

    async ForgotPassword(userData) {
        console.log(userData);
    }

    async UpdatePassword(userData) {
        console.log(userData);
    }

    async ResetPassword(userData) {
        console.log(userData);
    }
}

module.exports = AuthService;
