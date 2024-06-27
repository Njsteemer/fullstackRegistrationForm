const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const hbs = require("hbs");
require('dotenv').config();

const connection = require("./db/conn");
const Register = require("./models/registration");

const port = process.env.PORT || 6600;

const static_path = path.join(__dirname, "../public");
const views_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.static(static_path));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "hbs");
app.set("views", views_path);
hbs.registerPartials(partials_path);

app.listen(port, async () =>{
    try {
        await connection;
        console.log(`Server is running on port : ${port}`);
    } catch (error) {
        console.log("Connection is note estalished yet.");
    }

});

app.get("/", (req,res) =>{
    res.render("index");
});

app.get("/success", (req,res) =>{
    res.render("register");
});

app.get("/welcome", (req,res) =>{
    res.render("login");
});

//create a user login
app.post("/login", async (req,res) => {
    try {
        const {userId, password} = req.body;
        console.log(req.body);
        const user = new Register({
            userId,
            password,
            
        });
        await user.save();
        res.redirect("/success");
        
    } catch(error) {
        console.log(error);
        res.status(400).send(error);
    }
})

//create a new user in our database
app.post("/register", async (req,res) => {
    try {
        const {userId, email, password, confirmpassword} = req.body;
        console.log(req.body);
        const user = new Register({
            userId,
            email,
            password,
            confirmpassword
            
        });
        await user.save();
        res.redirect("/success");
        
    } catch(error) {
        console.log(error);
        res.status(400).send(error);
    }
})
