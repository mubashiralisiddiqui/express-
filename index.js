
var a = (process.env.PORT || 3000)
var express=require ("express");


var app = express();

app.get("/", function(req,res,next){
    res.send("hello world")
})
app.get("/express", function(req,res,next){
    res.send("hello express")
})
app.get("/port", function(req,res,next){
    res.send("hello port"+a)
})


app.listen(a,function(){
    console.log(" your  app is running")
})
mongoose.connect('mongodb://ali:123@ds117919.mlab.com:17919/mongoose');

mongoose.connection.on('connected', function () {
    console.log("Mongoose is connected");
});
