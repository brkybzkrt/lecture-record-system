import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { addStudent } from '../../../services/postRequests';

function AddStudent() {
    const history= useHistory();

  const {handleSubmit,handleChange} = useFormik({
  initialValues: {
      code: '',
      name: '',
      surname: '',
      password:''
  },
  onSubmit: async(values) => {
    try {
      await addStudent(values);
      history.push('/admin/student')
    } catch (error){
     alert(error.response.data);
    } 
  },
});



return <>

<h2 className="col-md-6 offset-md-3 text-center">Add Student</h2>

<form  className="col-md-6 offset-md-3" onSubmit={handleSubmit}>
        <label htmlFor="code">code</label>
        <input type="text" name="code" className="form-control" onChange={handleChange}/>
        <br/>
        <label htmlFor="name">name</label>
        <input type="text" name="name" className="form-control" onChange={handleChange}/>
        <br/>
        <label htmlFor="surname">surname</label>
        <input type="text" name="surname" className="form-control" onChange={handleChange}/>
        <br/>
        <label htmlFor="password">password</label>
        <input type="password" name="password" className="form-control" onChange={handleChange}/>
        <br/>
      
        <button type="submit" className="btn btn-primary">Submit</button>
        <br/>

      
  </form>

</>;
}
export default AddStudent;
