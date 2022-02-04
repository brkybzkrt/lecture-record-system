import { useFormik, } from 'formik';
import { useHistory } from 'react-router-dom';
import { addFacultyMember } from '../../../services/postRequests';

function AddFacultyMember() {
    const history= useHistory();

  const {handleSubmit,handleChange} = useFormik({
  initialValues: {
      code: '',
      name: '',
      surname: '',
      email: '',
      startdate:''
  },
  onSubmit: async(values) => {
    try {
      await addFacultyMember(values);
      history.push('/admin/facultyMember')
    } catch (e){
      console.log(e.message);
    } 
  },
});



return <>

<h2 className="col-md-6 offset-md-3 text-center">Add Faculty Member</h2>

<form  className="col-md-6 offset-md-3" onSubmit={handleSubmit}>
        <label htmlFor="code">Code</label>
        <input type="text" name="code" className="form-control" onChange={handleChange}/>
        <br/>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" className="form-control" onChange={handleChange}/>
        <br/>
        <label htmlFor="surname">Surname</label>
        <input type="text" name="surname" className="form-control" onChange={handleChange}/>
        <br/>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" className="form-control" onChange={handleChange}/>
        <br/>
        <label htmlFor="startdate">Start Date</label>
        <input type="text" name="startdate" className="form-control mb-3" onChange={handleChange}/>
        <br/>
        <button type="submit" className="btn btn-primary">Submit</button>
        <br/>

      
  </form>

</>
}

export default AddFacultyMember;
