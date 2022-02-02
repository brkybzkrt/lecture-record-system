const Classroom = require("../models/Classroom");


module.exports.getAllClassrooms=() => {

    return Classroom.find({});

}

module.exports.getClassroom=(id) => {

    return Classroom.findById(id);

}

module.exports.insertClassroom=(data) => {

    const value = new Classroom(data);
    return value.save();
}

module.exports.deleteClassroom=(id) => {

    return Classroom.findByIdAndDelete(id);
}

module.exports.updateClassroom=(id,data) => {

    return Classroom.findByIdAndUpdate(id,data);
}



