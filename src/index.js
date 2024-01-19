const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const collection = require("./config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// use EJS as the view engine
app.set('view engine', 'ejs');

//static files
app.use(express.static("public"));

app.get('', (req, res) => {
    res.render("login");
});


//user register process
app.get('/signup', (req, res) => {
    res.render("signup");
});

app.post("/signup", async (req, res) => {
    const data = {
        name: req.body.username,
        password: req.body.password
    }

    if (!data.password) {
        res.status(400).send("Password is missing in the request body");
        return;
    }

    

    const existingUser = await collection.findOne({name: data.name});
    if (existingUser) {
        res.send("User already exists. Please choose a different username");
    } else {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);
        data.password = hashedPassword;

        try {
            const userdata = await collection.insertMany(data);
            console.log(userdata);
            res.send("User registered successfully");
        } catch (error) {
            console.error("Error registering user:", error.message);
            res.status(500).send("Internal Server Error");
        }
    } 
});

app.post('/login', async (req, res) => {
    try {
        const check = await collection.findOne({name: req.body.username});
        if (!check) {
            res.send("This user cannot be found:(");
        }

        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
        if (isPasswordMatch) {
            res.render("home");
        }else {
            res.send("Wrong password or login");
        }
    } catch (error) {
        console.error("Error during login:", error.message);
        res.status(500).send("Internal Server Error");
    }
});

const PORT = 3000;

app.listen(PORT, (error) => {
  if (error) {
    console.error("Error starting the server:", error.message);
  } else {
    console.log(`Server is running on Port ${PORT}`);
  }
});