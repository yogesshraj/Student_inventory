const knex = require("../model/knex");

module.exports=(req,res,next)=>{
    knex.select("*").from("login_table")
        .then(result=>{
            for (var i of result){
                if(req.body.username==i.username){
                    console.log("yes it is there");
                    return res.status(404).send("Your profile is already being created");
                }
            }
            knex("login_table").insert(req.body)
            .then(data=>{
                res.status(202).json("Your profile is created successfully");
                })
        })
}