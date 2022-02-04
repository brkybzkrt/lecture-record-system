import { useFormik } from 'formik';
import {useUser} from "../../../context/UserContext"
import { loginStudent } from '../../../services/authRequests';


function StudentLogin({history}) {
  const {login} = useUser();

  const {handleSubmit,handleChange} = useFormik({
    initialValues: {
        code: '',
        password: '',
    },
    onSubmit: async(values) => {
      try {
      const result = await loginStudent(values);
      await login(result.data);
      history.push('/student/main')
      } catch (e) {
        
        alert(e.response.data)
        
      }
      
    },
  });

  return <>

  <h2 className="col-md-6 offset-md-3 text-center">Student Login</h2>

  <form  className="col-md-6 offset-md-3" onSubmit={handleSubmit}>
         
          <label htmlFor="code">Student Code</label>
          <input type="text" name="code" className="form-control" onChange={handleChange}/>
          <br/>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" className="form-control mb-3" onChange={handleChange}/>
          <button type="submit" className="btn btn-primary">Submit</button>
          <br/>

        
    </form>
  
  </>;
}

export default StudentLogin;
