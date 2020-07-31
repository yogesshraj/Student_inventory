const knex = require("../model/knex");

exports.getall = (req,res)=>{
    knex.select("*").from("data_table")
        .then(result=>{
            res.status(202).send(result)
        })
};

exports.getId = (req,res)=>{
    knex.select("*").from("data_table").where("username",req.params.username)
        .then(result=>{
            res.status(202).send(result)
        })
}
