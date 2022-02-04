import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { addClassroom } from '../../../services/postRequests';

function AddClassroom() {
  const history= useHistory();

  const {handleSubmit,handleChange} = useFormik({
  initialValues: {
      code: '',
      name: '',
      parentcode: '',
      type: ''
  },
  onSubmit: async(values) => {
    try {
    
      await addClassroom(values);
      
      history.push('/admin/classroom')
    } catch (e){
      console.log(e.message);
    } 
  },
});



return <>

<h2 className="col-md-6 offset-md-3 text-center">Add Classroom</h2>

<form  className="col-md-6 offset-md-3" onSubmit={handleSubmit}>
        <label htmlFor="code">code</label>
        <input type="text" name="code" className="form-control" onChange={handleChange}/>
        <br/>
        <label htmlFor="name">name</label>
        <input type="text" name="name" className="form-control" onChange={handleChange}/>
        <br/>
        <label htmlFor="parentcode">ParentCode</label>
        <input type="text" name="parentcode" className="form-control" onChange={handleChange}/>
        <br/>
        <label htmlFor="type">Type</label>
        <input type="text" name="type" className="form-control" onChange={handleChange}/>
        <br/>
        <button type="submit" className="btn btn-primary">Submit</button>
        <br/>

      
  </form>

</>
}

export default AddClassroom;
