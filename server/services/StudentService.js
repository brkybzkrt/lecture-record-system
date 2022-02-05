const Student = require("../models/Student");


module.exports.getAllStudents=() => {

    return Student.find({});

}


module.exports.getStudent=(id) => {

    return Student.findById(id);

}
module.exports.getStudentByCode=(code) => {

    return Student.findOne({code});

}


module.exports.insertStudent=(data) => {

    const value = new Student(data);
    return value.save();
}

module.exports.deleteStudent=(id) => {

    return Student.findByIdAndDelete(id);
}

module.exports.updateStudent=(id,data) => {

    return Student.findByIdAndUpdate(id,data);
}


module.exports.login=(data)=>{

    return Student.findOne(data);
}


module.exports.getMe=(id)=>{

    
    return Student.findById(id).select("-password");
 }