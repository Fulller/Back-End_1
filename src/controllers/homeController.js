import { json } from 'body-parser'
import db from '../models/index'
import CRUDservice from '../services/CRUDservice'
let getHomePage = async (req,res) =>{
    return res.render('homepage.ejs')
}
let getAboutPage = (req,res) =>{
    return res.render('aboutpage.ejs')
}
let getCRUD = (req, res) => {
    return res.render('getcrud.ejs')
}
let postCRUD = async (req, res) => {
    await CRUDservice.createNewUser(req.body)
    return res.render('homepage.ejs')
}

let displayCRUD = async (req, res) => {
    let data =  await CRUDservice.getAllData();
    return res.render('displayCRUD.ejs',{dataTable: data});
}

let editCRUD = async (req, res) => {
    let userId = req.query.id;
    let User = await CRUDservice.getUserById(userId);
    return res.render('editCRUD.ejs',{User:User})
}

let updateCRUD = async (req, res) => {
    let body = req.body;
    let allData = await CRUDservice.updataUser(body);
    return res.render('displayCRUD.ejs',{dataTable: allData});
}

let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDservice.deteleUser(id)
        let allData = await CRUDservice.getAllData();
        return res.render('displayCRUD.ejs',{dataTable: allData});
    } else {
        return res.send("User node found");
    }
}

module.exports = {
    getHomePage,
    getAboutPage,
    getCRUD,
    postCRUD,
    displayCRUD,
    editCRUD,
    updateCRUD,
    deleteCRUD
}