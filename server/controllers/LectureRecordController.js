const { getLecturesOfStudent, getAllLectureRecords, insertLectureRecord, getLectureOfStudent, getLecturesCountOfStudent, oll1, oll0 } = require("../services/LectureRecordService");
const { findIsMandatory } = require("../services/LectureService");



module.exports.addLectureRecord=async(req,res) =>{

    const {studentcode,lecturecode}= req.body;
     
    try {
        const {ismandatory} = await findIsMandatory(lecturecode);
        if(ismandatory==="1") {
            const lecturetype='1'
            const count =await  oll1(studentcode);
            if(count===3) {return res.status(400).send('This student has already 3 mandatory lectures')}

            const counts = await getLecturesCountOfStudent(studentcode); 
            if(counts>=5){return res.status(400).send('This student has already 5 lectures')}
            const isAlreadyExist= await getLectureOfStudent(studentcode,lecturecode);
            if(isAlreadyExist) {return res.status(400).send('This student has already this lecture')}

            const result= await insertLectureRecord({...req.body,lecturetype});
            res.status(201).send(result);
        }
        else {
        lecturetype="0"

        const count =await  oll0(studentcode);
            if(count===2) {return res.status(400).send('This student has already 2 option lectures')}

        const counts = await getLecturesCountOfStudent(studentcode); 
        if(counts>=5){return res.status(400).send('This student has already 5 lectures')}
        const isAlreadyExist= await getLectureOfStudent(studentcode,lecturecode);
        if(isAlreadyExist) {return res.status(400).send('This student has already this lecture')}

        const result= await insertLectureRecord({...req.body,lecturetype});
        res.status(201).send(result);
    }
    } catch (error) {
        res.status(500).send(error.message)
    }
}
 



module.exports.getAllLecturesOfStudent=async(req,res) =>{

try {
    const {id}= req.params;
    const value= await getLecturesOfStudent(id);

    if(!value){

        res.status(404).send('This student has no lectures')
    }

    res.status(200).send(value);
} catch (error) {
    res.status(500).send(error.message);
}
}


module.exports.getLectureRecords=async(req,res) =>{

    
    try {
        const result =await getAllLectureRecords();
        res.status(200).send(result);

    } catch (error) {
        res.status(500).send(error.message)
    }
}
 