const mongoose = require('mongoose');

//Connection mongodb 
mongoose.connect("mongodb://127.0.0.1:27017/user-app").then(()=>console.log('MongoDB Connected')).catch(err=>console.log(err));

//Schema

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required : true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required : true,
        unique : true,
    },
    jobTitle: {
        type: String,
    },
    gender: {
        type: String,
    }

});

//models

const user = mongoose.model("user",userSchema);


