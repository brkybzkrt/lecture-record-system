const { cryptedPassword, createAccessToken, createRefleshToken } = require('../helpers');
const {getAllStudents, insertStudent, deleteStudent,updateStudent, getStudent, login, getMe} = require('../services/StudentService');



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



 module.exports.loginStudent= async(req,res) => {

   req.body.password=cryptedPassword(req.body.password);
   
   const input =req.body;

   try {
      

       const student= await login({code:input.code});

       if(!student){return res.status(404).send("The code was not found.")}

       const isMatched= await student.password===input.password;

       if(!isMatched){return res.status(401).send('code or password not correct')}

       const currentUser =student.toObject()
       delete currentUser.password;
       
       User={...currentUser,token:{access_token:createAccessToken(student),reflesh_token:createRefleshToken(student)}}

       res.status(200).send(User)

   } catch (error) {
       res.status(500).send(error.message)
   }
}

module.exports.meStudent = async (req, res, next) => {
	const { _doc} = req.user;

	try {
		const user = await getMe(_doc._id);

		res.status(200).json(user);
	} catch (e) {
		next(e);
	}
};