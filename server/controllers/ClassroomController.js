const {getAllClassrooms, insertClassroom, deleteClassroom,updateClassroom} = require('../services/ClassroomService');



module.exports.getClassrooms=async(req,res) =>{

   await getAllClassrooms().then(result=>{

    res.status(200).send(result);
   }).catch((err)=>{

    res.status(500).send(err);
    
   })
}




module.exports.addClassroom=async(req,res) =>{

    
    await insertClassroom(req.body).then(result=>{
 
     res.status(201).send(result);
    }).catch((err)=>{
 
     res.status(500).send(err);
     
    })
 }


 module.exports.removeClassroom= async(req,res) =>{

    const {id} = req.params;
   await deleteClassroom(id).then(result=>{
 
     res.status(200).send(result);
    }).catch((err)=>{
 
     res.status(500).send(err);
     
    })
 }


 module.exports.uptClassroom=(req,res) =>{

    const {id} = req.params;
    updateClassroom(id,req.body).then(result=>{
 
     res.status(200).send(result);
    }).catch((err)=>{
 
     res.status(500).send(err);
     
    })
 }