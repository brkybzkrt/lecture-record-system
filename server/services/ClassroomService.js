const Classroom = require("../models/Classroom");


module.exports.getAllClassrooms=() => {

    return Classroom.find({parentcode:/[a-zA-Z0-9]+/});

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



