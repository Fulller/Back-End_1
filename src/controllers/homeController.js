import { json } from 'body-parser'
import db from '../models/index'
import CRUDservice from '../services/CRUDservice'
let getHomePage = async (req,res) =>{
    try{
        let data =  await db.User.findAll()
        return res.render('homepage.ejs',{data: JSON.stringify(data)})
    } catch (e) {
        console.log(e)
    }
}
let getAboutPage = (req,res) =>{
    return res.render('aboutpage.ejs')
}
let getCRUD = (req, res) => {
    return res.render('getcrud.ejs')
}
let postCRUD = async (req, res) => {
    await CRUDservice.createNewUser(req.body)
    console.log(req.body)
    return res.send('post crud')
}

module.exports = {
    getHomePage,
    getAboutPage,
    getCRUD,
    postCRUD
}