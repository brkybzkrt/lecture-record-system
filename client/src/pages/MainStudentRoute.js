import {Route,Redirect} from 'react-router-dom';

import {useUser} from "../context/UserContext"

function MainStudentRoute({component:Component,...rest}) {

   const {user,loggedIn} = useUser(); 
   //const isLoggedIn = localStorage.getItem("access_token");
  return <Route {...rest} render={(props) =>{
    if(user?.role==="student" && loggedIn){
        return <Redirect to={{pathname:'/student/main'}}></Redirect>
         
    }
    return <Component {...props} />

    
  }} />;
}

export default MainStudentRoute;
