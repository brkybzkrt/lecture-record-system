const {Schema,model} = require('mongoose');


const LectureModel= new Schema({

    code:{type:String,required:true,unique:true},
    name:{type:String,required:true,match:[/[a-zA-Zğıöüşç]{2,50}/gi]},
    ismandatory:{type:String,required:true,match:[/[01]{1}/g]},
    day:{type:String,required:true,match:[/[1234567]{1}/g]},
    hour:{type:String,required:true,match:[/[0-9]{2}\:[0-9]{2}/gi]}
},{versionKey:false});




const Lecture = model('Lecture',LectureModel);

module.exports =Lecture;