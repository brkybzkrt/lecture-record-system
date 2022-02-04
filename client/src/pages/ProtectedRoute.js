import {Route,Redirect} from 'react-router-dom';

import {useUser} from "../context/UserContext"
import {useAdmin} from "../context/AdminContext"

function ProtectedRoute({component:Component,...rest}) {

   const {loggedIn} = useUser(); 
   const {adminLoggedIn} = useAdmin(); 
  return <Route {...rest} render={(props) =>{
    if(loggedIn | adminLoggedIn){
        return <Component {...props} />
    }
    return <Redirect to={{pathname:'/'}}></Redirect>

    
  }} />;
}

export default ProtectedRoute;
