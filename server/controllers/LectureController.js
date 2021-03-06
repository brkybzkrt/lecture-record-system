const {getAllLectures, insertLecture, deleteLecture,updateLecture, getLecture, getLectureByCode} = require('../services/LectureService');



module.exports.getLectures=async(req,res) =>{

   await getAllLectures().then(result=>{

    res.status(200).send(result);
   }).catch((err)=>{

    res.status(500).send(err);
    
   })
}

module.exports.getOneLecture=async(req,res) =>{

   try {
      const {id}= req.params;

      const value =await getLecture(id);

      if(!value){
         res.status(404).send('There is no Lecture like this')
      }

      res.status(200).send(value);
   } catch (error) {
      res.status(500).send(error.message);
   }
}


module.exports.addLecture=async(req,res) =>{

   try {
         const {code}= req.body;
        const isExists= await getLectureByCode(code)
  
        if(isExists){
           return res.status(400).send('There is a lecture like this')
          }
  
          const response=await insertLecture(req.body);
          res.status(201).send(response);
   } catch (error) {
        res.status(500).send(error);
   }
  
} 


   


 module.exports.removeLecture= async(req,res) =>{

    const {id} = req.params;
   await deleteLecture(id).then(result=>{
 
     res.status(200).send(result);
    }).catch((err)=>{
 
     res.status(500).send(err);
     
    })
 }


 module.exports.uptLecture=(req,res) =>{

    const {id} = req.params;
    updateLecture(id,req.body).then(result=>{
 
     res.status(200).send(result);
    }).catch((err)=>{
 
     res.status(500).send(err);
     
    })
 }