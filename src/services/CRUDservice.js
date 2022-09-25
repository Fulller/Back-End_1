import bcrypt from 'bcryptjs'
import db from '../models/index'
const saltRounds = bcrypt.genSaltSync(10);
let createNewUser = async (data) => {
    return new Promise( async (resole, reject) => {
        try {
            let hashPassWord = await hashUserPassWord(data.password)
            await db.User.create({
                email: data.email,
                password: hashPassWord,
                firstName: data.firstname,
                lastName: data.lastname,
                address: data.address,
                gender: data.gender===0?false:true,
                roleId: data.roleid,
                phoneNumber: data.phonenumber,
                positionId: data.positionId,
                image: data.image,
            })
            resole()
        } catch (e) {
            reject(e)
        }
    })
}

let hashUserPassWord =  (password) => {
    return new Promise( async (resole, reject) => {
        try {
            let hashPassWord = await bcrypt.hashSync(password, saltRounds)
            resole(hashPassWord)
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createNewUser
}