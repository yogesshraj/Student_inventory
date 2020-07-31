const knex = require("../model/knex");

module.exports = (req,res)=>{
    knex("data_table").where({username:req.params.username}).update(req.body)
        .then(result=>{
            res.status(202).send("Your profile is updated successfully");
        })
}
