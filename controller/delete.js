const jwt = require("jsonwebtoken");
const knex = require("../model/knex");

module.exports= (req,res)=>{
    knex("login_table").where("username",req.body.username).del()
        .then(result=>{
            knex("data_table").where("username",req.body.username).del()
                .then(data=>{
                    return res.status(202).send("successfully deleted the profile with username named= "+req.body.username);
                })
        })
}
