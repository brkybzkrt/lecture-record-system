import {Route,Redirect} from 'react-router-dom';

import {useAdmin} from "../context/AdminContext"

function MainAdminRoute({component:Component,...rest}) {

   const {admin,adminLoggedIn} = useAdmin(); 
   //const isLoggedIn = localStorage.getItem("access_token");
  return <Route {...rest} render={(props) =>{
    if(admin?.role==="admin" && adminLoggedIn){
        return <Redirect to={{pathname:'/admin/main'}}></Redirect>
         
    }
    return <Component {...props} />

    
  }} />;
}

export default MainAdminRoute;
