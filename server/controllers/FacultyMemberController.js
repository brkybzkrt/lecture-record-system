const {getAllFacultyMembers, insertFacultyMember, deleteFacultyMember,updateFacultyMember} = require('../services/FacultyMemberService');



module.exports.getFacultyMembers=async(req,res) =>{

   
   await getAllFacultyMembers().then(result=>{
   
    res.status(200).send(result);
   }).catch((err)=>{

    res.status(500).send(err);
    
   })
}




module.exports.addFacultyMember=async(req,res) =>{

    
    await insertFacultyMember(req.body).then(result=>{
 
     res.status(201).send(result);
    }).catch((err)=>{
 
     res.status(500).send(err);
     
    })
 }


 module.exports.removeFacultyMember= async(req,res) =>{

    const {id} = req.params;
   await deleteFacultyMember(id).then(result=>{
 
     res.status(200).send(result);
    }).catch((err)=>{
 
     res.status(500).send(err);
     
    })
 }


 module.exports.uptFacultyMember=(req,res) =>{

    const {id} = req.params;
    updateFacultyMember(id,req.body).then(result=>{
 
     res.status(200).send(result);
    }).catch((err)=>{
 
     res.status(500).send(err);
     
    })
 }