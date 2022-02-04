import React, { useEffect, useState } from "react";
import { getstudents } from "../../../services/getRequests";
import { deleteStudent } from "../../../services/deleteRequests";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";

function Student() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getstudents()
      .then((value) => {
        setStudents(value.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [students]);

  const delStudent = async (id) => {
    await deleteStudent(id);
  };

  return (
    <>
<Navbar/>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Code</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">update</th>
            <th scope="col">delete</th>
          </tr>
        </thead>
        <tbody>
          {students.map((lec) => (
            <tr key={lec._id}>
              <th scope="row"></th>
              <td>{lec.code}</td>
              <td>{lec.name}</td>
              <td>{lec.surname}</td>

              <td><Link to={`/admin/student/update/${lec._id}`} className="btn btn-success">Update</Link></td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={()=>delStudent(lec._id)}>
                  Delete
                </button>
              </td>

       
            </tr>
          ))}
        </tbody>
      </table>

      <Link to={`/admin/student/add`} className="btn btn-success">Add New</Link>
    </>
  );
}

export default Student;
