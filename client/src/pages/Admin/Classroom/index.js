import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../../../components/Navbar"
import { deleteClassroom } from '../../../services/deleteRequests';
import { getClassroomsWithParent } from '../../../services/getRequests';

function Classroom() {
const [classrooms, setClassrooms] = useState([]);



   useEffect(() => {
    getClassroomsWithParent().then(({data})=>{
            setClassrooms(data);
            
        }).catch(err => {console.log(err.response.data);})
      
    },[classrooms]);
  


const delClassroom = (id) => {
  deleteClassroom(id)
}

 
  return <>
<Navbar/>

<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Code</th>
      <th scope="col">Name</th>
      <th scope="col">ParentCode</th>
      <th scope="col">Type</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>

    {classrooms.map(classroom => (
      
        <tr key={classroom._id}>
        <th scope="row">-</th>
        <td>{classroom.code}</td>
        <td>{classroom.name}</td>
        <td>{classroom.parentcode}</td>
        <td>{classroom.type}</td>
        <td><Link to={`/admin/classroom/update/${classroom._id}`} className="btn btn-success">Update</Link></td>
          <td><button className="btn btn-danger" onClick={()=>delClassroom(classroom._id)}>Delete</button></td>
          
          
          </tr>


        
    ))}
   

  </tbody>
</table>
<Link to={`/admin/classroom/add`} className="btn btn-success">Add New </Link>



  </>;
}

export default Classroom;
