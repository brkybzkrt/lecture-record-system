const {Schema,model} = require('mongoose');


const FacultyMemberModel= new Schema({

    code:{type:String,required:true,unique:true},
    name:{type:String,match:[/([a-zA-Zğıöüşç]{2,50})\ ?([a-zA-Zğıöüşç]{2,50})?/gi]},
    surname:{type:String,match:[/[a-zA-Zğıöüşç]{2,50}/gi]},
    email:{type:String,match:[/(\w+)\@(\w+)\.([a-z]{2,})\.?([a-z]{2})?/gi]},
    startdate:{type:String,match:[/([0-9]{4})\-([0-9]{2})\-([0-9]{2})/gi]}
},{versionKey:false});




const FacultyMember = model('FacultyMember',FacultyMemberModel);

module.exports =FacultyMember;