import {createContext,useContext,useState,useEffect} from "react"
import {  me } from "../services/authRequests";

const UserContext = createContext();

const UserProvider=({children})=>{
    const [user, setUser] = useState({role:"aa",_id:"asd"});
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [countOfLectures,setCountOfLectures]=useState("");

   console.log(user);
    const login = (data)=>{
        const {token,...leftData}=data;
        setUser(leftData);
        setLoggedIn(true);
        localStorage.setItem('access_token', token.access_token);
        localStorage.setItem('reflesh_token', token.reflesh_token);

    }

    const logout = ()=>{
        setLoggedIn(false);
        setUser(null);
    }

   
    useEffect(() => {
        
        (async () => {
            try {
                const {data} = await me();
                setUser(data);
                setLoggedIn(true);
                setLoading(false);
            } catch (e) {
                setLoading(false);
            }

        })()
    },[]);
    
    
    


    const values={
        user,login,loggedIn,logout,countOfLectures,setCountOfLectures
    }

    if(loading){
     
        return (
            <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        )

    }
    return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}
const useUser=()=>useContext(UserContext)

export {useUser,UserProvider};