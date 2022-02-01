const Admin= require('../models/Admin');



module.exports.register=(data)=>{

    const value = new Admin(data);
    return value.save();
}


module.exports.login=(data)=>{

    return Admin.findOne(data);
}

module.exports.getMe=(id)=>{

   return Admin.findById(id).select("-password");
}