const express = require('express');
const PORT = 3000;
const app = express();
const User = require('./schema');

app.use(express.json());


app.get('/',async (req,res)=>{
    res.send("This is Home Route and this is my backend ca - 2");
})

app.post('/signup',async (req,res)=>{
    try{
        const{username , email , password , DateofBirth} = req.body;
        
        if(!username){
            res.status(400).json({message:"username can  not be empty"});
        }
        if(!email){
            res.status(400).json({message:"email cannot be empty"});
        }
        if(!password && 8<=password.length()<=16){
            res.status(400).json({message:"password length should be greater than or equal to 8 or less than or equal to 16"});
        }
        if(!DateofBirth){
            return res.status(400).json({message:"DateofBirth can not be empty"})
        }
        const newuser = User.create({username,email,password,DateofBirth})
        await newuser.save();

        res.status(201).json({message:"User created succesfully" , user:newuser});

    }
    catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
      }
})

app.listen(PORT,()=>{
console.log(`Server is running on http://localhost:${PORT}`)
})