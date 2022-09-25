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
    return res.send('post crud')
}

let displayCRUD = async (req, res) => {
    let data =  await CRUDservice.getAllData();
    return res.render('displayCRUD.ejs',{dataTable: data});
}

module.exports = {
    getHomePage,
    getAboutPage,
    getCRUD,
    postCRUD,
    displayCRUD
}