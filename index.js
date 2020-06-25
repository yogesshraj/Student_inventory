const express =  require("express");
const morgan = require("morgan");
const body_parser = require("body-parser");
const app = express();

app.use(morgan("dev"));
app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());


app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
    res.header("Access-Contol-Allow-Header","Origin,X-Requested-With,Content-Type,Accept");
    if (req.method=="OPTIONS"){
        res.setheader("Access-Control-Allow-Methods","GET,POST,PUT,DELETE");
        return res.status(200).json({});
    };
    next();
});

app.use(require("./router/login"));
app.use(require("./router/signup"));
app.use(require("./router/delete"));
app.use(require("./router/post"));
app.use(require("./router/get"));
app.use(require("./router/put"))

//This middleware is for error handling which when the above command is not executed in postman instead of that we can give some usefull err
app.use((req,res,next)=>{
    const error = new Error("Not found");
    error.status=(404);
    next(error);
});

//This is also a middleware which handles error when sometimes our databases doesn't works and also it passes the above middleware (404 for normal bug 500 for databases)
app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.sendStatus(error.status)
});

var port = 9992;
app.listen(port);
console.log("listening on port ",port);
