const {getAllStudents, insertStudent, deleteStudent,updateStudent, getStudent} = require('../services/StudentService');



module.exports.getStudents=async(req,res) =>{

   await getAllStudents().then(result=>{

    res.status(200).send(result);
   }).catch((err)=>{

    res.status(500).send(err);
    
   })
}

module.exports.getOneStudent=async(req,res) =>{

   try {
      const {id}= req.params;

      const value =await getStudent(id);

      if(!value){
         res.status(404).send('There is no student like this')
      }

      res.status(200).send(value);
   } catch (error) {
      res.status(500).send(error.message);
   }
}



module.exports.addStudent=async(req,res) =>{

    
    await insertStudent(req.body).then(result=>{
 
     res.status(201).send(result);
    }).catch((err)=>{
 
     res.status(500).send(err);
     
    })
 }


 module.exports.removeStudent= async(req,res) =>{

    const {id} = req.params;
   await deleteStudent(id).then(result=>{
 
     res.status(200).send(result);
    }).catch((err)=>{
 
     res.status(500).send(err);
     
    })
 }


 module.exports.uptStudent=(req,res) =>{

    const {id} = req.params;
    updateStudent(id,req.body).then(result=>{
 
     res.status(200).send(result);
    }).catch((err)=>{
 
     res.status(500).send(err);
     
    })
 }