import { NavLink } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { useAdmin } from "../../context/AdminContext";
function Home() {
   
  const {loggedIn} = useUser();
  const {adminLoggedIn} = useAdmin();
  return <>

    {!loggedIn && !adminLoggedIn  && <div  className="d-flex flex-row justify-content-around"><NavLink className="btn btn-primary " to="/authAdmin">Login as a Admin</NavLink>
      <NavLink className="btn btn-primary" to="/authStudent">Login as a Student</NavLink> </div>}
      
      <h1 className="text-center">
        Welcome to the Home page
      </h1>


  </>;
}

export default Home;
