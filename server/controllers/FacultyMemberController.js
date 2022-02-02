const {getAllFacultyMembers, insertFacultyMember, deleteFacultyMember,updateFacultyMember, getFacultyMember} = require('../services/FacultyMemberService');



module.exports.getFacultyMembers=async(req,res) =>{

   
   await getAllFacultyMembers().then(result=>{
   
    res.status(200).send(result);
   }).catch((err)=>{

    res.status(500).send(err);
    
   })
}

module.exports.getOneFacultyMember=async(req,res) =>{

   try {
      const {id}= req.params;

      const value =await getFacultyMember(id);

      if(!value){
         res.status(404).send('There is no faculty member like this')
      }

      res.status(200).send(value);
   } catch (error) {
      res.status(500).send(error.message);
   }
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