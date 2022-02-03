
import { Switch, Route } from "react-router-dom";

import Navbar from "../Navbar";
import Home from "../../pages/Home";
import StudentLogin from "../../pages/Student/StudentLogin";
import AdminLogin from "../../pages/Admin/AdminLogin";
import Classroom from "../../pages/Admin/Classroom";
import FacultyMember from "../../pages/Admin/FacultyMember";
import Lecture from "../../pages/Admin/Lecture";
import Student from "../../pages/Admin/Student";
import AddLecture from "../../pages/Admin/Lecture/AddLecture";
import AddStudent from "../../pages/Admin/Student/AddStudent";
import AddClassroom from "../../pages/Admin/Classroom/AddClassroom";
import AddFacultyMember from "../../pages/Admin/FacultyMember/AddFacultyMember";


import UpdateLecture from "../../pages/Admin/Lecture/UpdateLecture";
import UpdateStudent from "../../pages/Admin/Student/UpdateStudent";
import UpdateFacultyMember from "../../pages/Admin/FacultyMember/UpdateFacultyMember";
import UpdateClassroom from "../../pages/Admin/Classroom/UpdateClassroom";

import StudentMainPage from "../../pages/Student/StudentMainPage"

import ProtectedRoute from "../../pages/ProtectedRoute";
import { useUser } from "../../context/UserContext";
import LectureRecord from "../../pages/Student/LectureRecord";


function App() {

  const {loggedIn} = useUser();
  return (
    <div className="App">

      {loggedIn && <Navbar/> }
     

      <Switch>
       
        <Route path="/" exact component={Home}/>
     
        
        <Route path="/authAdmin" exact component={AdminLogin}/>
        <Route path="/authStudent" exact component={StudentLogin}/>


        <ProtectedRoute path="/admin/classroom" exact component={Classroom}/>
        <ProtectedRoute path="/admin/classroom/update/:id" exact component={UpdateClassroom}/>
        <ProtectedRoute path="/admin/classroom/add" exact component={AddClassroom}/>


        <ProtectedRoute path="/admin/facultyMember" exact component={FacultyMember}/>
        <ProtectedRoute path="/admin/facultyMember/update/:id" exact component={UpdateFacultyMember}/>
        <ProtectedRoute path="/admin/facultyMember/add" exact component={AddFacultyMember}/>


        <ProtectedRoute path="/admin/lecture" exact component={Lecture}/>
        <ProtectedRoute path="/admin/lecture/update/:id" exact component={UpdateLecture}/>
        <ProtectedRoute path="/admin/lecture/add" exact component={AddLecture}/>
       


        <ProtectedRoute path="/admin/student" exact component={Student} />
        <ProtectedRoute path="/admin/student/update/:id" exact component={UpdateStudent}/>
        <ProtectedRoute path="/admin/student/add" exact component={AddStudent}/>
        
        LectureRecord
        <ProtectedRoute path="/student/main" exact component={StudentMainPage}/>
        <ProtectedRoute path="/student/lectureRecord" exact component={LectureRecord}/>


        
      </Switch>
    </div>
  );
}

export default App;
