import UserService from "../services/UserService";

async function handleLogin(req, res) {
    let email = req.body.email;
    let password = req.body.password;
    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs  parameter!'
        })
    } else {
        let userData = await UserService.handleUserLogin(email,password)
        return res.status(200).json(userData)
    }
}

export default {
    handleLogin
}