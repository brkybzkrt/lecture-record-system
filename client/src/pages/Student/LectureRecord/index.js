import  { useEffect,useState } from 'react';
import { useFormik } from 'formik';
import {useUser} from '../../../context/UserContext';
import { getClassrooms, getFacultyMembers, getLectures } from '../../../services/getRequests';
import { addLectureRecord } from '../../../services/postRequests';

function LectureRecord({history}) {

  const {user:{_id}}= useUser();


  const {values,handleSubmit,handleChange} = useFormik({
    initialValues: {
      facultymembercode:'',
      studentcode:_id,
      classroomcode:'',
      lecturecode:''
    },
    onSubmit: async(values) => {
      try {
        await addLectureRecord(values);
       
        history.push('/student/main')
      } catch (error) {
        alert(error.response.data);
      }
      
    },
  });

  const [facMembers, setFacMembers] = useState([]);
  const [classrooms, setClassrooms] = useState([]);
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    getClassrooms().then(value =>{
      setClassrooms(value.data);
    })
  }, []);
  
  useEffect(() => {
    getFacultyMembers().then(value =>{
      setFacMembers(value.data);
    })
  

  }, []);

  useEffect(() => {
    getLectures().then(value =>{
      setLectures(value.data);
    })
 
  
  }, []);

console.log(classrooms,lectures);

  return <>
<h2 className="col-md-6 offset-md-3 text-center">Lecture Record </h2>
<form onSubmit={handleSubmit} className="mt-3">
  
<select name="classroomcode" className="form-control mb-2" value={values.classroomcode} onChange={handleChange}>
<option >Choose a Classroom</option>
  {classrooms.map(c=>(
     <option key={c._id} value={c._id}>{c.name}</option>)

  )}</select>

<select name="lecturecode" className="form-control mb-2" value={values.lecturecode} onChange={handleChange}>
<option >Choose a Lecture</option>
  {lectures.map(l=>(
     <option key={l._id} value={l._id}>{l.name}</option>)

  )}</select>

<select name="facultymembercode" className="form-control" value={values.facultymembercode} onChange={handleChange}>
<option >Choose a Faculty Member</option>
  {facMembers.map(f=>(
     <option key={f._id} value={f._id}>{f.name+" "+ f.surname}</option>)

  )}</select>
  <br/>
          <button type="submit" className="btn btn-primary ">Submit</button>
          </form>
  </>;
}

export default LectureRecord;
