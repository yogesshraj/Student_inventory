var knex = require("../model/knex");

module.exports = (req,res)=>{

    knex.select("*").from("login_table")
        .then(result=>{
            for (var i of result){
                if(i.username===req.body.username){
                    knex.select("*").from("data_table")
                    .then(data=>{
                        for (var j of data){
                            if (j.username===req.body.username){
                                return res.status(404).send("Oops!! Your profile is already there!")
                            }
                        }
                        knex("data_table").insert(req.body)
                        .then(data=>{
                            res.status(202).send("Your data has been inserted successfully!!!")
                        })
                        .catch(err=>{
                            res.status(404).send(err);
                        })
                    })
                }
            }
        })
}
