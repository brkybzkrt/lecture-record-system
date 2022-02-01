const {getAllStudents, insertStudent, deleteStudent,updateStudent} = require('../services/StudentService');



module.exports.getStudents=async(req,res) =>{

   await getAllStudents().then(result=>{

    res.status(200).send(result);
   }).catch((err)=>{

    res.status(500).send(err);
    
   })
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