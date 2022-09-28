import db from '../models/index'
import bcrypt from 'bcryptjs'

function handleUserLogin(email, password) {
    return new Promise( async (resole, reject) => {
        try {
            let isExist = await checkUserEmail(email)
            let userData = {}
            if (isExist) {
                let user = await db.User.findOne({
                    attributes: ['email','password','roleId','firstName','lastName'],
                    where: { email: email },
                    raw: true
                })
                let check = await bcrypt.compareSync(password, user.password)
                if (check) {
                    userData.errCode = 0
                    userData.massagge = 'OK'
                    delete user.password
                    userData.user = user
                } else {
                    userData.errCode = 2
                    userData.massagge = 'Wrong password!'
                }
            } else {
                userData.errCode = 1
                userData.massagge = 'User not found!'
            }
            resole(userData)
        } catch (e) {
            reject(e)
        }
    })
    
}

function checkUserEmail(email) {
    return new Promise( async (resole, reject) => {
        try {
            let user = await db.User.findOne({
                where: {email: email}
            })
            if (user) {
                resole(true)
            } else {
                resole(false)
            }
        } catch (e) {
            reject(e)
        }
    })
}
export default {
    handleUserLogin
}