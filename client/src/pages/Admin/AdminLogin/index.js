
import { useFormik } from 'formik';
import {useAdmin} from "../../../context/AdminContext"
import {loginAdmin} from "../../../services/authRequests"

function AdminLogin({history}) {
    const {login} = useAdmin();


    const {handleSubmit,handleChange} = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async(values) => {
      try {
        const result = await loginAdmin(values);
        await login(result.data);
        history.push('/admin/main')
      } catch (e){
        alert(e.response.data);
      } 
    },
  });



  return <>

  <h2 className="col-md-6 offset-md-3 text-center">Admin Login</h2>

  <form  className="col-md-6 offset-md-3" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" className="form-control" onChange={handleChange}/>
          <br/>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" className="form-control mb-3" onChange={handleChange}/>
          <button type="submit" className="btn btn-primary">Submit</button>
          <br/>

        
    </form>
  
  </>;
}

export default AdminLogin;
