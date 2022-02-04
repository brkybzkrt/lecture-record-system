const Lecture = require("../models/Lecture");


module.exports.getAllLectures=() => {

    return Lecture.find({});

}

module.exports.getLecture=(id) => {

    return Lecture.findById(id);

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


module.exports.findIsMandatory=(lectureId) => {

    return Lecture.findOne({_id:lectureId}).select('ismandatory');
}
