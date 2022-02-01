const Student = require("../models/Student");


module.exports.getAllStudents=() => {

    return Student.find({});

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

