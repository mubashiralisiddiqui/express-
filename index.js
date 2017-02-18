
var express=require ("express");
var mongoose = require("mongoose")

var app = express();
var a = (process.env.PORT || 3000)


///shema and modal  of database////

var studentSchema = new mongoose.Schema({
    name: String
});
var studentModel = mongoose.model("student",studentSchema);
//Schema and model of database//


app.get("/add", function(req,res,next){

    var newstudent = new studentModel({
        name: "ali"
    })
   newstudent.save(function(err,data){
       if(!err){
           res.send("saved")
       }
       else{
           res.send("error")
       }
   })

})






// app.get("/express", function(req,res,next){
//     res.send("hello express")
// })
// app.get("/port", function(req,res,next){
//     res.send("hello port"+a)
// })


app.listen(a,function(){
    console.log(" your  app is running")
})
mongoose.connect('mongodb://ali:123@ds117919.mlab.com:17919/mongoose');

mongoose.connection.on('connected', function () {
    console.log("Mongoose is connected");
});
