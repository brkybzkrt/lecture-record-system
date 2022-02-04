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
  return (
    <>
  <Navbar/>
  <table className="table">

  
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Öğretmen Kodu</th>
      <th scope="col">Öğrenci kodu</th>
      <th scope="col">Sınıf Kodu</th>
      <th scope="col">Ders kodu</th>
    </tr>
  </thead>
  <tbody>

    {studentslectures.map(sl => (
      
        <tr key={sl._id}>
        <th scope="row">-</th>
        <td>{sl.facultymembercode.name}</td>
        <td>{sl.studentcode.code}</td>
        <td>{sl.classroomcode.name}</td>
        <td>{sl.lecturecode.name}</td>
       
          
          
          </tr>


        
    ))}
   

  </tbody>
</table>
</>
)
}

export default StudentMainPage;
