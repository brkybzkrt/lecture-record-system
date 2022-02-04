import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import { deleteLecture } from '../../../services/deleteRequests';
import {  getLectures } from '../../../services/getRequests';

function Lecture() {
  const [lectures, setlectures] = useState([]);
   
  
  useEffect(() => {
      
    getLectures().then(value=>{
      setlectures(value.data);
        }).catch(err => {console.log(err.message);})
      
    },[]);
    
    
  const delLecture = (id) => {

    deleteLecture(id);
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
        <th scope="col">Day</th>
        <th scope="col">Hour</th>
        <th scope="col">update</th>
        <th scope="col">delete</th>
      </tr>
    </thead>
    <tbody>
  
      {lectures.map(lec => (
        
          <tr key={lec._id}>
          <th  scope="row"></th>
          <td>{lec.code}</td>
          <td>{lec.name}</td>
          <td>{lec.ismandatory}</td>
          <td>{lec.day}</td>
          <td>{lec.hour}</td>
          <td><Link to={`/admin/lecture/update/${lec._id}`} className="btn btn-success">Update</Link></td>
          <td><button className="btn btn-danger" onClick={()=>delLecture(lec._id)}>Delete</button></td>
        
          </tr>
      ))}
     
     
    </tbody>
  </table>
  <Link to={`/admin/lecture/add`} className="btn btn-success">Add New </Link>
  
  
    </>;
}

export default Lecture;
