const Classroom = require("../model/Classroom");


module.exports.getAllClassrooms=() => {

    return Classroom.find({});

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



