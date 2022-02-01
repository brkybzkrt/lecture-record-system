const {Schema,model} = require('mongoose');
const { cryptedPassword } = require('../helpers');


const AdminModel= new Schema({

    username: {type:String,required:true},
    password:{type:String,required:true},
    email:{type:String,required:true}
},{versionKey:false});


AdminModel.pre('save', function(next){

        const user = this;
    
        if(!user.isModified('password')) return next();
        
       user.password = cryptedPassword(user.password)
        next();
})

const Admin = model('Admin',AdminModel);

module.exports =Admin;