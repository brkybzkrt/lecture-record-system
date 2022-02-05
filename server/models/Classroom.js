const {Schema,model} = require('mongoose');


const ClassroomModel= new Schema({

    code:{type:String,unique:true},
    name:{type:String,unique:true},
    parentcode:String,
    type:{type:String,match:[/[01]{1}/g],required:true}
},{versionKey:false});




const Classroom = model('Classroom',ClassroomModel);

module.exports =Classroom;