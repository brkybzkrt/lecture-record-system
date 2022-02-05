import React, { useEffect, useState } from 'react';
import Navbar from '../../../components/Navbar';
import { useUser } from '../../../context/UserContext';
import { getStudentsLectures } from '../../../services/getRequests';

function StudentMainPage() {

  const {user,setCountOfLectures}= useUser();
  const  [studentslectures,setStudentslectures]=useState([]);

    useEffect( async() => {
      try {
       const {data}=await getStudentsLectures(user?._id)
         setStudentslectures(data);
         setCountOfLectures(data.length);
      } catch (error) {
         alert(error.response.data);
      }
    }, []);


    console.log(studentslectures);
  return (
    <>
  <Navbar/>
  <h2 className="table text-center">Seçilmiş Dersler</h2>
  <table className="table">

  
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Faculty Member Code</th>
      <th scope="col">Faculty Member Name</th>
      <th scope="col">Student Code</th>
      <th scope="col">Classroom Name</th>
      <th scope="col">Lecture Code</th>
      <th scope="col">Lecture Name</th>
    </tr>
  </thead>
  <tbody>

    {studentslectures.map(sl => (
      
        <tr key={sl._id}>
        <th scope="row">-</th>
        <td>{sl.facultymembercode.code}</td>
        <td>{sl.facultymembercode.name +" "+sl.facultymembercode.surname }</td>
        <td>{sl.studentcode.code}</td>
        <td>{sl.classroomcode.name}</td>
        <td>{sl.lecturecode.code}</td>
        <td>{sl.lecturecode.name}</td>
       
          
          
          </tr>


        
    ))}
   

  </tbody>
</table>
</>
)
}

export default StudentMainPage;
