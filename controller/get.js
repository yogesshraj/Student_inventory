const knex = require("../model/knex");

exports.getall = (req,res)=>{
    knex.select("*").from("data_table")
        .then(result=>{
            res.status(202).send(result)
        })
        .catch(err=>{
            res.status(404).send(err);
        });
};

exports.getId = (req,res)=>{
    knex.select("*").from("data_table").where("username",req.params.username)
        .then(result=>{
            res.status(202).send(result)
        })
        .catch(err=>{
            res.status(404).send(err);
        })
}