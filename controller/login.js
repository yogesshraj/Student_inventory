var knex = require("../model/knex")
var jwt = require("jsonwebtoken");

module.exports= (req,res)=>{
    let username = req.body.username;
    let password = req.body.password;
    knex.select("*").from("login_table")
        .then((result)=>{
            var username_End = false;
            var password_End = false;
            for (var data of result){
                if (data.username===username){
                    username_End = true;
                };
                if (data.password===password){
                    password_End = true
                };
            };
            if (username_End==false && password_End==false){
                res.status(404).send("login first");
            };
            if (username_End==true && password_End==false){
                res.status(404).send("Your password is wrong");
            };
            if (username_End==false && password_End==true){
                res.status(404).send("Your username is wrong");
            };
            if (username_End==true && password_End==true){
                console.log("login successful")
                jwt.sign(username,"secretkey",(err,token)=>{
                    if (username==="yogesshrajlakshmi"){
                        res.status(202).send("Welcome Admin!!! Your token is=>          "+token);
                    }else{
                        res.status(202).send("Welcome "+username+"!");
                    }
                });
            };
        });
}