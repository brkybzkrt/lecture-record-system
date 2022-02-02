const {getAllClassrooms, insertClassroom, deleteClassroom,updateClassroom, getClassroom} = require('../services/ClassroomService');



module.exports.getClassrooms=async(req,res) =>{

   await getAllClassrooms().then(result=>{

    res.status(200).send(result);
   }).catch((err)=>{

    res.status(500).send(err);
    
   })
}

module.exports.getOneClassroom=async(req,res) =>{

   try {
      const {id}= req.params;

      const value =await getClassroom(id);

      if(!value){
         res.status(404).send('There is no classroom like this')
      }

      res.status(200).send(value);
   } catch (error) {
      res.status(500).send(error.message);
   }
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