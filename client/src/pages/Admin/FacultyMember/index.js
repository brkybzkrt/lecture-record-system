import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar';

import { deleteFacultyMember } from '../../../services/deleteRequests';
import {  getFacultyMembers } from '../../../services/getRequests';

function FacultyMember() {
  const [facultyMembers, setfacultyMembers] = useState([]);
   useEffect(() => {
      
    getFacultyMembers().then(value=>{
      setfacultyMembers(value.data);
        }).catch(err => {console.log(err.message);})
      
    },[facultyMembers]);
    
    const delFacultyMember = (id) => {

      deleteFacultyMember(id)
    }
  return  <>
<Navbar/>
  
  <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Code</th>
        <th scope="col">Name</th>
        <th scope="col">Surname</th>
        <th scope="col">Email</th>
        <th scope="col">Start Date</th>
        <th scope="col">Update</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody>
  
      {facultyMembers.map(fm => (
        
          <tr key={fm._id}>
          <th scope="row">-</th>
          <td>{fm.code}</td>
          <td>{fm.name}</td>
          <td>{fm.surname}</td>
          <td>{fm.email}</td>
          <td>{fm.startdate}</td>
          <td><Link to={`/admin/facultyMember/update/${fm._id}`} className="btn btn-success">Update</Link></td>
          <td><button className="btn btn-danger" onClick={()=> delFacultyMember(fm._id)}>Delete</button></td>
          
          </tr>
      ))}
     
     
    </tbody>
  </table>
  <Link to={`/admin/facultyMember/add`} className="btn btn-success">Add New</Link>
  
    </>;
}

export default FacultyMember;
