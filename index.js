import express from "express";
import bodyParser from "body-parser";
const port=process.env.PORT || 3000;
const app=express();
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
});
app.get("/login.html",(req,res)=>{
    res.render("login.ejs");
});
app.get("/contact",(req,res)=>{
    res.render("contact.ejs");
});
app.get("/about",(req,res)=>{
    res.render("about.ejs");
});
app.get("/blog",(req,res)=>{
    res.render("blog.ejs");
});

app.listen(port,()=>{
    console.log("Listening on port 3000");
});