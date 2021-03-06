const FacultyMember = require("../models/FacultyMember");


module.exports.getAllFacultyMembers=() => {

   return FacultyMember.find();

}
module.exports.getFacultyMember=(id) => {

    return FacultyMember.findById(id);

}

module.exports.getFacultyMemberByCode=(code) => {

    return FacultyMember.findOne({code});

}

module.exports.insertFacultyMember=(data) => {

    const value = new FacultyMember(data);
    return value.save();
}

module.exports.deleteFacultyMember=(id) => {

    return FacultyMember.findByIdAndDelete(id);
}

module.exports.updateFacultyMember=(id,data) => {

    return FacultyMember.findByIdAndUpdate(id,data);
}