
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { addLecture } from '../../../services/postRequests';

function AddLecture() {
    const history= useHistory();

    const {handleSubmit,handleChange} = useFormik({
    initialValues: {
        code: '',
        name: '',
        ismandatory: '',
        day: '',
        hour:''
    },
    onSubmit: async(values) => {
      try {
        await addLecture(values);
        history.push('/admin/lecture')
      } catch (e){
        alert(e.response.data);
      } 
    },
  });



  return <>

  <h2 className="col-md-6 offset-md-3 text-center">Add Lecture</h2>

  <form  className="col-md-6 offset-md-3" onSubmit={handleSubmit}>
          <label htmlFor="code">code</label>
          <input type="text" name="code" className="form-control" onChange={handleChange}/>
          <br/>
          <label htmlFor="name">name</label>
          <input type="text" name="name" className="form-control" onChange={handleChange}/>
          <br/>
          <label htmlFor="ismandatory">ismandatory</label>
          <input type="text" name="ismandatory" className="form-control" onChange={handleChange}/>
          <br/>
          <label htmlFor="day">day</label>
          <input type="text" name="day" className="form-control" onChange={handleChange}/>
          <br/>
          <label htmlFor="hour">hour</label>
          <input type="text" name="hour" className="form-control mb-3" onChange={handleChange}/>
          <button type="submit" className="btn btn-primary">Submit</button>
          <br/>

        
    </form>
  
  </>;
}

export default AddLecture;
