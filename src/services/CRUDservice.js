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

let getAllData = () => {
    return new Promise( async (resole, reject) => {
        try {
            let data = await db.User.findAll();
            resole(data)
        } catch (e) {
            reject(e)
        }
    })
}

let getUserById = async (useId) => {
    return new Promise( async (resole, reject) => {
        try {
            let user = await db.User.findOne({
                where: {id: useId}
            })
            if (user) {
                resole(user)
            } else {
                reject()
            }
        } catch (e) {
            console.log(e)
            reject()
        }
    })
}

let updataUser = async (body) => {
    return new Promise(async (resole, reject) => {
        try {
            let User = await db.User.findOne({
                where: { id: body.id }
            })
            console.log(User)
            if (User) {
                User.firstName = body.firstname
                User.lastName = body.lastname
                User.address = body.address
                await User.save()
            }
            let allData = await db.User.findAll()
            resole(allData)
        } catch (e) {
            console.log(e)
            reject()
        }
    })
}

module.exports = {
    createNewUser,
    getAllData,
    getUserById,
    updataUser
}