const express = require('express');
const PORT = 3000;
const app = express();
const User = require('./schema');

app.use = express.json();


app.get('/',async (req,res)=>{
    res.send("This is Home Route and this is my backend ca - 2");
})

app.post('/signup',async (req,res)=>{
    try{
        const{username , email , password , DateofBirth} = req.body;
        
        if(!username){
            res.status(400).send("username can  not be empty");
        }
        if(!email){
            res.status(400).send("email cannot be empty");
        }
        if(!password && 8<=password.length()<=16){
            res.status(400).send("password length should be greater than or equal to 8 or less than or equal to 16");
        }
        if(!DateofBirth){
            res.status(400).send("DateofBirth cannot be empty");
        }
        const newuser = User.create({username,email,password,DateofBirth})
        await newuser.save();

        res.status(201).send("User created succesfully",newuser);

    }
    catch(error){
        if(!newuser){
            res.status(500).error(message = "Server error", error)
        }
    }
})

app.listen(PORT,async(req,res) => {
console.log(`Server is running on http://localhost:${PORT}`)
})