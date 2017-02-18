
var express = require("express");
var mongoose = require("mongoose")

var app = express();
var a = (process.env.PORT || 3000)








var studentSchema = new mongoose.Schema({
    name: String
});
var studentModel = mongoose.model("student", studentSchema);
//Schema and model of database//




app.post("/add", function (req, res, next) {

    var newstudent = new studentModel({
        name: "ali"
    })



    newstudent.save(function (err, data) {
        if (!err) {
            res.send("saved")
        }
        else {
            res.send("error")
        }
    })

})






app.get("/userlist", function (req, res, next) {

    studentModel.find({}, function (err, data) {
        if (!err) {
            console.log(">>>> " + data);
            res.send( data)
        }
        else {
            console.log("error")
            res.send("error")
        }

    });



    
})
// app.get("/port", function(req,res,next){
//     res.send("hello port"+a)
// })


app.listen(a, function () {
    console.log(" your  app is running")
})
mongoose.connect('mongodb://ali:123@ds117919.mlab.com:17919/mongoose');

mongoose.connection.on('connected', function () {
    console.log("Mongoose is connected");
});
