import {Route,Redirect} from 'react-router-dom';

import {useAdmin} from "../context/AdminContext"
import {useUser} from "../context/UserContext"

function MainRoute({component:Component,...rest}) {

    const {user,loggedIn}=useUser();
    const {admin,adminLoggedIn}=useAdmin();
  
   //const isLoggedIn = localStorage.getItem("access_token");
  return <Route {...rest} render={(props) =>{
    if(admin?.role==="admin" && adminLoggedIn){
        return <Redirect to={{pathname:'/admin/main'}}></Redirect>
         
    }

    if(user?.role==="student" && loggedIn){
        return <Redirect to={{pathname:'/student/main'}}></Redirect>
    }
    return <Component {...props} />

    
  }} />;
}

export default MainRoute;
