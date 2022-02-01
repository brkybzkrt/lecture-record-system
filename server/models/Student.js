const {Schema,model} = require('mongoose');
const { cryptedPassword } = require('../helpers');

const StudentModel= new Schema({

    code:{type:String,match:[/[0-9]{10}/gi]},
    name:{type:String,match:[/[a-zA-Zğıöüşç]{2,50}/gi]},
    surname:{type:String,match:[/[a-zA-Zğıöüşç]{2,50}/gi]},
    password:{type:String,match:[/[a-zA-Z0-9ğıöüşç]{8,}/gi]}
},{versionKey:false});


StudentModel.pre('save', function(next){

    const user = this;

    if(!user.isModified('password')) return next();
    
   user.password = cryptedPassword(user.password)
    next();
})


const Student = model('Student',StudentModel);

module.exports =Student;