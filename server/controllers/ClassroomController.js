const {getAllClassrooms, insertClassroom, deleteClassroom,updateClassroom, getClassroom, getAllClassroomsWithParentCode, getClassroomByCode} = require('../services/ClassroomService');



module.exports.getClassrooms=async(req,res) =>{

   await getAllClassrooms().then(result=>{

    res.status(200).send(result);
   }).catch((err)=>{

    res.status(500).send(err);
    
   })
}

module.exports.getClassroomsWithParent=async(req,res) =>{

   await getAllClassroomsWithParentCode().then(result=>{

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

    try {
       const {code}= req.body;
      const isExists= await getClassroomByCode(code)

      if(isExists){
         return res.status(400).send('There is a classroom like this')
        }

        const response=await insertClassroom(req.body);
        res.status(201).send(response);
    } catch (error) {
      res.status(500).send(err);
    }

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