//jshint esversion:6

const express = require("express");
const bodyParser = require("body-Parser");
const date = require(__dirname + "/date.js");

const app = express();

const itemsarray = ["Ex.add your task","Ex.Study"];
const workItemsarray =[];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("Public"))


app.get("/",function(req,res){
  const day = date.getDate();
      res.render("list", {listTitle: day , NewListItems: itemsarray});
});


app.post("/",function(req,res){
      const item_push = req.body.inputnewItempost;

  if (req.body.list ==="Work"){
      workItemsarray.push(item_push);
      res.redirect("/work");

  } else {
    itemsarray.push(item_push);
    res.redirect("/");
  }

    });

app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work List",NewListItems:workItemsarray});
    });


app.listen(3000,function(){
console.log("Server started on port 3000")

});
