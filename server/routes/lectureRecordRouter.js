const {Router}= require('express');
const { addLectureRecord, getLectureRecords,getAllLecturesOfStudent } = require('../controllers/LectureRecordController');


const router = Router()



router.post('/add', addLectureRecord)
router.get('/getAll', getLectureRecords)
router.get('/getLecturesById/:id', getAllLecturesOfStudent)


// router.get('/deneme', async(req, res) => {
        
//     getLecturesCountOfStudentByIsMandatory().populate('lecturecode','-name -_id -day -hour').populate('studentcode','-password -name -_id').exec(function(err,lectureRecords){

//     lectureRecords= lectureRecords.filter(function(lectureRecord){

//         return lectureRecord.lecturecode.ismandatory=== req.body.ismandatory && lectureRecord.studentcode.code===req.body.studentcode;
//     });


//     res.status(200).json(lectureRecords.length)
// })
// })



module.exports =router;