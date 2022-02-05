import React from 'react';
import { Link,useHistory } from "react-router-dom";

import {useAdmin} from "../../context/AdminContext";
function AdminNavbar() {
const history = useHistory();

const {logout} = useAdmin();

  const handlelogout=() => {
   
    logout();
    history.push('/authAdmin')
    localStorage.removeItem('access_token');
    localStorage.removeItem('reflesh_token');
  }
  return <>
<div className="row">
        <div className="btn-group" role="group" aria-label="Basic example">
          <Link to="/admin/lecture" type="button" className="btn btn-primary"> Ders</Link>
          <Link to="/admin/facultyMember" type="button" className="btn btn-primary">Öğretim Görevlisi</Link>
          <Link to="/admin/classroom" exact type="button" className="btn btn-primary">Sınıf
          </Link>
          <Link to="/admin/student" type="button" className="btn btn-primary">Öğrenci</Link>
          <Link to="/admin/main" type="button" className="btn btn-secondary">Admin Anasayfa</Link>
          <Link onClick={()=>handlelogout()} type="button" className="btn btn-danger">Çıkış</Link>
        </div>
    </div>
    

  </>;
}

export default AdminNavbar;
