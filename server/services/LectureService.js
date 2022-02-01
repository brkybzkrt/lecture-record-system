const Lecture = require("../model/Lecture");


module.exports.getAllLectures=() => {

    return Lecture.find({});

}


module.exports.insertLecture=(data) => {

    const value = new Lecture(data);
    return value.save();
}

module.exports.deleteLecture=(id) => {

    return Lecture.findByIdAndDelete(id);
}

module.exports.updateLecture=(id,data) => {

    return Lecture.findByIdAndUpdate(id,data);
}


