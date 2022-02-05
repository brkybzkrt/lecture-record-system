const {getAllFacultyMembers, insertFacultyMember, deleteFacultyMember,updateFacultyMember, getFacultyMember, getFacultyMemberByCode} = require('../services/FacultyMemberService');



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


   try {
         const {code}= req.body;
        const isExists= await getFacultyMemberByCode(code)
  
        if(isExists){
           return res.status(400).send('There is a faculty member like this')
          }
  
          const response=await insertFacultyMember(req.body);
          res.status(201).send(response);
   } catch (error) {
        res.status(500).send(err);
   }
  
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