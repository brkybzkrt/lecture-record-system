import {createContext,useContext,useState,useEffect} from "react"
import { meAdmin } from "../services/authRequests";

const AdminContext = createContext();

const AdminProvider=({children})=>{

    const [admin, setAdmin] = useState({role:""});
    const [adminLoggedIn, setAdminLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
  

    useEffect(() => {
        
        (async () => {
            try {
                const {data} = await meAdmin();
              
                await setAdmin(data);
               
                setAdminLoggedIn(true);
                setLoading(false);
            } catch (e) {
                setLoading(false);
            }

        })()

        


    },[]);

  


    const login = (data)=>{
        const {token,...leftData}=data;
        setAdmin(leftData);
        setAdminLoggedIn(true);
        localStorage.setItem('access_token', token.access_token);
        localStorage.setItem('reflesh_token', token.reflesh_token);

    }

    const logout = ()=>{
        setAdminLoggedIn(false);
        setAdmin(null);
    }

   
  
    
    
    


    const values={
        admin,login,adminLoggedIn,logout
    }

    if(loading){
     
        return (
            <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        )

    }
    return <AdminContext.Provider value={values}>{children}</AdminContext.Provider>
}
const useAdmin=()=>useContext(AdminContext)

export {useAdmin,AdminProvider};