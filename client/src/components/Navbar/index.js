
import React from "react";

import AdminNavbar from "../AdminNavbar"
import StudentNavbar from "../StudentNavbar"

import {useUser} from "../../context/UserContext";
import { useAdmin } from "../../context/AdminContext";
function Navbar() {

   const {user} = useUser();
   const {admin} = useAdmin();


  return (
   <>
   
   {admin?.role === "admin" &&  <AdminNavbar></AdminNavbar>}
   {user?.role === "student" && <StudentNavbar></StudentNavbar>}  

    

    </>
  );
}

export default Navbar;
