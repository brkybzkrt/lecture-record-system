import {useAdmin} from "../../../context/AdminContext"
import Navbar from "../../../components/Navbar"
function AdminMain() {
    const {admin}= useAdmin();


  return <div>
    <Navbar/>
    
    <h2>Hoşgeldin {admin?.username}</h2>  </div>;
}

export default AdminMain;
