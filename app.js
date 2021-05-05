const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

//SETUP DATABASE
mongoose.Promisse = global.Promisse;
mongoose.connect("mongodb://localhost/ws-nodejs-2", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//MIDLEWARES
app.use(morgan("dev"));
app.use(bodyParser.json());

//ROUTES
const jeKersRoutes = require("./routes/jeKersRoutes.js");
const pingRoutes = require("./routes/pingRoutes.js");

app.use("/jeKers", jeKersRoutes);
app.use("/ping", pingRoutes);

//  404 ERROR
app.use((req, res, next) => {
    const err = new Error("Not found");
    err.status = 404;
    next(err);
});

//CATCH OTHER ERRORS
app.use((err, req, res, next) => {
    const message = err;
    const status = err.status || 500;

    res.status(status).json({
        error: {
            message,
        },
    });
});

//START SERVER
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("SERVER STARTED AT ", port);
});
