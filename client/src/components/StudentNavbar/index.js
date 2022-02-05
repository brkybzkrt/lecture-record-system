import React from 'react';
import { Link, NavLink, useHistory } from "react-router-dom";

import {useUser} from "../../context/UserContext"
function StudentNavbar() {
  const history = useHistory();

  const {logout,countOfLectures} = useUser();

  const handlelogout=() => {
   
    logout();
    history.push('/authStudent')
    localStorage.removeItem('access_token');
    localStorage.removeItem('reflesh_token');
  }

  return <div className="row">
  <div className="btn-group" role="group" aria-label="Basic example">

    {countOfLectures==5 ? <NavLink to="/student/lectureRecord" type="button" className="btn btn-primary disabled"> Ders Seçimi Ekranı</NavLink>:  <NavLink to="/student/lectureRecord" type="button" className="btn btn-primary "> Ders Seçimi Ekranı</NavLink>}
  
    <Link onClick={()=>handlelogout()} type="button" className="btn btn-danger" >Çıkış</Link>
   
  
  </div>
</div>
;
}

export default StudentNavbar;
