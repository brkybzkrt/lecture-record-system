const {Schema,model} = require('mongoose');


const LectureRecordModel= new Schema({

    lecturecode:{type:Schema.Types.ObjectId,ref:'Lecture'},
    lecturetype:{type:String,required:true,match:[/[01]{1}/gi]},
    facultymembercode:{type:Schema.Types.ObjectId,ref:'FacultyMember'},
    studentcode:{type:Schema.Types.ObjectId,ref:'Student'},
    classroomcode:{type:Schema.Types.ObjectId,ref:'Classroom'}
},{versionKey:false});




const LectureRecord = model('LectureRecord',LectureRecordModel);

module.exports =LectureRecord;