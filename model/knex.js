const knex = require("knex");

module.exports = require("knex")({
    client: "mysql",
    connection:{
        host:"localhost",
        user:"root",
        password:"navgurukul",
        database:"student_inventory"
    }
});