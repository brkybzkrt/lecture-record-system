const LectureRecord = require('../models/LectureRecord')

module.exports.getLecturesOfStudent=(studentId)=>{

    return LectureRecord.find({studentcode:studentId}).populate('classroomcode','name code').populate('facultymembercode','name surname code').populate('studentcode','name lastname code').populate('lecturecode','name code');
}

module.exports.getLecturesCountOfStudent=(studentId)=>{

    return LectureRecord.find({studentcode:studentId}).count();
}

module.exports.getLecturesCountOfStudentByIsMandatory=()=>{

   return LectureRecord.find().select('-facultymembercode -classroomcode');
}


module.exports.oll1=(studentId)=>{

    return LectureRecord.find({studentcode:studentId,lecturetype:'1'}).count();
}

module.exports.oll0=(studentId)=>{

    return LectureRecord.find({studentcode:studentId,lecturetype:'0'}).count();
}




module.exports.getLectureOfStudent=(studentId,lectureId)=>{

    return LectureRecord.findOne({studentcode:studentId,lecturecode:lectureId});
}


module.exports.insertLectureRecord=(data)=>{

    const value = new LectureRecord(data);
    return value.save();
}


module.exports.getAllLectureRecords=()=>{

    return LectureRecord.find();
}
