var express = require('express');
var router = express.Router();
var configHeader = require("../configs/config_Header");
var mongoose = require('mongoose');
var Product = require('../models/product');
var session = require('express-session');
var multer = require('multer');
var atob = require('atob');
const { query } = require('express');
var storage = multer.diskStorage({
    destination: function (req, file, xcallback) {
        xcallback(null, 'public/images');
    },
    filename: function (req, file, xcallback) {
        xcallback(null, file.originalname);
    }
});
var uploadStore = multer({ storage: storage });

const dbname = 'Shoplego';
const uri = 'mongodb+srv://chau14:1234@cluster0.gyuow.mongodb.net/Shoplego?retryWrites=true&w=majority';

/// --- Code CONTROLLERs
router.use(function timeLog (req, res, next) {
    console.log('\n\t Product controller - Time: ', Date.now());
    next();
})

router.get('/', payment);

function payment(req,res){
    var price = req.query.price;
    
    var xcontent = "";

    console.log('\t ... get PAYMENT INF ! ');

    var strtext = req.cookies.cart_itemlist;
    xcontent += "<BR><p> " + strtext + "</p>";
    //
    strtext = atob(strtext);
    xcontent += "<BR>atob <p> " + strtext + "</p>";
    //
    strtext = escape(strtext);
    xcontent += "<BR>escape <p> " + strtext + "</p>";
    //
    strtext = decodeURIComponent(strtext);
    xcontent += "<BR>decodeURIComponent <p> " + strtext + "</p>";
    ///
    var itemlist  = JSON.parse(strtext);

    console.log("\n\t ", xcontent);
    
 
    res.render("pages/payment", {title: "ATN-Shop Payment USER page", Notify: "",prices:price, content: xcontent , itemlist: itemlist, configHeader: configHeader , currpage: "Payment" });
}
module.exports = router;